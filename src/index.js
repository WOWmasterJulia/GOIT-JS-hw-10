import './css/styles.css';
import {fetchCountries} from "./fetchCountries"
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
