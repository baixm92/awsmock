/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTermsOfUse = /* GraphQL */ `mutation CreateTermsOfUse(
  $input: CreateTermsOfUseInput!
  $condition: ModelTermsOfUseConditionInput
) {
  createTermsOfUse(input: $input, condition: $condition) {
    id
    content
    term_version
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTermsOfUseMutationVariables,
  APITypes.CreateTermsOfUseMutation
>;
export const updateTermsOfUse = /* GraphQL */ `mutation UpdateTermsOfUse(
  $input: UpdateTermsOfUseInput!
  $condition: ModelTermsOfUseConditionInput
) {
  updateTermsOfUse(input: $input, condition: $condition) {
    id
    content
    term_version
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTermsOfUseMutationVariables,
  APITypes.UpdateTermsOfUseMutation
>;
export const deleteTermsOfUse = /* GraphQL */ `mutation DeleteTermsOfUse(
  $input: DeleteTermsOfUseInput!
  $condition: ModelTermsOfUseConditionInput
) {
  deleteTermsOfUse(input: $input, condition: $condition) {
    id
    content
    term_version
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTermsOfUseMutationVariables,
  APITypes.DeleteTermsOfUseMutation
>;
