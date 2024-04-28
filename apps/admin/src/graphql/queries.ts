/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTermsOfUse = /* GraphQL */ `query GetTermsOfUse($id: ID!) {
  getTermsOfUse(id: $id) {
    id
    content
    term_version
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTermsOfUseQueryVariables,
  APITypes.GetTermsOfUseQuery
>;
export const listTermsOfUses = /* GraphQL */ `query ListTermsOfUses(
  $filter: ModelTermsOfUseFilterInput
  $limit: Int
  $nextToken: String
) {
  listTermsOfUses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      term_version
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTermsOfUsesQueryVariables,
  APITypes.ListTermsOfUsesQuery
>;
