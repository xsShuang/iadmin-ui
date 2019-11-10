import { axios } from '@/utils/request'
import qs from 'qs'

const api = {
  user: '/sysUser',
  role: '/sysRole',
  service: '/service',
  permission: '/sysPermission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getUserList (parameter) {
  return axios({
    url: api.user + '/list',
    method: 'post',
    params: parameter
  })
}

export function addUser (parameter) {
  return axios({
    url: api.user + '/add',
    method: 'post',
    params: parameter,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}

export function updateUser (parameter) {
  return axios({
    url: api.user + '/update',
    method: 'post',
    params: parameter,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}

export function removeUser (parameter) {
  return axios({
    url: api.user + '/remove/' + parameter,
    method: 'post'
  })
}

export function getRoleList (parameter) {
  return axios({
    url: api.role + '/list',
    method: 'post',
    params: parameter
  })
}

export function getRoleByUser (parameter) {
  return axios({
    url: api.role + '/getByUser/' + parameter,
    method: 'get'
  })
}

export function getPermissionVo () {
  return axios({
    url: api.permission + '/getTreeVO',
    method: 'get'
  })
}

export function getPermissionByRoleId (parameter) {
  return axios({
    url: api.permission + '/getByRoleId/' + parameter,
    method: 'post'
  })
}

export function addRole (parameter) {
  return axios({
    url: api.role + '/add',
    method: 'post',
    params: parameter

  })
}

export function updateRole (parameter) {
  return axios({
    url: api.role + '/update',
    method: 'post',
    params: parameter,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}

export function removeRole (parameter) {
  return axios({
    url: api.role + '/remove/' + parameter,
    method: 'post'
  })
}

export function getServiceList (parameter) {
  return axios({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions (parameter) {
  return axios({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return axios({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return axios({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}
