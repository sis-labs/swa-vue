import Home from "./components/Home";
import AutoComplete from "./components/AutoComplete";
import SearchLocalities from "./components/SearchLocalities";
import FormAutoFill from "./components/FormAutoFill";
import IndexationProcess from "./components/IndexationProcess";
import LuceneSearch from "./components/LuceneSearch";

const routes = [
  { path: '/', component: Home },
  { path: '/auto-complete', component: AutoComplete },
  { path: '/search-localities', component: SearchLocalities },
  { path: '/form-auto-fill', component: FormAutoFill },
  { path: '/indexation-process', component: IndexationProcess },
  { path: '/custom-search', component: LuceneSearch },
];

export default routes;
