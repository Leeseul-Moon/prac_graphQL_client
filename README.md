# GraphQL

GraphQL 개념을 익히기 위해 [노마드코더 GraphQL로 영화 웹 앱 만들기](https://nomadcoders.co/react-graphql-for-beginners/lobby) 강의를 보고 작성한 repo 입니다. </br>

## 배운 점
- client.js 를 만들어 백엔드 서버와 연결. index.js 에서 provider 로 client 주입 함
```javascript
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(), // 우리의 쿼리 결과를 브라우저의 메모리 캐시에 저장됨
});

export default client;
```

- useQuery hook 을 이용하여 쿼리 사용
```javascript
const GET_MOVIE = gql`
  query GetMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;

const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, { variables: { movieId } });
  
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${movieId}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          # title
          isLiked
        }
      `,
      data: {
        // title: "moon!",
        isLiked: !data.movie.isLiked,
      },
    });
  };
```
