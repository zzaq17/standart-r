    $(document).ready(function () {

        $(".calc-house").change(function () {

            // Взять выбранные значения типа Уборки и размера Дома
            $typeCleanHouses = $('input[name=type-clean-houses]:checked').val();
            $houseSize = $('input[name=house-size]:checked').val();

            // Таблица прайса в JS варианте
            if ($typeCleanHouses == 'tc1' && $houseSize == 'hs1') {
                $SumHouses2 = 3000;
            } else if ($typeCleanHouses == 'tc1' && $houseSize == 'hs2') {
                $SumHouses2 = 3500;
            } else if ($typeCleanHouses == 'tc1' && $houseSize == 'hs3') {
                $SumHouses2 = 4000;
            } else if ($typeCleanHouses == 'tc1' && $houseSize == 'hs4') {
                $SumHouses2 = 4500;
            } else if ($typeCleanHouses == 'tc2' && $houseSize == 'hs1') {
                $SumHouses2 = 2500;
            } else if ($typeCleanHouses == 'tc2' && $houseSize == 'hs2') {
                $SumHouses2 = 3000;
            } else if ($typeCleanHouses == 'tc2' && $houseSize == 'hs3') {
                $SumHouses2 = 3500;
            } else if ($typeCleanHouses == 'tc2' && $houseSize == 'hs4') {
                $SumHouses2 = 4000;
            } else if ($typeCleanHouses == 'tc3' && $houseSize == 'hs1') {
                $SumHouses2 = 3500;
            } else if ($typeCleanHouses == 'tc3' && $houseSize == 'hs2') {
                $SumHouses2 = 4000;
            } else if ($typeCleanHouses == 'tc3' && $houseSize == 'hs3') {
                $SumHouses2 = 5000;
            } else if ($typeCleanHouses == 'tc3' && $houseSize == 'hs4') {
                $SumHouses2 = 6000;
            } else if ($typeCleanHouses == 'tc4' && $houseSize == 'hs1') {
                $SumHouses2 = 6000;
            } else if ($typeCleanHouses == 'tc4' && $houseSize == 'hs2') {
                $SumHouses2 = 8000;
            } else if ($typeCleanHouses == 'tc4' && $houseSize == 'hs3') {
                $SumHouses2 = 9000;
            } else if ($typeCleanHouses == 'tc4' && $houseSize == 'hs4') {
                $SumHouses2 = 10000;
            } else if ($typeCleanHouses == 'tc5' && $houseSize == 'hs1') {
                $SumHouses2 = 10800;
            } else if ($typeCleanHouses == 'tc5' && $houseSize == 'hs2') {
                $SumHouses2 = 19800;
            } else if ($typeCleanHouses == 'tc5' && $houseSize == 'hs3') {
                $SumHouses2 = 25200;
            } else if ($typeCleanHouses == 'tc5' && $houseSize == 'hs4') {
                $SumHouses2 = 27000;
            } else {
                $SumHouses2 = 3000;
            }

            // Сумма доп. услуг
            $SumHouses3 = 0;
            $('input[name=dop-houses]:checkbox:checked').each(function (i, el) {
                $SumHouses3 += (cVal = parseFloat($(el).attr('value'))) && !isNaN(cVal) ? cVal :
                    0;
            });

            // Стандартизация числа + расчет итоговой суммы
            $SumHouses = thousandSeparator($SumHouses2 + $SumHouses3);

            $SumHouses2 = thousandSeparator($SumHouses2);

            $SumHouses3 = thousandSeparator($SumHouses3);

            // Отправка занчений в html
            $('#sum-houses-3').text($SumHouses3);

            $('#sum-houses-2').text($SumHouses2);

            $('#sum-houses').text($SumHouses);

        });

    });