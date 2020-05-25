// Обработка калькулятора Квартир
$(document).ready(function () {

    $(".calc-flat").change(function () {
        $typeClean = $('input[name=type-clean]:checked').val();
        // $flatSize = $("#flatSize", this).val();
        $flatSize = $('input[name=flat-size]:checked').val();
// Проверка совпадения по таблице прайса
        if ($typeClean == 'tc1' && $flatSize == 'fs1') {
            $Sum2 = 2000;
        } else if ($typeClean == 'tc1' && $flatSize == 'fs2') {
            $Sum2 = 2500;
        } else if ($typeClean == 'tc1' && $flatSize == 'fs3') {
            $Sum2 = 3000;
        } else if ($typeClean == 'tc1' && $flatSize == 'fs4') {
            $Sum2 = 3500;
        } else if ($typeClean == 'tc2' && $flatSize == 'fs1') {
            $Sum2 = 1700;
        } else if ($typeClean == 'tc2' && $flatSize == 'fs2') {
            $Sum2 = 2200;
        } else if ($typeClean == 'tc2' && $flatSize == 'fs3') {
            $Sum2 = 2700;
        } else if ($typeClean == 'tc2' && $flatSize == 'fs4') {
            $Sum2 = 3200;
        } else if ($typeClean == 'tc3' && $flatSize == 'fs1') {
            $Sum2 = 2500;
        } else if ($typeClean == 'tc3' && $flatSize == 'fs2') {
            $Sum2 = 3000;
        } else if ($typeClean == 'tc3' && $flatSize == 'fs3') {
            $Sum2 = 3500;
        } else if ($typeClean == 'tc3' && $flatSize == 'fs4') {
            $Sum2 = 4000;
        } else if ($typeClean == 'tc4' && $flatSize == 'fs1') {
            $Sum2 = 4000;
        } else if ($typeClean == 'tc4' && $flatSize == 'fs2') {
            $Sum2 = 5000;
        } else if ($typeClean == 'tc4' && $flatSize == 'fs3') {
            $Sum2 = 6000;
        } else if ($typeClean == 'tc4' && $flatSize == 'fs4') {
            $Sum2 = 7000;
        } else if ($typeClean == 'tc5' && $flatSize == 'fs1') {
            $Sum2 = 5000;
        } else if ($typeClean == 'tc5' && $flatSize == 'fs2') {
            $Sum2 = 6000;
        } else if ($typeClean == 'tc5' && $flatSize == 'fs3') {
            $Sum2 = 7000;
        } else if ($typeClean == 'tc5' && $flatSize == 'fs4') {
            $Sum2 = 8000;
        } else {
            $Sum2 = 2000;
        }

        $Sum3 = 0;
        $('input[name=dop]:checkbox:checked').each(function (i, el) {
            $Sum3 += (cVal = parseFloat($(el).attr('value'))) && !isNaN(cVal) ? cVal :
                0;
        });

        $Sum1 = thousandSeparator($Sum2 + $Sum3);

        $Sum3 = thousandSeparator($Sum3);

        $Sum2 = thousandSeparator($Sum2);

        $('#sum-3').text($Sum3);


        $('#sum-2').text($Sum2);

        $('#sum-1').text($Sum1);

    });

});