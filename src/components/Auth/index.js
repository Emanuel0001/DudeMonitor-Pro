const isAuthenticated = async () => {
    const token = localStorage.getItem('tokenOfAccess');
    const id = localStorage.getItem('idOfUser');

    if (token && id) {
        return true
    }
    return false;

};

export default isAuthenticated;
