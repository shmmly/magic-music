/*
 * @Description:
 * @Author: 流年的樱花逝
 * @Date: 2019-08-14 08:43:37
 * @GitHub: https://github.com/shmmly
 */

import {ajax} from 'rxjs/ajax'
import {map, catchError} from 'rxjs/operators'
import {of} from 'rxjs'
import {BASE_URL} from './consts'
import {Banner} from './types'

function request(url: string, headers?: Object) {
  return ajax.get(BASE_URL + url, headers).pipe(
    map(res => res.response),
    catchError(error => of(error))
  )
}

/**
 * banner数据获取
 */
export const getBanner = () => request('/banner')
