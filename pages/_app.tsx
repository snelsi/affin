import * as React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Chakra, getServerSideProps } from "components/Chakra";

import "styles/fonts.css";
import "styles/colors.css";
import "styles/global.css";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Chakra cookies={pageProps.cookies}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Chakra>
  </RecoilRoot>
);

export { getServerSideProps };

export default MyApp;
