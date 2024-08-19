import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { Tooltip, initTWE } from "tw-elements";
initTWE({ Tooltip });