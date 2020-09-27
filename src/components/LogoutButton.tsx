import * as React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

interface LogoutButtonProps {}

export const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};
