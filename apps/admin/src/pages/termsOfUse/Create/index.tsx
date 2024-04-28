import { Button, Grid } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";
import { CreateBase, Form, NumberInput } from "react-admin";
import { createTermsOfUse } from "../../../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { CreateTermsOfUseInput } from "../../../API";

const client = generateClient();

export const TermsOfUseCreate: React.FC = () => {
  return (
    <CreateBase>
      <Form
        onSubmit={(va) => {
          console.log("asdasd", va);

          client.graphql({
            query: createTermsOfUse,
            variables: {
              input: va as CreateTermsOfUseInput,
            },
          });
        }}
      >
        <Grid container columnSpacing={"16px"} rowSpacing={"16px"}>
          <Grid item xs={6}>
            <NumberInput source="term_version" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <RichTextInput source="content" fullWidth />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                // console.log("aaa", recored);
              }}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Form>
    </CreateBase>
  );
};
