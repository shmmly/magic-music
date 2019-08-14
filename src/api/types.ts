/*
 * @Description:
 * @Author: 流年的樱花逝
 * @Date: 2019-08-14 09:02:04
 * @GitHub: https://github.com/shmmly
 */

type Maybe<T> = T | null

export interface Banner {
  imageUrl: Maybe<string>
  targetId: Maybe<number>
  adid: Maybe<number>
  targetType: Maybe<number>
  titleColor: Maybe<string>
  typeTitle: Maybe<string>
  url: Maybe<string>
  exclusive: Maybe<boolean>
  monitorImpress: Maybe<boolean>
  monitorClick: Maybe<boolean>
  monitorType: Maybe<boolean>
  monitorImpressList: Maybe<boolean>
  monitorClickList: Maybe<boolean>
  monitorBlackList: Maybe<any>
  extMonitor: Maybe<any>
  extMonitorInfo: Maybe<any>
  adSource: Maybe<any>
  adLocation: Maybe<any>
  adDispatchJson: Maybe<any>
  encodeId: Maybe<number>
  program: Maybe<any>
  event: Maybe<any>
  video: Maybe<any>
  song: Maybe<any>
  scm: Maybe<string>
}
