import * as React from "react";
import { RecoilRoot } from "recoil";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { Chakra, getServerSideProps } from "components/Chakra";

import "styles/fonts.css";
import "styles/colors.css";
import "styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  const queryClientRef = React.useRef<QueryClient>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <RecoilRoot>
      <Chakra cookies={pageProps.cookies}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </Chakra>
    </RecoilRoot>
  );
};

export { getServerSideProps };

export default MyApp;
