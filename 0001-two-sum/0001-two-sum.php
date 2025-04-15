class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {

        for($i = 0; $i < count($nums); $i++) {

            $auxVar = $nums[$i];

            for($j = $i + 1; $j < count($nums); $j++) {

                $auxVar2 = $nums[$j];

                if ($target == $auxVar + $auxVar2) {
                    return [$i, $j];
                }

            }   

        }

    }

}