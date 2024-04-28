/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTermsOfUse = /* GraphQL */ `subscription OnCreateTermsOfUse(
  $filter: ModelSubscriptionTermsOfUseFilterInput
) {
  onCreateTermsOfUse(filter: $filter) {
    id
    content
    term_version
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTermsOfUseSubscriptionVariables,
  APITypes.OnCreateTermsOfUseSubscription
>;
export const onUpdateTermsOfUse = /* GraphQL */ `subscription OnUpdateTermsOfUse(
  $filter: ModelSubscriptionTermsOfUseFilterInput
) {
  onUpdateTermsOfUse(filter: $filter) {
    id
    content
    term_version
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTermsOfUseSubscriptionVariables,
  APITypes.OnUpdateTermsOfUseSubscription
>;
export const onDeleteTermsOfUse = /* GraphQL */ `subscription OnDeleteTermsOfUse(
  $filter: ModelSubscriptionTermsOfUseFilterInput
) {
  onDeleteTermsOfUse(filter: $filter) {
    id
    content
    term_version
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTermsOfUseSubscriptionVariables,
  APITypes.OnDeleteTermsOfUseSubscription
>;
