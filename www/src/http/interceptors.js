import { getToken, setToken, getAccountInfo, setAccountInfo, getWorkerInfos, setWorkerInfos } from '../service/account_service';

export default function(request, next) {

    request.headers['token'] = accountToken;

    next((response) => {
        var token = null;
        var account_info = null;
        var worker_infos = null;

        if (response.data) {
            account_info = response.data.account_info;
            worker_infos = response.data.worker_infos;

            if (response.headers.map.token.length > 0) {
                token = response.headers.map.token[0];
            }

            if (account_info) {
                setAccountInfo(account_info);

                if (token) {
                    setToken(account_info.username, token);
                }
            }

            if (worker_infos.length > 0) {
                setWorkerInfos(worker_infos);
            }
        }
    })
}

var accountToken = function() {
    var account_info = getAccountInfo();
    var token = '';

    if (account_info) {
        token = getToken(account_info.username);
    }

    return token;
}