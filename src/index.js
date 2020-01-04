import {pageLoad} from './Modules/page-load';
import {controller} from './Modules/controller';
import {listArray} from './Modules/listArray';

controller();
pageLoad();

controller().addTodo(listArray[0], 'Test todo 1', 'This is a test todo', 'January 15, 2020', 3);
controller().addTodo(listArray[0], 'Test todo 2', 'This is a test todo', 'January 16, 2020', 2);
