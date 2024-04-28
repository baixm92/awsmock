import { Datagrid, List, TextField } from "react-admin";

export const TermsOfUseList: React.FC = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="term_version" />
      </Datagrid>
    </List>
  );
};
