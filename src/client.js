import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(), // 우리의 쿼리 결과를 브라우저의 메모리 캐시에 저장됨
});

export default client;
