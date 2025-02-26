import {Calculator} from './src/calculator'
import './src/interface/style.css';
import  { interfaceController } from './src/controllers/interfaceController';

document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
    new interfaceController();
});