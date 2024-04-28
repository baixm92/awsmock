/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTermsOfUseInput = {
  id?: string | null,
  content: string,
  term_version: number,
};

export type ModelTermsOfUseConditionInput = {
  content?: ModelStringInput | null,
  term_version?: ModelIntInput | null,
  and?: Array< ModelTermsOfUseConditionInput | null > | null,
  or?: Array< ModelTermsOfUseConditionInput | null > | null,
  not?: ModelTermsOfUseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TermsOfUse = {
  __typename: "TermsOfUse",
  id: string,
  content: string,
  term_version: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTermsOfUseInput = {
  id: string,
  content?: string | null,
  term_version?: number | null,
};

export type DeleteTermsOfUseInput = {
  id: string,
};

export type ModelTermsOfUseFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  term_version?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTermsOfUseFilterInput | null > | null,
  or?: Array< ModelTermsOfUseFilterInput | null > | null,
  not?: ModelTermsOfUseFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTermsOfUseConnection = {
  __typename: "ModelTermsOfUseConnection",
  items:  Array<TermsOfUse | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTermsOfUseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  term_version?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTermsOfUseFilterInput | null > | null,
  or?: Array< ModelSubscriptionTermsOfUseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTermsOfUseMutationVariables = {
  input: CreateTermsOfUseInput,
  condition?: ModelTermsOfUseConditionInput | null,
};

export type CreateTermsOfUseMutation = {
  createTermsOfUse?:  {
    __typename: "TermsOfUse",
    id: string,
    content: string,
    term_version: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTermsOfUseMutationVariables = {
  input: UpdateTermsOfUseInput,
  condition?: ModelTermsOfUseConditionInput | null,
};

export type UpdateTermsOfUseMutation = {
  updateTermsOfUse?:  {
    __typename: "TermsOfUse",
    id: string,
    content: string,
    term_version: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTermsOfUseMutationVariables = {
  input: DeleteTermsOfUseInput,
  condition?: ModelTermsOfUseConditionInput | null,
};

export type DeleteTermsOfUseMutation = {
  deleteTermsOfUse?:  {
    __typename: "TermsOfUse",
    id: string,
    content: string,
    term_version: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTermsOfUseQueryVariables = {
  id: string,
};

export type GetTermsOfUseQuery = {
  getTermsOfUse?:  {
    __typename: "TermsOfUse",
    id: string,
    content: string,
    term_version: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTermsOfUsesQueryVariables = {
  filter?: ModelTermsOfUseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTermsOfUsesQuery = {
  listTermsOfUses?:  {
    __typename: "ModelTermsOfUseConnection",
    items:  Array< {
      __typename: "TermsOfUse",
      id: string,
      content: string,
      term_version: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTermsOfUseSubscriptionVariables = {
  filter?: ModelSubscriptionTermsOfUseFilterInput | null,
};

export type OnCreateTermsOfUseSubscription = {
  onCreateTermsOfUse?:  {
    __typename: "TermsOfUse",
    id: string,
    content: string,
    term_version: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTermsOfUseSubscriptionVariables = {
  filter?: ModelSubscriptionTermsOfUseFilterInput | null,
};

export type OnUpdateTermsOfUseSubscription = {
  onUpdateTermsOfUse?:  {
    __typename: "TermsOfUse",
    id: string,
    content: string,
    term_version: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTermsOfUseSubscriptionVariables = {
  filter?: ModelSubscriptionTermsOfUseFilterInput | null,
};

export type OnDeleteTermsOfUseSubscription = {
  onDeleteTermsOfUse?:  {
    __typename: "TermsOfUse",
    id: string,
    content: string,
    term_version: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
