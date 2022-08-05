export const login = (credential) => {
    //config req obj
    //const {username, password} = credential;
    const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;

    //send req, return the response from backedn, so we need to add return
    return fetch(loginUrl, {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then(
        (response) => {
            if(response.status < 200 || response >= 300) {
                throw Error("Fail to log in");
            }
        }
    );
};

//value="/restaurant/{restaurantId}/menu", method= RequestMethod.GET
export const getMenu = (restId) => {
    const restUrl = `/restaurant/${restId}/menu`;

    return fetch(restUrl).then(
        (response) => {
            if(response.status < 200 || response.status >= 300) {
                throw Error("Fail to get menus");
            }
            return response.json();
        }
    );
};

//value="/restaurants", method=RequestMethod.GET
export const getRestaurants = () => {
    return fetch("/restaurants").then(
        (response) => {
            if(response.status < 200 || response.status >= 300) {
                throw Error("Fail to get restaurants");
            }
            return response.json();
        }
    );
};
//
// export const getCart
//value="/cart", method= RequestMethod.GET
export const getCart = () => {
    return fetch("/carts").then(
        (response) => {
            if(response.status < 200 || response.status >= 300) {
                throw Error("Fail to get shopping cart data");
            }
            return response.json();
        }
    );
};

//value="/checkout", method= RequestMethod.GET
export const checkout = () => {
    return fetch("/checkout").then(
        (response) => {
            if (response.status < 200 || response.status >= 300) {
                throw Error("Fail to checkout");
            }
        }
    );
};

//value="/order/{menuId}", method= RequestMethod.POST
export const addItemToCart = (itemId) => {
    return fetch(`/order/${itemId}`, {
        method: "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        credentials: "include",
    }).then((response) => {
        if(response.status < 200 || response.status >= 300) {
            throw Error("Fail to add menu item to shopping cart");
        }
    });
};

//value="/signup", method= RequestMethod.POST
// export const signUp
export const signUp = (data) => {
    const signupUrl = "/signup";

    return fetch(signupUrl, {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to sign up");
        }
    });
};

