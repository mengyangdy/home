declare namespace Env {
  interface ImportMeta {
    /** 网站名称 */
    readonly VITE_APP_NAME: string;
    /** 网站作者 */
    readonly VITE_APP_AUTHOR: string;
    /** 网站关键词 */
    readonly VITE_APP_KEYWORDS: string;
    /** 网站简介 */
    readonly VITE_APP_DESC: string;
    /** 网址 */
    readonly VITE_APP_URL: string;
    /** logo */
    readonly VITE_APP_LOGO: string;
    /** 主页图标 */
    readonly VITE_APP_MAIN_LOGO: string;
    /** app端图标 */
    readonly VITE_APP_APPLE_LOGO: string;
    /** 简介信息 */
    readonly VITE_DESC_HELLO: string;
    /** 简介信息 */
    readonly VITE_DESC_TEXT: string;
    /** 简介信息 */
    readonly VITE_DESC_HELLO_OTHER: string;
    /** 简介信息 */
    readonly VITE_DESC_TEXT_OTHER: string;
    /** 天气key
     * 前往 高德开放平台注册 Web服务 Key
     */
    readonly VITE_WEATHER_KEY: string;
    /** 建站日期 */
    readonly VITE_APP_TIME: string;
    /** ICP备案 */
    readonly VITE_APP_ICP: string;
    /**
     * # 歌曲 API 地址
     * 请参照 https://github.com/xizeyoupan/Meting-API#deno-deploy 进行 API 服务部署
     * 此处提供的服务可能会超量从而无法访问，请自行部署
     * 若使用 QQ 音乐歌单，歌曲数量最好不要超出 50 首
     * 备用：https://api.wuenci.com/meting/api/
     */
    readonly VITE_SONG_API: string;
    /** 歌曲服务器 ( netease-网易云, tencent-qq音乐 ) */
    readonly VITE_SONG_SERVER: string;
    /** 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 ) */
    readonly VITE_SONG_TYPE: string;
    /** 播放 ID ( 若无需播放器，请设为空即可 ) */
    readonly VITE_SONG_ID: string;
  }
}
