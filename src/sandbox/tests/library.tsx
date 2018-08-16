import React from 'react'

import {addSection, action} from '../core/UiTester'

import { PhotoType, PhotoSectionById, PhotoSectionId } from '../../common/models/Photo';
import CancelablePromise from '../../common/util/CancelablePromise';
import { Library } from '../../ui/components/library/Library'

import { getNonRawImgPath } from '../../ui/controller/ImageProvider'
import { testPhoto, testUprightPhoto, testPanoramaPhoto } from '../util/MockData'
import { createRandomDummyPhoto, createSection } from '../util/TestUtil'


const defaultSectionId: PhotoSectionId = '2018-08-15'
const defaultPhotos = [ testPhoto, testUprightPhoto, testPanoramaPhoto ]
const defaultSection = createSection(defaultSectionId, defaultPhotos)

const defaultProps = {
    style: { width: '100%', height: '100%' },
    isActive: true,

    isFetching: false,

    photoCount: 1042,
    totalPhotoCount: 12345,
    sectionIds: [ defaultSectionId ],
    sectionById: {
        [defaultSectionId]: defaultSection
    } as PhotoSectionById,
    selectedSectionId: null,
    selectedPhotoIds: [],
    showOnlyFlagged: false,
    isShowingTrash: false,

    fetchTotalPhotoCount: action('fetchTotalPhotoCount'),
    fetchSections: action('fetchSections'),
    getThumbnailSrc: (photo: PhotoType) => getNonRawImgPath(photo),
    createThumbnail: (photo: PhotoType) => {
        const thumbnailPath = getNonRawImgPath(photo)
        if (thumbnailPath === 'dummy') {
            return new CancelablePromise<string>(() => {})
        } else {
            return new CancelablePromise<string>(Promise.resolve(thumbnailPath))
        }
    },
    setSelectedPhotos: action('setSelectedPhotos'),
    setDetailPhotoById: action('setDetailPhotoById'),
    openExport: action('openExport'),
    setPhotosFlagged: action('setPhotosFlagged'),
    updatePhotoWork: action('updatePhotoWork'),
    toggleShowOnlyFlagged: action('toggleShowOnlyFlagged'),
    startScanning: action('startScanning'),
}


addSection('Library')
    .add('normal', context => (
        <Library
            {...defaultProps}
        />
    ))
    .add('selection', context => (
        <Library
            {...defaultProps}
            selectedPhotoIds={[ testPhoto.id ]}
        />
    ))
    .add('creating thumbnails', context => {
        let photos = [ ...defaultPhotos ]
        for (let i = 0; i < 100; i++) {
            photos.push(createRandomDummyPhoto())
        }
        const section = createSection(defaultSectionId, photos)

        return (
            <Library
                {...defaultProps}
                sectionIds={[ defaultSectionId ]}
                sectionById={{
                    [defaultSectionId]: section
                } as PhotoSectionById}
            />
        )
    })
    .add('Fetching photos', context => (
        <Library
            {...defaultProps}
            isFetching={true}
        />
    ))
    .add('Selection empty', context => (
        <Library
            {...defaultProps}
            photoCount={0}
            sectionIds={[]}
            sectionById={{}}
        />
    ))
    .add('No photos', context => (
        <Library
            {...defaultProps}
            photoCount={0}
            totalPhotoCount={0}
            sectionIds={[]}
            sectionById={{}}
        />
    ))