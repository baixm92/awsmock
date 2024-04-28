import "./App.css";
import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import { TermsOfUseCreate } from "./pages/termsOfUse/Create";
import { TermsOfUseList } from "./pages/termsOfUse/List";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Admin>
      <Resource
        name={"terms-of-uses"}
        list={TermsOfUseList}
        show={ShowGuesser}
        edit={EditGuesser}
        create={TermsOfUseCreate}
      ></Resource>
    </Admin>
  );
}

export default App;
