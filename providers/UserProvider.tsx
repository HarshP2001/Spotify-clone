"use client"

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProp {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProp> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default UserProvider;