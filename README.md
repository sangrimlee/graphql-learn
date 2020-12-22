# Hello GraphQL 👋

## 1. Over-fetching & Under-fetching

### 1) Over-fetching이란?

REST를 통해 사용자의 userName만을 요청하는 경우, 에를 들어 /users/:userId로 요청을 한다.

이때 이 요청에 따른 응답은 userName 뿐만 아니라, 해당 user의 모든 정보들(즉, 필요없는 정보들)까지 포함 된다.

따라서, 우리는 userName 하나만 필요하지만, 모든 데이터들을 불러온 후 내가 필요한 것만 전처리해서 사용해야 하기 때문에 리소스 낭비가 발생한다.

### 2) Under-fetching이란?

REST를 통해 사용자 정보, 알림, 피드에 대한 정보들을 요청을 하는 경우,
/users, /notifications, /feeds로 세 번의 요청을 보내야한다.

하지만, GraphQL에서는 다양한 정보들을 한 번의 요청으로 해결할 수 있다.
즉, 다음 쿼리와 같이 한 번의 요청으로 다양한 정보들을 얻을 수 있다.

```graphql
# GraphQL Query
{
  users {
    userName
    profileImage
  }
  notifications {
    isRead
  }
  feeds {
    comments
    likeNumber
  }
}
```

## 2. Query & Mutation

### 1) Query란?

SQL : SELECT, REST : GET 과 같다.

즉, 데이터를 Query하는 것을 의미한다.

### 2) Mutation이란?

SQL : INSERT, UPDATE, DELETE,
REST : POST, PUT, PATCH, DELETE 와 같다.

즉, 새로운 데이터를 생성하거나 기존의 데이터를 수정, 삭제하는 것을 의미한다.

#### 참조 사이트:

GraphQL의 핵심 정리: [https://medium.com/@han7096/6e9d19c28bff](https://medium.com/@han7096/6e9d19c28bff)

GraphQL로 영화 API 만들기: [https://nomadcoders.co/graphql-for-beginners/lectures/1718](https://nomadcoders.co/graphql-for-beginners/lectures/1718)
