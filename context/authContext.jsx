import { useCallback, useEffect, useState } from "react";

const { createContext } = require("react");

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
	const [socialAuth, setSocialAuth] = useState({});
	const updateDataSocial = useCallback((type, profile) => {
		setSocialAuth((state) => {
			localStorage.setItem(
				"socialAuth",
				JSON.stringify({ ...state, [type]: profile })
			);
			return { ...state, [type]: profile };
		});
	}, []);
	useEffect(() => {
		setSocialAuth(JSON.parse(localStorage.getItem("socialAuth")));
	}, []);
	return (
		<AuthContext.Provider value={{ updateDataSocial, socialAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
