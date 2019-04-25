/*
Если браузер видит тег <script>, то он по стандарту обязан сначала выполнить его,
а потом показать оставшуюся часть страницы.

async - разрешает браузеру загружать js-файлы параллельно и выполнять сразу после загрузки,
не дожидаясь обработки остальной части страницы.

defer -  позволяет браузеру начать загрузку js-файлов параллельно,
не останавливая дальнейшую обработку страницы.

то есть async сразу выполняет скрипт как загрузится, а defer выполнит скрипт постле того,
как польностью загрузитца страница.
 */

/*
test
*/