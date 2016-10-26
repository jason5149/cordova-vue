import StorageService from './storage_service';

export function getToken(username) {
    console.log(username);
    return StorageService.fetch(username, 1, false);
}

export function setToken(username, token) {
    console.log(username, token);
    if (username && token) {
        StorageService.save(username, token, 1, false);
    }
}

export function getAccountInfo() {
    return StorageService.fetch('account_info', 1, true);
}

export function setAccountInfo(account_info) {
    console.log(account_info);
    if (account_info) {
        StorageService.save('account_info', account_info, 1, true);
    }
}

export function getWorkerInfos() {
    return StorageService.fetch('worker_infos', 1, true);
}

export function setWorkerInfos(worker_infos) {
    console.log(worker_infos);
    if (worker_infos.length > 0) {
        StorageService.save('worker_infos', worker_infos, 1, true);
    }
}