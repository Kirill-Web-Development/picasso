import { withStore } from "./withStore";
import {withRouter} from './withRouter'
import compose from "compose-function";
import { withTheme } from "@emotion/react";

export const withProviders = compose( withRouter, withStore, withTheme);

