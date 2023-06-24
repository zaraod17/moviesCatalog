import React, { createContext, useState, useEffect } from "react";
import { useLazyQuery, useMutation, ApolloError } from "@apollo/client";
import { LOGIN, REGISTER } from "@/utils/api-client-queries";

import {
  AuthResponseType,
  TokenPayloadType,
  RegisterResponseType,
} from "./AuthContext.types";

import jwt from "jsonwebtoken";

interface LoginContextType {
  openModal: boolean;
  handleLogout: () => void;
  handleModal: (value: boolean) => void;
  getToken: (email: string | undefined, password: string | undefined) => void;
  registerUser: (
    email: string | undefined,
    username: string | undefined,
    password: string | undefined
  ) => void;
  userInfo: TokenPayloadType;
  loginError: string;
}

export const AuthContext = createContext<LoginContextType>({
  handleLogout: () => {},
  handleModal: () => {},
  openModal: false,
  getToken: () => {},
  registerUser: () => {},
  userInfo: { id: 0, email: "", exp: 0, iat: 0 },
  loginError: "",
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [tokenPayload, setTokenPayload] = useState<TokenPayloadType>({
    email: "",
    id: 0,
    exp: 0,
    iat: 0,
  });
  const [loginError, setLoginError] = useState<string>("");

  const [getToken, { loading, error, data }] = useLazyQuery(LOGIN, {
    onError: (error) => {
      setLoginError(error.message);
    },
    onCompleted: (data) => {
      setLoginError("");
      localStorage.setItem("token", data.login.token);
      handleModal(false);

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setTokenPayload(jwt.decode(storedToken) as TokenPayloadType);
      }
    },
  }) as AuthResponseType;

  const [
    registerUser,
    { loading: loadingRegister, error: registerError, data: registerData },
  ] = useMutation(REGISTER, {
    onError: (error) => {
      setLoginError(error.message);
    },
    onCompleted: (data) => {
      setLoginError("");
      localStorage.setItem("token", data.register.token);
      handleModal(false);

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setTokenPayload(jwt.decode(storedToken) as TokenPayloadType);
      }
    },
  }) as RegisterResponseType;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTokenPayload({ email: "", id: 0, exp: 0, iat: 0 });
  };

  const handleModal = (value: boolean) => {
    setOpenModal(value);
    setLoginError("");
    console.log(tokenPayload);
    console.log(registerError);
  };

  const contextValue: LoginContextType = {
    handleLogout,
    openModal,
    handleModal,
    getToken: (email, password) => {
      getToken({ variables: { email: email || "", password: password || "" } });
    },
    userInfo: tokenPayload,
    registerUser: (email, username, password) => {
      registerUser({ variables: { email, username, password } });
    },
    loginError,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
