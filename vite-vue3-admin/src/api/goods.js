import myAxios from './axios';

export function getListAPI(data) {
    return myAxios({
        url: '/api/Get_tc_gen_file.ashx',
        method: 'get',
        params: data
    });
}
