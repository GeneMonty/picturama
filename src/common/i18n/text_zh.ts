export default {

    common_cancel: '取消',
    common_backToLibrary: '返回图片馆',
    common_ratio: '{0}的{1}',
    common_error_photoNotExisting: '照片不存在',
    common_error_photoNotExisting_desc: '这张照片已经不在上次扫描时的位置了,也许它已经被移动、删除或它在一个不再连接的磁盘上',

    key_space: ``,  // TODO: 'Space'

    App_error_noWebGL_title: '没有WebGL',
    App_error_noWebGL_desc: 'Picturama需要有3D加速的图形卡才能运作,请查看系统设置中是否可以激活3D加速并重新启动Picturama',

    CropModeToolbar_aspect_free: '任意',
    CropModeToolbar_aspect_original: '原始',
    CropModeToolbar_aspect_square: '正方形',
    CropModeToolbar_changeToPortrait: '改成纵向',
    CropModeToolbar_changeToLandscape: '改成横向',
    CropModeToolbar_reset: '重置',
    CropModeToolbar_done: '开始',

    ErrorController_copied: '将报告复制到剪贴板',

    ErrorToast_title: '哦，不！出了点问题',
    ErrorToast_hideReport: '隐藏报告',
    ErrorToast_showReport: '显示报告',
    ErrorToast_copy: '复制',

    ExportDialog_title_one: '导出照片',
    ExportDialog_title_more: '导出{0}张照片',
    ExportDialog_format: '格式',
    ExportDialog_quality: '质量',
    ExportDialog_quality_low: '低 ({0}) - 最小尺寸',
    ExportDialog_quality_medium: '一般 ({0})',
    ExportDialog_quality_high: '高({0})',
    ExportDialog_quality_max: '最大({0})',
    ExportDialog_size: '尺寸',
    ExportDialog_size_S: '小 ({0})',
    ExportDialog_size_M: '一般 ({0})',
    ExportDialog_size_L: '大({0})',
    ExportDialog_size_original: '原始尺寸',
    ExportDialog_size_custom: '自定义',
    ExportDialog_customSizeSettings: '最大{0}的{1}像素',
    ExportDialog_customSizeSide_width: '宽度',
    ExportDialog_customSizeSide_height: '高度',
    ExportDialog_customSizeSide_size: '尺寸',
    ExportDialog_privacy: '隐私',
    ExportDialog_removeInfo: '删除额外信息',
    ExportDialog_removeInfo_desc: '这将从导出的照片中删除EXIF标签等额外信息,这是关于使用的相机，照片的位置或类似的信息',
    ExportDialog_removeInfo_jpgOnly: '额外信息目前只支持JPG格式,即只有当原始照片和导出的照片都是JPG时，才会导出额外的信息',
    ExportDialog_fileName: '文件名',
    ExportDialog_fileName_likeOriginal: '像原版一样',
    ExportDialog_fileName_sequence: '序列',
    ExportDialog_fileName_sequencePrefix: '前缀',
    ExportDialog_fileName_sequencePrefixDefault: '照片',
    ExportDialog_fileName_sequenceExample: '示例：{0}',
    ExportDialog_export: '导出',
    ExportDialog_exportingTo: '导出到{0}',
    ExportDialog_done_one: '完成导出照片',
    ExportDialog_done_more: '已完成导出{0}张照片',

    ImportProgressButton_phase_scan_dirs: '扫描文件夹',
    ImportProgressButton_phase_cleanup: '清理',
    ImportProgressButton_phase_import_photos: '导入',
    ImportProgressButton_phase_error: '扫描失败',
    ImportProgressButton_resume: '继续',
    ImportProgressButton_pause: '暂停',

    ImportController_importFinished: '扫描的{0}照片在{1}中',

    Library_noPhotos_title: '没有添加照片',
    Library_noSettings_message: '点击上面的{0}打开设置.',
    Library_noPhotos_message: '按{0}或下面的按钮开始扫描文件夹中的照片',
    Library_startScanning: '开始扫描',
    Library_emptyTrash: '垃圾桶已空',
    Library_emptyFavorites: '您还没有将任何照片标记为收藏夹',
    Library_emptyView: '您当前的视图不符合任何照片',
    Library_selectOtherView: '请选择左上角的其他视图',

    LibraryFilterButton_shown: '显示,{0}',
    LibraryFilterButton_filter_all: '所有照片',
    LibraryFilterButton_filter_favorites: ``,  // TODO: 'Favorites'
    LibraryFilterButton_filter_processed: '已编辑',
    LibraryFilterButton_filter_trash: '垃圾桶',
    LibraryFilterButton_filter_tag: '带标签"{0}" ',
    LibraryFilterButton_tag_title: '有标签：',

    LibraryTopBar_emptyTrashQuestion: '你确定要清空垃圾桶吗?',
    LibraryTopBar_moveToTrash: '移动到操作系统的垃圾桶',
    LibraryTopBar_emptyTrash: '清空垃圾桶',

    MainMenu_version: '版本{0}',
    MainMenu_settings: '设置',
    MainMenu_quit: '退出',
    MainMenu_file: '文件',
    MainMenu_export: '导出照片',
    MainMenu_scan: '扫描图像',
    MainMenu_view: '视图',
    MainMenu_toggleFullScreen: '切换全屏',
    MainMenu_developer: '开发者',
    MainMenu_toggleDevTools: '切换开发工具',
    MainMenu_toggleUiTester: '切换UI界面',
    MainMenu_reloadUi: '加载UI',

    Picture_showDetails: ``,  // TODO: 'View photo'
    Picture_select: ``,  // TODO: 'Select'
    Picture_deselect: ``,  // TODO: 'Deselect'
    Picture_error_createThumbnail: '创建缩略图失败',

    PhotoActionButtons_movedToTrash_one: '已将照片移动到垃圾桶',
    PhotoActionButtons_movedToTrash_more: '移动了{0}张照片到垃圾桶',
    PhotoActionButtons_restoredFromTrash_one: '从垃圾桶中恢复的照片',
    PhotoActionButtons_restoredFromTrash_more: '从垃圾桶中恢复了{0}张照片',
    PhotoActionButtons_removeFavorite: '从收藏夹中删除',
    PhotoActionButtons_addFavorite: '添加到收藏夹',
    PhotoActionButtons_trash: '移动到垃圾桶',
    PhotoActionButtons_restoreFromTrash: '从垃圾桶还原',
    PhotoActionButtons_restore: '还原',
    PhotoActionButtons_photoInfo: '显示所选照片的信息',
    PhotoActionButtons_export: '导出',

    PhotoDetailPane_prevPhoto: '上一张照片',
    PhotoDetailPane_nextPhoto: '下一张照片',
    PhotoDetailBody_selected: ``,  // TODO: 'Selected'
    PhotoDetailBody_select: ``,  // TODO: 'Select'
    PhotoDetailPane_edit: '编辑',

    PhotoInfo_title: '信息',
    PhotoInfo_showInFolder: '在文件夹中显示照片',
    PhotoInfo_copyPath: '复制路径',
    PhotoInfo_copyCoordinates: '复制坐标',
    PhotoInfo_noSelection_title: '没有选择照片',
    PhotoInfo_noSelection_message: '请选择左边的一张照片',
    PhotoInfo_exifData: 'Exif数据',
    PhotoInfo_show: 'show',
    PhotoInfo_hide: '隐藏',
    PhotoInfo_showAll: '显示所有',
    PhotoInfo_showLess: '显示部分',
    PhotoInfo_andMore: '和{0}更多',
    PhotoInfo_exifTitle_ifd0: '图像(IFD0)',
    PhotoInfo_exifTitle_ifd1: '缩略图(IFD1)',
    PhotoInfo_noValue: '没有照片{0}',
    PhotoInfo_error_fetchPhotoSize: '获取照片大小失败',

    RotateButtonGroup_rotateLeft: '向左旋转',
    RotateButtonGroup_rotateRight: '向右旋转',

    SelectionSummary_selected: ``,  // TODO: '{0} selected'
    SelectionSummary_clearSelection: ``,  // TODO: 'Clear selection'

    Settings_title: '设置',
    Settings_selectPhotoDirs: '请选择要扫描图像的文件夹',
    Settings_photoDirs: '要扫描图像的文件夹：',
    Settings_addPhotoDir: '添加照片文件夹',
    Settings_startScan: '扫描图像',

    TagEditor_addTag: '添加标签...',
    TagEditor_error_tagExists: '请输入一个新标签',

}
