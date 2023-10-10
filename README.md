
# HelloWorld_FE
1) ## Frontend web-application with monolithic architecture using React
2) ## Technology stack
* _React_
* _TypeScript_
* _Redux-Toolkit_
* _Vite_
* _Tailwind_
* _react-router-dom_ as a router

3) ## Project Structure
* **index.tsx** - Application launch point
* **app** - Upper-level folder contains router configuration, global storages and styles.
* **pages** - contains route components for every page in the application, most part of them without business logic inside
* **components** - composition layer for displaying independent parts of the application
* **api** - module for making requests to server
* **models** - description of entities
* **shared** - reusable code that is not relevant to logic (hooks, assets, utils)

4) using husky and eslint / prettiter for comfortable development
