[```Notes```](../../README.md)

> # File Colocation
> - A route is not publicly accessible unless it has ```page.tsx``` file.
> - Even if route is public acc., only the content returned from ```page.tsx``` is sent to the client, content returned should be react default export.

> ## Private  Folder
> - Prefix folder name with 'underscore'
>    -  ex- ```_lib``` 
> - Excludes the folder and all sub-folders from routing.

[```Next - Layout```](./Layout.md)
