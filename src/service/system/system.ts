import request from '../index'

export function getPageListData(url: string, data: any) {
  return request.post({ url, data })
}

export function deletePageData(url: string) {
  return request.delete({ url })
}

export function createPageData(url: string, data: any) {
  return request.post({ url, data })
}

export function editPageData(url: string, data: any) {
  return request.patch({ url, data })
}
