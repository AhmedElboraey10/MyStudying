
/*

algorithms مراجعه سريعه على ال 
وشرح بسيط لكل واحده فيهم

/*

                                        {((OBJECTS))}

problem solving patterens: frequence counter , multiple pointers , sliding window , divide & conquer .
recursion .
searching algorithms .
sorting algorithms .
dijkstras algoritms .
dynamic programming .

*/

                              PROBLEM_SOLVING_PATTERENS

(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)

FREQUENCE_COUNTER

/*

### **Frequency Counter**

**مفهوم:**

- ( array أو string زي ) هو أسلوب يُستخدم لحساب تكرار العناصر في مجموعة بفعالية.
- يُستخدم عادةً لحساب عدد تكرارات العناصر أو للتحقق من خصائص معينة للمجموعة.

**كيفية العمل:**

1. ** فارغ ليعمل كعداد للتكرارات object عمل** 

2. **التكرار عبر العناصر:**

   - string أو ال array نمر عبر كل عنصر في ال  
   - object في ال (key) نستخدم العنصر ده ك 
   - ونخلي قيمته تساوي عدد التكرارات.

3. ** counter تحديث ال :**

   - نزيد قيمته بمقدار 1 object إذا كان العنصر موجودًا بالفعل في ال.
   - وإذا لم يكن العنصر موجودًا، نضيفه إلى الكائن ونقوم بتعيين قيمته إلى 1.

### Frequency Counter Pattern أشهر أفكار الـ:

1. **تحقق من التكرار**:

 تحديد ما إذا كانت القيم في مجموعة بيانات تحتوي على تكرارات 
 array مثل البحث عن العناصر المتكرره في ال .

 2. **تحقق من التساوي**:

 مقارنة مجموعتين من البيانات للتحقق مما إذا كانتا متساويتين 
 (مثل التحقق مما إذا كان يمكن تكوين كلمة معينة من حروف كلمة أخرى).

 3. **تحديد الفريد**:

 إيجاد العناصر الفريدة في مجموعة بيانات 
 (مثل إيجاد الرقم الذي يظهر مرة واحدة فقط في مجموعة من الأرقام).

 4. **تحليل التردد**:

 حساب عدد مرات ظهور كل عنصر في مجموعة بيانات 
 ( string مثل حساب تردد الحروف في ال ).

### Frequency Counter Pattern سؤال يجمع جميع أفكار الـ :

**السؤال:**

تحقق الأمور التالية code اكتب :

1. **تحقق من التكرار**:
 من الأرقام وتتحقق ما إذا كانت تحتوي على أرقام مكرر array تأخذ array من الأرقام وتتحقق ما إذا كانت تحتوي على أرقام مكررة

2. **تحقق من التساوي**:
(بغض النظر عن الترتيب) وتتحقق ما إذا كانت الحروف في السلسلتين متطابقة string تأخذ 2

3. **تحديد الفريد**:
 من الأرقام وتجد الرقم الذي يظهر مرة واحدة فقط array تأخذ 

4. **تحليل التردد**:
 وتحسب عدد مرات ظهور كل حرف فيها string تأخذ 

**الحل المتوقع:**
- منفصلة functions لتنفيذ جميع هذه المهام في Frequency Counter Pattern استخدم الـ 

**الحل:**

// 1. تحقق من التكرار
function hasDuplicates(arr) {
    let frequencyCounter = {};
    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
        if (frequencyCounter[val] > 1) return true;
    }
    return false;
}

// 2. تحقق من التساوي
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    
    return true;
}

// 3. تحديد الفريد
function findUnique(arr) {
    let frequencyCounter = {};
    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] === 1) return key;
    }
}

// 4. تحليل التردد
function charFrequency(str) {
    let frequencyCounter = {};
    for (let char of str) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
    return frequencyCounter;
}

// استخدام الدوال
console.log(hasDuplicates([1, 2, 3, 3])); // true
console.log(areAnagrams('listen', 'silent')); // true
console.log(findUnique([1, 2, 2, 3, 3])); // 1
console.log(charFrequency('hello')); // { h: 1, e: 1, l: 2, o: 1 }

*/


(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)

MULTIPILE_POINTERS

/*

### **Multiple Pointers**

**Multiple Pointers يعني ايه:**

- لتسهيل التكرار والتحقق من الخصائص ( string أو ال  array ) في ال  pointer تعني استخدام كذا 
- تُستخدم بشكل شائع في حل المشكلات التي تتطلب مقارنة أو تحليل عناصر في تسلسل.

**كيفية العمل:**

1. **pointers تحديد ال:**

   string او ال array ء(أو اكتر) في بدايه ال pointer نبدأ بتحديد 2 
    قد يكون المؤشر الأول في البداية والمؤشر الثاني في نقطة لاحقة 
    array يعني في الاخر يعني في نهايه ال .

2. ** pointers تحريك ال :**

   - بناءً على الشروط أو العمليات المطلوبة pointer نحرك ال .
الثاني لمقارنه او حساب فرق pointer الامامي للبحث او ال pointer قد نقوم بتحريك ال 

3.**ملخص كده**

الاتنين بيتحركو مع بعض في نفس الاتجاه pointer 2 يا اما بيبقى عندك 
تكون مترتبه array او يبقى واحد في الاول وواحد في الاخر وبيتحركو عكس بعض بس ال

### Multiple Pointers Pattern  أشهر أفكار الـ :

1. **التحقق من وجود أزواج تحقق شرطًا معينًا**:
تحقق شرطًا معينًا (مثل إيجاد زوج من الأرقام مجموعهما يساوي قيمة معينة) array إيجاد أزواج من العناصر في 

2. **البحث عن الفروقات**:
(مثل إيجاد أول زوج من الأرقام يكون الفرق بينهما هو قيمة معينة) array إيجاد الفرق بين عناصر في

3. **إيجاد أقصى/أقل قيمة**:
(array مثل إيجاد أطول سلسلة متزايدة في) pointer البحث عن أقصى أو أقل قيمة من خلال استخدام 2

4. **بشكل فعال array التنقل عبر ال**:
(مثل إيجاد عدد معين من العناصر المتطابقة على الجانبين) array للقيام بتكرارات معينة أو القفز عبر ال pointer استخدام 2

### Multiple Pointers Pattern سؤال يجمع جميع أفكار الـ :

**السؤال:**

 يحقق الأمور التالية code اكتب :

1. **التحقق من وجود أزواج تحقق شرطًا معينًا**:
مجموعهما يساوي القيمة  array وقيمة، وتجد زوجًا من الأرقام في ال array تأخذ 

2. **البحث عن الفروقات**:
وقيمة، وتجد أول زوج من الأرقام يكون الفرق بينهما هو القيمة array تأخذ

3. **إيجاد أقصى/أقل قيمة**:
وتجد أطول سلسلة متزايدة array تأخذ 

4. **بشكل فعال array التنقل عبر ال**:
وتتحقق من عدد العناصر المتطابقة على الجانبين  array تأخذ 

**الحل المتوقع:**
- منفصلة functions لتنفيذ جميع هذه المهام في  Multiple Pointers Pattern  استخدم الـ 

**الحل:**

// 1. التحقق من وجود أزواج تحقق شرطًا معينًا
function findPairWithSum(arr, sum) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === sum) {
            return [arr[left], arr[right]];
        } else if (currentSum < sum) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

// 2. البحث عن الفروقات
function findPairWithDifference(arr, diff) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let currentDiff = arr[right] - arr[left];
        if (currentDiff === diff) {
            return [arr[left], arr[right]];
        } else if (currentDiff < diff) {
            right--;
        } else {
            left++;
        }
    }
    return null;
}

// 3. إيجاد أقصى/أقل قيمة
function findLongestIncreasingSubsequence(arr) {
    let maxLength = 1;
    let currentLength = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 1;
        }
    }
    
    return maxLength;
}

// 4. التنقل عبر المصفوفة بشكل فعال
function countSymmetricElements(arr) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;
    
    while (left < right) {
        if (arr[left] === arr[right]) {
            count++;
        }
        left++;
        right--;
    }
    
    return count;
}

// استخدام الدوال
console.log(findPairWithSum([1, 2, 3, 4, 6], 6)); // [2, 4]
console.log(findPairWithDifference([1, 3, 4, 6, 8], 5)); // [1, 6]
console.log(findLongestIncreasingSubsequence([1, 2, 1, 2, 3, 4])); // 4
console.log(countSymmetricElements([1, 2, 3, 2, 1])); // 2

** break down & walk through مثال مع **

string بدون تكرارات في subarray لنفترض أن لدينا مشكلة العثور على أطول 

function findLongestUniqueSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let end = 0; end < str.length; end++) {
        let char = str[end];

        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }

        longest = Math.max(longest, end - start + 1);

        seen[char] = end + 1;
    }

    return longest;
}

console.log(findLongestUniqueSubstring('abcabcbb'));
// Output: 3 (Longest substring without repeating characters is 'abc')

pointers سأرسم التوضيح بشكل دقيق مع حركة ال  
 start و end عبر السلسلة النصية

نص المثال: "abcabcbb"
الرسم التخطيطي:
الخطوة 1:

start = 0
end = 0
Substring: "a"
Longest: 1
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
       ^ 
start
       ^ 
end
الخطوة 2:

start = 0
end = 1
Substring: "ab"
Longest: 2
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
       ^ 
start
         ^ 
end
الخطوة 3:

start = 0
end = 2
Substring: "abc"
Longest: 3
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
       ^ 
start
           ^ 
end
الخطوة 4:

start = 1 (لأن "a" مكرر)
end = 3
Substring: "bca"
Longest: 3
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
         ^ 
start
             ^ 
end
الخطوة 5:

start = 2 (لأن "b" مكرر)
end = 4
Substring: "cab"
Longest: 3
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
           ^ 
start
               ^ 
end
الخطوة 6:

start = 3 (لأن "c" مكرر)
end = 5
Substring: "abc"
Longest: 3
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
             ^ 
start
                 ^ 
end
الخطوة 7:

start = 4 (لأن "a" مكرر)
end = 6
Substring: "bca"
Longest: 3
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
               ^ 
start
                   ^ 
end
الخطوة 8:

start = 5 (لأن "b" مكرر)
end = 7
Substring: "cab"
Longest: 3
sql
Copy code
Index: 0 1 2 3 4 5 6 7
Char:  a b c a b c b b
                 ^ 
start
                     ^ 
end
التوضيح:
 التي تحتوي على أحرف فريدة window بيتحرك من اليسار إلى اليمين لتوسيع ال :END
الحالية فريدة window عند تكرار الأحرف للتأكد من أن جميع الأحرف في ال window بيتحرك لتقليص ال
الفريدة وتحديث الطول الأطول الذي تم العثور عليه window وفي كل خطوة، يتم حساب الطول الأقصى لل 

*/

(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)

SLIDING_WINDOW

/*

Sliding Window كيفية عمل الـ  :

window تحديد حجم ال :
 التي ستُستخدم لمعالجة جزء من البيانات في وقت واحد window أول خطوة هي تحديد حجم ال

 الأولية window البدء بال:
 الأولية عن طريق التعامل مع أول مجموعة من البيانات window تقوم بإنشاء ال 
 (array مثلاً أول ثلاثة عناصر في ).

window تحريك ال :
 عبر البيانات window تتحرك ال 
  window في كل مرة تتحرك فيها ال 
وتطرح العنصر الذي يخرج منها window تضيف العنصر الجديد الذي يدخل في ال 

تحديث النتائج:
تقوم بتحديث النتائج بناءً على البيانات الجديدة window مع كل حركة لل 

Sliding Window Pattern أشهر أفكار الـ:

محددة window إيجاد الحد الأقصى/الأدنى في:
 array البحث عن الحد الأقصى أو الأدنى لقيم ضمن نطاق معين من ال 
 (مثلاً، إيجاد أكبر مجموع فرعي بطول معين).

البحث عن نمط معين:
 string أو  array البحث عن تكرار نمط معين داخل 
 (مثل إيجاد أطول سلسلة تحتوي على عدد معين من القيم).

dynamic window التحكم في  :
  بناءً على شرط معين array أثناء التنقل عبر ال window تعديل حجم ال 
(تحتوي على مجموعة معينة من العناصر window مثل إيجاد أصغر)

Sliding Window Pattern سؤال يجمع جميع أفكار الـ 

 يحقق الأمور التالية code اكتب  

ثابتة window إيجاد الحد الأقصى في:
window معين، وتجد أكبر مجموع فرعي من القيم داخل ال  window وطول array تأخذ 

البحث عن نمط معين:
متحركة window ونمط معين، وتبحث عن أول تطابق للنمط داخل السلسلة باستخدام string تأخذ 

dynamic window التحكم في :
وقيمة، وتجد أقصر سلسلة فرعية يكون مجموعها أكبر من أو يساوي القيمة array تأخذ 

الحل المتوقع:

 منفصلة functions لتنفيذ جميع هذه المهام في Sliding Window Pattern استخدم الـ 

**الحل**
 
// 1. إيجاد الحد الأقصى في نافذة ثابتة
function maxSubarraySum(arr, windowSize) {
    if (arr.length < windowSize) return null;
    
    let maxSum = 0;
    let currentSum = 0;

    // اجمع أول نافذة
    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }

    currentSum = maxSum;

    // حرك النافذة عبر المصفوفة
    for (let i = windowSize; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - windowSize];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// 2. البحث عن نمط معين
function findPattern(str, pattern) {
    let patternLength = pattern.length;
    let patternMap = {};
    let matchCount = 0;
    
    // بناء الخريطة للنمط
    for (let char of pattern) {
        patternMap[char] = (patternMap[char] || 0) + 1;
    }

    // بدء النافذة
    for (let end = 0, start = 0; end < str.length; end++) {
        let endChar = str[end];

        if (endChar in patternMap) {
            patternMap[endChar]--;
            if (patternMap[endChar] === 0) {
                matchCount++;
            }
        }

        // إذا وصلت إلى الطول المطلوب للنمط
        if (end >= patternLength - 1) {
            if (matchCount === Object.keys(patternMap).length) {
                return str.substring(start, end + 1);
            }

            let startChar = str[start];
            start++;
            if (startChar in patternMap) {
                if (patternMap[startChar] === 0) {
                    matchCount--;
                }
                patternMap[startChar]++;
            }
        }
    }

    return null;
}

// 3. التحكم في نافذة ديناميكية
function minSubArrayLen(arr, target) {
    let minLength = Infinity;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= arr[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// functions استخدام ال 
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(findPattern('cbaebabacd', 'abc')); // Output: 'cba' or 'bac'
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // Output: 2

*/

(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)

DIVIDE & CONQUER

/*

DIVIDE & CONQUER:-

هو اسلوب للحل اكتر من انه حل بذات نفسه DIVIDE & CONQUER الـ
هو عباره عن انك بتقسم المشكله بتاعتك لاجزاء صغيره وتبدا تحل كل جزء لوحده وبعدين 
تبقى تدمجهم مع بعض ويبقى كده انت حليت السؤال

**تطبيقات**:-

كتير ذي  algorithms الاسلوب ده هتلاقيه بيستخدم في ال
merge sort , quick sort , binary search , ......

*/

(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)

                                       RECURSION

/*

### ** Recursion فكرة عمل الـ **

** Recursion لنفسها بشكل متكرر حتى يتم الوصول إلى حالة نهائية (شرط الإيقاف) الذي يوقف الاستدعاء المتكرر ويعيد النتائج **:ال function هو نمط برمجي  يتم فيه استدعاء ال

### ** Recursion كيفية عمل ال:**

1. **شرط الإيقاف (Base Case):** 
عن استدعاء نفسها. عادةً يكون عند وصول المدخلات إلى حالة بسيطة يمكن حلها مباشرة function هذا الشرط يحدد متى يجب أن تتوقف ال

2. **الاستدعاء الذاتي (Recursive Case):**
 نفسها، مع تمرير جزء من البيانات أو المتغيرات المعدلة حتى تصل في النهاية إلى شرط الإيقاف function هذا هو الجزء الذي تستدعي فيه ال 

### **مثال بسيط: حساب مضروب عدد (Factorial)**

function factorial(n) {
    // شرط الإيقاف
    if (n === 1) {
        return 1;
    }
    // الاستدعاء الذاتي
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

** factorial شرح ال :**
حتى تصل إلى 1، n تستدعي نفسها مع تقليل القيمة
حيث يتوقف الاستدعاء ويبدأ في إرجاع النتائج حتى تعود إلى الدالة الأصلية.

### ** Recursion سؤال يجمع أفكار الـ :**

1. ** من الأرقام  array أوجد مجموع الأرقام في **
لحساب مجموع هذه الارقام recursion من الارقام وتستخدم ال array تستقبل function اكتب

2. **من الكلمات array تحقق من وجود كلمة معينة في **
   - من الكلمات أم لا  array مما إذا كانت كلمة معينة موجودة في Recursion تتحقق باستخدام الـ function اكتب

3. **قلب سلسلة نصية:**
   - ("hello" إلى "olleh" مثلاً تحويل  )  Recursion تقوم بقلب سلسلة نصية  باستخدام الـ  function اكتب 

4. **عد العناصر في مصفوفة متشعبة (Nested Array):**
  داخليه arrays تحتوي على array تقوم بعد جميع العناصر في function اكتب recursion باستخدام الـ 

### **أمثلة:**

- **array جمع أرقام ال :**

```javascript
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

- **التحقق من وجود كلمة:**

```javascript
function containsWord(arr, word) {
    if (arr.length === 0) return false;
    if (arr[0] === word) return true;
    return containsWord(arr.slice(1), word);
}

console.log(containsWord(['apple', 'banana', 'cherry'], 'banana')); // Output: true
```

- **string لل reverse**

```javascript
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('hello')); // Output: olleh
```

- **عد العناصر في مصفوفة متشعبة:**

function countElements(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count += countElements(arr[i]);
        } else {
            count++;
        }
    }
    return count;
}

console.log(countElements([1, [2, 3], [4, [5, 6]]])); // Output: 6
```

Recursion في الـ JavaScript هذه الأسئلة تغطي مجموعة متنوعة من استخدامات الـ

*/

                                  SEARCHING_ALGORITHMS

/*

### **أنواع خوارزميات البحث (Searching Algorithms)**

خوارزميات البحث هي خوارزميات تُستخدم للعثور على عنصر معين أو مجموعة عناصر داخل مجموعة بيانات.
هناك عدة أنواع من خوارزميات البحث، ولكل نوع منها طريقة عمل وفعالية مختلفة بناءً على هيكل البيانات الذي تُطبَّق عليه.
           
*/

(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)

LINEAR_SEARCH

/*

### **1. البحث الخطي (Linear Search)**
                                  
- **الفكرة:

** البحث الخطي يتضمن التحقق من كل عنصر في المجموعة واحدًا تلو الآخر حتى يتم العثور على العنصر المطلوب 
أو يتم الوصول إلى نهاية المجموعة
                                  
-  **Big O:** 
- **Best Case:** O(1) - عندما يكون العنصر المطلوب في أول موقع.
- **Avereage Case:** O(n) او O(n/2)
- **Worst Case:** O(n) - عندما يكون العنصر المطلوب في آخر موقع أو غير موجود.
                                  
- **طريقة التنفيذ:**

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // إذا لم يتم العثور على العنصر
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
 
*/

(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)

BINARY_SEARCH

/*

### **2. البحث الثنائي (Binary Search)**
                                  
- **الفكرة:**

.(sorted arrays) المرتبة arrays البحث الثنائي يستخدم في ال 
. إلى نصفين في كل خطوة array يقوم بتقسيم ال 
، ويتحقق ما إذا كان العنصر المطلوب في النصف الأيسر أو الأيمن، ويستمر في التقسيم حتى يتم العثور على العنصر.
                                  
 - **Big O:** 
- **Best Case:** O(1) - عندما يكون العنصر في المنتصف مباشرةً.
- **Averege Case:** O(log n)
- **Worst Case:** O(log n) - في حالة البحث خلال جميع الأنصاف المتبقية.
                                  
- **طريقة التنفيذ:**
                                  
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
                                  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
                                  
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
                                  
    return -1; // إذا لم يتم العثور على العنصر
}
                                  
console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2

*/

(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)

BINARY_SEARCH_TREE_SEARCH

/*

### **3. البحث في الشجرة الثنائية (Binary Search Tree Search)**
                                  
- **الفكرة:** 

البحث في شجرة ثنائية يعتمد على مقارنة العنصر المطلوب مع الجذر 
(root) ثم الانتقال إلى الفرع الأيسر إذا كان أصغر أو الفرع الأيمن إذا كان أكبر، حتى يتم العثور على العنصر.
                                  
 - **Big O:** 
- **Best Case:** O(log n) - إذا كانت الشجرة متوازنة.
- **Averege Case:** O(log n)
- **Worst Case:** O(n) - إذا كانت الشجرة غير متوازنة.

- **طريقة التنفيذ:**
                                  
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
                                  
function searchBST(root, target) {
    if (root === null || root.value === target) {
        return root;
    }
                                  
    if (target < root.value) {
        return searchBST(root.left, target);
    } else {
        return searchBST(root.right, target);
    }
}
                                  
// مثال لاختبار الكود
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
                                  
console.log(searchBST(root, 7)); // Output: TreeNode { value: 7, left: null, right: null }

*/

(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)

(GRAPHS_SEARCH)-->

Breadth_First_Searc_>>(BFS)

/*

-**BFS**

**Breadth First Searc --> ( البحث بالعرض )**

queue باستخدام الـ graph أو الـtree هي خوارزمية بتستخدم لاستكشاف الـ 
اللي بنحددها كـنقطة بداية node الفكرة الأساسية هي إنها بتبدأ من الـ 
المجاورة ليها قبل ما تنتقل لعقد جديدة nodes وبعدها بتستكشف كل الـ 

**الخطوات:**

1. queue اللي بنبدأ منها للـ node بنضيف الـ 

2. ونستكشفها queue من الـ node بنخرج الـ 

3.  queue المجاورة ليها اللي ما تمش استكشافهم للـ nodes بنضيف ال 

4. يبقى فاضي queue بنكرر الخطوات دي لحد ما الـ

**أهم النقاط:**

- queue بيشتغل بشكل أفقي وبيستعمل الـ BFS الـ
- في مستوى معين قبل ما ينزل للمستوى اللي بعده nodes يعني بيستكشف كل الـ
- الاقرب الاول وبعد كده الابعد nodes يعني بيستكشف الـ

- (Un Weighted Graph) اللي مفيهوش أوزان graph مناسب لإيجاد أقصر مسار في ال 

- بيستكشف كل مستوى قبل ما ينتقل للمستوى اللي بعده وده مناسب للمشاكل tree في الـ 
- اللي فيها متاهات او شجره او تمثيل شبكي

### العيوب:-

- هتبقى مساحتها كبيره جدا queue بقت كبيره اوي ال tree لو ال 

**TREE**

bfs(){
  var q = [] , visited = [] ;
  var node = this.root ;
  q.push(node) ;
  while(q.length){
    node = q.shift() ;
    visited.push(node.value) ;
    if(node.left){ q.push(node.left) } ;
    if(node.right){ q.push(node.right) } ;
  }
  return visited ;
}

**GRAPH**

bfs(start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;

while (queue.length) {
  let vertex = queue.shift();
  result.push(vertex);

  this.adjacencyList[vertex].forEach(neighbor => {
    if (!visited[neighbor.vertex]) {
      visited[neighbor.vertex] = true;
      queue.push(neighbor.vertex);
    }
  });
}

  return result;
}

*/

DEPTH_FIRST_SEARCH_>>(DFS)

/*

### ملخص DFS:
DFS (Depth-First Search) --> ( البحث بالطول )

  recursion او الـ stack باستخدام الـ graphs او الـ trees هي خوارزمية لاستكشاف الـ 
  من خلال التركيز على استكشاف كل مسار بالطول قبل الانتقال إلى مسار آخر.

### DFS خطوات الـ :

1. visited ونعتبرها  node نبدأ من أي 

2. visited نتحرك إلى أول عقده جمبها غير 

3. جديدة nodes نستمر في الانتقال عموديًا للأسفل حتى لا نجد 

4. نقوم بـ الرجوع للخلف يعني نطلع لفوق تاني يعني لاستكشاف مسارات أخرى.

5. nodes نكرر العملية حتى نغطي جميع الـ 

### المميزات:

- بسيطة وتستخدم ذاكرة أقل.
- مفيدة في تطبيقات مثل البحث في المتاهات.
- معينه node ممتازه علشان تستكشف كل المسارات او تبحث عن

### العيوب:

- visited nodes لا نهائية بدون مراقبة الـ  loops قد تتورط في  
- لا تضمن العثور على أقصر مسار.

### الانواع :

- ( pre order , in order , post order ) له 3 انواع وهما ال DFS ال
- بالطول  nodes التلاته بيشتركو في نفس فكره العمل اللي هيا زياره ال
- لكن الاختلاف بيبقى في ترتيب الزياره 

1-### DFS pre order:-

- الاول parent node هو عباره عن ان احنا بنزور ال 
- tree اللي على الشمال كلها الى ان نصل لاخر ال nodes وبعدين نزور ال 
- اللي على اليمين nodes ونكرر نفس العمليه في ال
- copy tree وده بنستخدمه اكتر لما نحب ن

preorderTraversal(node, result) {
  if (node) {
    result.push(node.value);
    this.preorderTraversal(node.left, result);
    this.preorderTraversal(node.right, result);
  }
}

dfsPreOrder() {
  var result = [];
  this.preorderTraversal(this.root, result);
  return result;
}

2-### DFS in order:-

- كلها الاول left nodes هو عباره عن ان احنا بنزور ال 
- right nodes وبعد كده ال parent node وبعدين نزور ال 
- وده بنستخدمه اكتر لما نحب نطبع القيم بترتيب تصاعدي

inorderTraversal(root) {
  const result = [] ;
  this.dfsInOrder(root , result) ;
  return result ;
}

dfsInOrder(node, result) {
  if (node) {
    this.dfsInOrder(node.left, result);
    result.push(node.value);
    this.dfsInOrder(node.right, result);
  }
}

3-### DFS post order:-

- كلهاالاول left nodes هو عباره عن ان احنا بنزور ال 
- parent node وبعد كده ال right nodes وبعدين نزور ال 
- وده بنستخدمه اكتر لما نحب نحذف الشجره

postorderTraversal() {
    const result = [];
    this.dfsPostOrder(this.root, result);
    return result;
}

dfsPostOrder(node, result) {
  if (node) {
    this.dfsPostOrder(node.left, result);
    this.dfsPostOrder(node.right, result);
    result.push(node.value);
  }
}

ملخص لل 3 انواع:-

1-tree لو عايز تنسخ الـ pre order
2-لو عايز تطبع القيم بترتيب تصاعدي tree
3-tree لو عايز تحذف الـ post order


**GRAPH**

dfsIterative(start) {
  const stack = [start];
  const result = [];
  const visited = {};
  visited[start] = true;

  while (stack.length) {
    let vertex = stack.pop();
    result.push(vertex);

    this.adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor.vertex]) {
        visited[neighbor.vertex] = true;
        stack.push(neighbor.vertex);
      }
    });
  }

  return result;
}

dfsRecursive(start, visited = {}, result = []) {
  if (!start) return result;

  visited[start] = true;
  result.push(start);

  this.adjacencyList[start].forEach(neighbor => {
    if (!visited[neighbor.vertex]) {
      this.dfsRecursive(neighbor.vertex, visited, result);
    }
  });

  return result;
}

ملخص :-

-un weighted graph لو بتدور على اقصر مسار في BFS اختار ال
القريبه الاول وبعدين البعيده nodes او تزور الـ

-graph اللي في الـ nodes لو محتاج تستكشف كل المسارات او تزور كل ال DFS اختار ال
معينه node او تدور على

*/

                                    SORTING_ALGORITHMS
     
(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)

 BUBBLE_SORT

/*

### خطوات **Bubble Sort**

1. **ابدأ من أول عنصر** في القائمة.

2. **قارن بين كل عنصر والعنصر الذي يليه**:

   - إذا كان العنصر الأول أكبر من العنصر الذي يليه، قم بتبديل مكانيهما.
   - إذا لم يكن أكبر، اتركهما كما هما.

3. **استمر في تكرار هذه المقارنة** بين العناصر المجاورة حتى تصل إلى نهاية القائمة.
 بعد الانتهاء من المرور على القائمة مرة واحدة،
  سيكون أكبر عنصر في مكانه الصحيح (آخر القائمة).

4. **عد مرة أخرى إلى البداية**، وقم بنفس العملية على العناصر المتبقية باستثناء 
آخر عنصر (لأنه تم وضعه في مكانه الصحيح).

5. **استمر في التكرار**:

   - في كل مرة تمر على القائمة، سيتم وضع أكبر عنصر متبقي في مكانه الصحيح.
   - عندما تمر على القائمة ولا تجد أي عنصر يحتاج إلى تبديل، توقف. الآن، القائمة مرتبة.

### مثال بسيط:

Bubble Sort لنفترض أن لديك هذه القائمة `[4, 2, 7, 1]` وتريد ترتيبها باستخدام .

1. **التمريرة الأولى**:

   - قارن `4` و `2`: 4 أكبر، لذا بدلهما. تصبح القائمة `[2, 4, 7, 1]`.
   - قارن `4` و `7`: 4 أصغر، لذا اتركهما كما هما.
   - قارن `7` و `1`: 7 أكبر، لذا بدلهما. تصبح القائمة `[2, 4, 1, 7]`.
   - الآن، العنصر `7` في مكانه الصحيح.

2. **التمريرة الثانية**:

   - قارن `2` و `4`: 2 أصغر، لذا اتركهما كما هما.
   - قارن `4` و `1`: 4 أكبر، لذا بدلهما. تصبح القائمة `[2, 1, 4, 7]`.
   - الآن، العنصر `4` في مكانه الصحيح.

3. **التمريرة الثالثة**:

   - قارن `2` و `1`: 2 أكبر، لذا بدلهما. تصبح القائمة `[1, 2, 4, 7]`.
   - الآن، جميع العناصر في أماكنها الصحيحة، والقائمة مرتبة.

Best Case:

Big O: 
𝑂(𝑛)
الوصف: يحدث عندما تكون القائمة مترتبة بالفعل. يتم التحقق في تمريرة واحدة فقط.

Average Case:

Big O: 
𝑂(𝑛**2)
الوصف: يحدث في حالة القائمة غير المرتبة بشكل عشوائي، ويتطلب عددًا كبيرًا من المقارنات والتباديل.

Worst Case:

Big O: 
𝑂(𝑛**2)
الوصف: يحدث عندما تكون القائمة مرتبة بشكل عكسي (من الأعلى إلى الأدنى)، ويحتاج إلى أكبر عدد من التباديل.

*/

BUBBLE_CODE

/*

function bubbleSort(arr, comparator) {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
    }
  
    let swap;
  
    for (let i = 0; i < arr.length; i++) {
      swap = false;
  
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swap = true;
        }
      }
  
      if (!swap) break;
    }
  
    return arr;
  }
  
  const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  
  console.log(bubbleSort(['LilBub', 'Garfield', 'Blue', 'Grumpy'], (a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  })); // [ 'Garfield', 'LilBub', 'Blue', 'Grumpy' ]
  
  const moarKittyData = [{
    name: 'LilBub',
    age: 7
  }, {
    name: 'Garfield',
    age: 40
  }, {
    name: 'Heathcliff',
    age: 45
  }, {
    name: 'Blue',
    age: 1
  }, {
    name: 'Grumpy',
    age: 6
  }];
  
  console.log(bubbleSort(moarKittyData, (a, b) => b.age - a.age)); // sorted by age in descending order
  // [ { name: 'Heathcliff', age: 45 },
  //   { name: 'Garfield', age: 40 },
  //   { name: 'LilBub', age: 7 },
  //   { name: 'Grumpy', age: 6 },
  //   { name: 'Blue', age: 1 } ]

  // Bubble Sort
// Bubble sort is an O(n^2) algorithm.

function bubbleSort(arr) {
    let swap;
  
    for (let i = 0; i < arr.length; i++) {
      swap = false;
  
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swap = true;
        }
      }
  
      if (!swap) break;
    }
  
    return arr;
  }
  
  const nums2 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  console.log(bubbleSort(nums2)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]

*/

(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)

INSERTION_SORT

  /*

  ### خطوات **Insertion Sort**:
  
  1. **ابدأ من العنصر الثاني** في القائمة (لأننا نعتبر أن العنصر الأول مرتب بالفعل).
  
  2. **خذ العنصر الحالي** ( (key) نسميه "العنصر المُدار او ") وقارنه بالعناصر التي سبقته:
     - ابدأ بمقارنته مع العنصر الذي يسبقه مباشرة.
     - إذا كان العنصر المُدار أصغر، قم بنقل العنصر الذي يسبقه إلى اليمين.
  
  3. **استمر في نقل العناصر** إلى اليمين حتى تجد المكان المناسب للعنصر المُدار  ، حيث يكون العنصر الذي قبله أصغر أو يساويه.
  
  4. **ضع العنصر المُدار** في مكانه الصحيح.
  
  5. **انتقل إلى العنصر التالي** في القائمة وكرر العملية حتى تصل إلى نهاية القائمة.
  
  ### مثال بسيط:
  
  لنفترض أن لديك القائمة `[4, 2, 7, 1]` وتريد ترتيبها باستخدام Insertion Sort.
  
  1. **البدء بالعنصر الثاني (2):**
     - قارن `2` مع `4`. لأن `2` أصغر من `4`، انقل `4` إلى اليمين. تصبح القائمة `[4, 4, 7, 1]`.
     - ضع `2` في مكانه. تصبح القائمة `[2, 4, 7, 1]`.
  
  2. **انتقل للعنصر الثالث (7):**
     - قارن `7` مع `4`. لأن `7` أكبر من `4`، اتركه في مكانه.
     - القائمة تبقى كما هي `[2, 4, 7, 1]`.
  
  3. **انتقل للعنصر الرابع (1):**
     - قارن `1` مع `7`. لأن `1` أصغر من `7`، انقل `7` إلى اليمين. تصبح القائمة `[2, 4, 7, 7]`.
     - قارن `1` مع `4`. لأن `1` أصغر من `4`, انقل `4` إلى اليمين. تصبح القائمة `[2, 4, 4, 7]`.
     - قارن `1` مع `2`. لأن `1` أصغر من `2`, انقل `2` إلى اليمين. تصبح القائمة `[2, 2, 4, 7]`.
     - ضع `1` في مكانه. تصبح القائمة `[1, 2, 4, 7]`.
  
  4. **النتيجة النهائية:**
     - الآن، كل العناصر في أماكنها الصحيحة، والقائمة مرتبة.
  

Best Case:

Big O: 
𝑂(𝑛)
الوصف: يحدث عندما تكون القائمة مرتبة بالفعل. لا تحتاج إلى أي تبادل، ويتم التحقق في تمريرة واحدة.

Average Case:

Big O: 
𝑂(𝑛**2)
الوصف: يحدث في حالة القائمة غير المرتبة بشكل عشوائي، ويتطلب عددًا كبيرًا من التباديل.

Worst Case:

Big O: 
𝑂(𝑛**2)
الوصف: يحدث عندما تكون القائمة مرتبة بشكل عكسي (من الأعلى إلى الأدنى)، ويحتاج إلى أكبر عدد من التباديل.

*/

INSERTION_CODE

/*

function insertionSortSwap(arr, comparator) {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
    }
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (comparator(arr[j], arr[j - 1]) < 0) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        else break;
      }
    }
  
    return arr;
  }
  
  const nums3 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  console.log(insertionSortSwap(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  
  console.log(insertionSortSwap(['LilBub', 'Garfield', 'Blue', 'Grumpy'], (a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  })); // [ 'Garfield', 'LilBub', 'Blue', 'Grumpy' ]
  
  const moarKittyData2 = [{
    name: 'LilBub',
    age: 7
  }, {
    name: 'Garfield',
    age: 40
  }, {
    name: 'Heathcliff',
    age: 45
  }, {
    name: 'Blue',
    age: 1
  }, {
    name: 'Grumpy',
    age: 6
  }];
  
  console.log(insertionSortSwap(moarKittyData, (a, b) => b.age - a.age)); // sorted by age in descending order
  // [ { name: 'Heathcliff', age: 45 },
  //   { name: 'Garfield', age: 40 },
  //   { name: 'LilBub', age: 7 },
  //   { name: 'Grumpy', age: 6 },
  //   { name: 'Blue', age: 1 } ]
  
  // Using auxiliary variable
  function insertionSortVariable(arr, comparator) {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
    }
  
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j;
  
      for (j = i - 1; j >= 0 && comparator(current, arr[j]) < 0; j--) {
        arr[j + 1] = arr[j];
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  console.log(insertionSortVariable(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  
  console.log(insertionSortVariable(['LilBub', 'Garfield', 'Blue', 'Grumpy'], (a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  })); // [ 'Garfield', 'LilBub', 'Blue', 'Grumpy' ]
  
  console.log(insertionSortVariable(moarKittyData, (a, b) => b.age - a.age)); // sorted by age in descending order
  // [ { name: 'Heathcliff', age: 45 },
  //   { name: 'Garfield', age: 40 },
  //   { name: 'LilBub', age: 7 },
  //   { name: 'Grumpy', age: 6 },
  //   { name: 'Blue', age: 1 } ]

  // Insertion Sort
// Insertion sort is an O(n^2) algorithm.

// Using swap
function insertionSortSwap(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        else break;
      }
    }
  
    return arr;
  }
  
  const nums4 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  console.log(insertionSortSwap(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  console.log(insertionSortSwap([0, -10, 7, 4])); // [-10, 0, 4, 7]
  
  // Using auxiliary variable
  function insertionSortVariable(arr) {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j;
  
      for (j = i - 1; j >= 0 && arr[j] > current; j--) {
        arr[j + 1] = arr[j];
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  console.log(insertionSortVariable(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  console.log(insertionSortVariable([0, -10, 7, 4])); // [-10, 0, 4, 7]

*/

(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)

MERGE_SORT

/*

### خطوات **Merge Sort**:

1. **قسّم القائمة**:

   - إذا كانت القائمة تحتوي على أكثر من عنصر واحد، قم بتقسيمها إلى نصفين.
   - استمر في تقسيم كل نصف إلى نصفين حتى تصبح كل قائمة صغيرة تحتوي على عنصر واحد فقط.

2. **ادمج القوائم**:

   - بعد تقسيم القائمة إلى أجزاء صغيرة، ابدأ بدمج الأجزاء معًا بطريقة مرتبة.
   - قارن أول عنصر من كل جزء مدموج، وضع الأصغر في قائمة جديدة.

3. **كرر عملية الدمج**:

   - استمر في دمج القوائم الصغيرة معًا بشكل مرتب حتى تعود إلى قائمة واحدة مرتبة.

### مثال بسيط:

Merge Sort لنفترض أن لديك القائمة `[8, 4, 2, 1]` وتريد ترتيبها باستخدام .

1. **قسّم القائمة**:

   - القائمة `[8, 4, 2, 1]` تقسم إلى `[8, 4]` و `[2, 1]`.
   - `[8, 4]` تقسم إلى `[8]` و `[4]`.
   - `[2, 1]` تقسم إلى `[2]` و `[1]`.

2. **ادمج القوائم الصغيرة**:

   - ادمج `[8]` و `[4]`:
     - قارن `8` و `4`. لأن `4` أصغر، القائمة المدمجة تصبح `[4, 8]`.
   - ادمج `[2]` و `[1]`:
     - قارن `2` و `1`. لأن `1` أصغر، القائمة المدمجة تصبح `[1, 2]`.

3. **ادمج القوائم المدموجة معًا**:

   - الآن قم بدمج `[4, 8]` و `[1, 2]`:
     - قارن `4` و `1`. لأن `1` أصغر، القائمة المدمجة تصبح `[1]`.
     - قارن `4` و `2`. لأن `2` أصغر، القائمة المدمجة تصبح `[1, 2]`.
     - بعد ذلك، ضف `4` ثم `8` لتصبح القائمة النهائية `[1, 2, 4, 8]`.

4. **النتيجة النهائية:**

   - الآن لديك قائمة مرتبة بالكامل `[1, 2, 4, 8]`.


 ### النقاط الأساسية:
   - **التقسيم والدمج**: يعتمد على تقسيم القائمة ثم دمجها.

Best Case:

Big O: 
𝑂(𝑛 log(𝑛))
الوصف: حتى في الحالة المثلى، يحتاج 
Merge Sort
 إلى تقسيم ودمج العناصر.

Average Case:

Big O: 
𝑂(𝑛 log(𝑛))
الوصف: يتطلب الوقت نفسه تقريبًا بغض النظر عن ترتيب العناصر.

Worst Case:

Big O: 
𝑂(𝑛 log(𝑛))
الوصف: يحدث دائمًا نفس الوقت تقريبًا بسبب عملية التقسيم والدمج.

*/

MERGE_CODE

/*

function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr;
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left, comparator), mergeSort(right, comparator), comparator);
  }
  
  function merge(left, right, comparator) {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
    }
    const resultArr = [];
    let leftCount = 0;
    let rightCount = 0;
  
    while (leftCount < left.length && rightCount < right.length) {
      if (comparator(left[leftCount], right[rightCount]) < 0) {
        resultArr.push(left[leftCount]);
        leftCount++;
      } else {
        resultArr.push(right[rightCount]);
        rightCount++;
      }
    }
  
    while (leftCount < left.length) {
      resultArr.push(left[leftCount]);
      leftCount++;
    }
  
    while (rightCount < right.length) {
      resultArr.push(right[rightCount]);
      rightCount++;
    }
  
    return resultArr;
  }
  
  const nums5 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  
  console.log(mergeSort(['LilBub', 'Garfield', 'Blue', 'Grumpy'], (a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  })); // [ 'Garfield', 'LilBub', 'Blue', 'Grumpy' ]
  
  const moarKittyData3 = [{
    name: 'LilBub',
    age: 7
  }, {
    name: 'Garfield',
    age: 40
  }, {
    name: 'Heathcliff',
    age: 45
  }, {
    name: 'Blue',
    age: 1
  }, {
    name: 'Grumpy',
    age: 6
  }];
  
  console.log(mergeSort(moarKittyData, (a, b) => b.age - a.age)); // sorted by age in descending order
  // [ { name: 'Heathcliff', age: 45 },
  //   { name: 'Garfield', age: 40 },
  //   { name: 'LilBub', age: 7 },
  //   { name: 'Grumpy', age: 6 },
  //   { name: 'Blue', age: 1 } ]

*/

(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)

QUICK_SORT

/*

###  **Quick Sort** خطوات ال :

1. **اختر عنصرًا محوريًا (Pivot):**

   - اختر عنصرًا من القائمة ليكون "العنصر المحوري".
    يمكن أن يكون أي عنصر، ولكن غالبًا يُختار العنصر الموجود في النهاية أو البداية.

2. **قسّم القائمة حول العنصر المحوري:**

   - قم بإعادة ترتيب القائمة بحيث تكون جميع العناصر الأصغر من العنصر المحوري على يساره، وجميع العناصر الأكبر على يمينه.
   - بعد هذه العملية، سيكون العنصر المحوري في مكانه الصحيح.

3. ** على الجزئين Quick Sort طبّق:**

   - (العناصر الأكبر) طبّق الخطوات السابقة بشكل متكرر على الجزء الأيسر من القائمة (العناصر الأصغر) والجزء الأيمن 

4. **استمر في التقسيم:**
   - استمر في تقسيم كل جزء حتى تصبح القوائم مكونة من عنصر واحد، حيث لا يتبقى أي شيء لترتيبه.

### مثال بسيط:

Quick Sort لنفترض أن لديك القائمة `[5, 3, 8, 4, 2, 7, 1]` وتريد ترتيبها باستخدام 

1. **اختر العنصر المحوري:**
   - لنفترض أننا اخترنا `7` كعنصر محوري.

2. **قسّم القائمة حول العنصر المحوري:**
   - قارن كل عنصر في القائمة بـ `7`:
     - `[5, 3, 4, 2, 1]` أصغر من `7` وتوضع على يساره.
     - `8` أكبر من `7` وتوضع على يمينه.
   - القائمة تصبح `[5, 3, 4, 2, 1, 7, 8]`.

3. **طبّق Quick Sort على الجزئين:**
   - الجزء الأيسر `[5, 3, 4, 2, 1]` والجزء الأيمن `[8]`.
   - الآن نختار `1` كعنصر محوري للجزء الأيسر.

4. **قسّم الجزء الأيسر:**
   - قارن كل عنصر بـ `1`:
     - جميع العناصر `[5, 3, 4, 2]` أكبر من `1`، لذلك تبقى كما هي.
     - القائمة تصبح `[1, 3, 4, 2, 5, 7, 8]`.

5. **استمر في التطبيق:**
   - اختر عناصر محورية جديدة للجزء المتبقي واستمر في تقسيم وترتيب القوائم الأصغر حتى تصبح كلها مرتبة.

6. **النتيجة النهائية:**
   - القائمة النهائية المرتبة هي `[1, 2, 3, 4, 5, 7, 8]`.


// ### النقاط الأساسية:

Best Case:

Big O: 
𝑂(𝑛 log(⁡𝑛))
الوصف: يحدث عندما يتم اختيار العنصر المحوري
بحيث يقسم القائمة بشكل مثالي (نصفين متساويين)

Average Case:

Big O: 
𝑂(𝑛 log(⁡𝑛))
الوصف: يحدث في حالة التقسيم العشوائي للقائمة.

Worst Case:
Big O: 
𝑂(𝑛**2)
الوصف: يحدث عندما يكون العنصر المحوري دائمًا هو أكبر أو أصغر عنصر،
 مما يؤدي إلى تقسيم غير متساوي (قائمة مرتبة بشكل عكسي).

*/

QUICK_CODE

/*
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[start] > arr[i]) {
        pivotIndex++;
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      }
    }
  
    if (pivotIndex !== start) [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
  
    return pivotIndex;
  }
  
  function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
      const pivotIndex = pivot(arr, start, end);
  
      quickSort(arr, start, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, end);
    }
  
    return arr;
  }
  
  const nums6 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  console.log(quickSort([])); // []

 */

(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)

SELECTION_SORT

/*

1. **ابدأ من بداية القائمة:**

   - قم بالبحث عن أصغر عنصر في القائمة كاملة.

2. **تبديل الأصغر مع العنصر الأول:**

   - قم بتبديل الأصغر الذي وجدته مع العنصر الأول في القائمة.

3. **انتقل إلى العنصر التالي:**

   - قم بتكرار نفس العملية للجزء المتبقي من القائمة (بدءًا من العنصر الثاني).

4. **البحث والتبديل:**

   - ابحث عن أصغر عنصر في الجزء المتبقي من القائمة،
    وقم بتبديله مع العنصر الذي في بداية هذا الجزء.

5. **استمر حتى تنتهي:**
   - استمر في تكرار هذه العملية حتى تصل إلى نهاية القائمة.
    في كل مرة، يكون الجزء الذي تم ترتيبه يتسع والعناصر غير المرتبة تتناقص.

### مثال بسيط:

لنفترض أن لديك القائمة `[64, 25, 12, 22, 11]`
 وتريد ترتيبها باستخدام 
 Selection Sort.

1. **البحث عن أصغر عنصر في القائمة الكاملة:**

   - الأصغر هو `11`.
   - قم بتبديله مع العنصر الأول. تصبح القائمة `[11, 25, 12, 22, 64]`.

2. **البحث عن أصغر عنصر في الجزء المتبقي:**

   - الجزء المتبقي هو `[25, 12, 22, 64]`. الأصغر هو `12`.
   - قم بتبديله مع العنصر الأول في الجزء المتبقي. تصبح القائمة `[11, 12, 25, 22, 64]`.

3. **البحث عن أصغر عنصر في الجزء المتبقي:**

   - الجزء المتبقي هو `[25, 22, 64]`. الأصغر هو `22`.
   - قم بتبديله مع العنصر الأول في الجزء المتبقي. تصبح القائمة `[11, 12, 22, 25, 64]`.

4. **البحث عن أصغر عنصر في الجزء المتبقي:*
*
   - الجزء المتبقي هو `[25, 64]`. الأصغر هو `25`.
   - لا حاجة لتبديل لأن `25` هو بالفعل في مكانه الصحيح. القائمة تبقى كما هي `[11, 12, 22, 25, 64]`.

5. **النتيجة النهائية:**

   - القائمة الآن مرتبة بالكامل: `[11, 12, 22, 25, 64]`.

Selection Sort:-

Best Case:

Big O: 
𝑂(𝑛**2)
إلى البحث عن أصغر عنصر في كل تمريرة Selection Sort الوصف: حتى في الحالة المثلى، تحتاج    
 مما يتطلب وقتًا متناسبًا مع مربع عدد العناصر

Average Case:

Big O: 
𝑂(𝑛**2)
إلى وقت متناسب مع مربع عدد العناصر بسبب عملية البحث عن أصغر عنصر في كل مرة Selection Sort الوصف: في الحالة العادية، تحتاج 

Worst Case:

Big O: 
𝑂(𝑛**2)
الوصف: يحدث في جميع الحالات حيث يحتاج إلى نفس الوقت تقريبًا بغض النظر عن ترتيب العناصر في القائمة،
 لأنه لا يتغير وقت البحث عن أصغر عنصر.
 لا يتأثر بترتيب البيانات في القائمة، لذا فإن تعقيد الزمن هو دائمًا Selection Sort
𝑂(𝑛**2)

*/

SELECTION_CODE

/*

function selectionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
    }
  
    let min;
  
    for (let i = 0; i < arr.length; i++) {
      min = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (comparator(arr[min], arr[j]) > 0) min = j;
      }
  
      if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  
    return arr;
  }
  
  const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  console.log(selectionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  
  console.log(selectionSort(['LilBub', 'Garfield', 'Blue', 'Grumpy'], (a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  })); // [ 'Garfield', 'LilBub', 'Blue', 'Grumpy' ]
  
  const moarKittyData = [{
    name: 'LilBub',
    age: 7
  }, {
    name: 'Garfield',
    age: 40
  }, {
    name: 'Heathcliff',
    age: 45
  }, {
    name: 'Blue',
    age: 1
  }, {
    name: 'Grumpy',
    age: 6
  }];
  
  console.log(selectionSort(moarKittyData, (a, b) => b.age - a.age)); // sorted by age in descending order
  // [ { name: 'Heathcliff', age: 45 },
  //   { name: 'Garfield', age: 40 },
  //   { name: 'LilBub', age: 7 },
  //   { name: 'Grumpy', age: 6 },
  //   { name: 'Blue', age: 1 } ]
 
  */

(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)

RADIX_SORT

 /*

**Radix Sort**:

1. ** في أكبر رقم (Digits) حدد أقصى عدد من الأرقام **

   - ابحث عن الرقم الذي يحتوي على أكبر عدد من الأرقام في القائمة. هذا يحدد عدد التمريرات التي سنحتاجها.

2. **ابدأ من أقل خانة (Least Significant Digit):**

   - في كل تمريرة، نقوم بفرز الأرقام بناءً على قيمة خانة محددة (مثلاً، الآحاد في التمريرة الأولى، العشرات في التمريرة الثانية، وهكذا).

3. **فرز الأرقام بناءً على الخانة الحالية:**

   - استخدم خوارزمية فرز مستقرة (Counting Sort مثل) لترتيب الأرقام بناءً على قيمة الخانة الحالية.
   - يجب أن يتم الفرز بطريقة لا تؤثر على ترتيب الخانات السابقة.

4. **كرر العملية**:

   - انتقل إلى الخانة التالية (مثلاً، من الآحاد إلى العشرات) وكرر عملية الفرز.
   - استمر في التكرار حتى تصل إلى الخانة الأكثر أهمية (Most Significant Digit).

5. **النتيجة النهائية:**

   - بعد إتمام جميع التمريرات، ستكون القائمة مرتبة بشكل كامل.

### مثال بسيط:

لنفترض أن لديك القائمة `[170, 45, 75, 90, 802, 24, 2, 66]` وتريد ترتيبها باستخدام Radix Sort.

1. **تحديد عدد الأرقام:**

   - الرقم الأكبر هو `802`، ويحتوي على 3 أرقام. لذا سنحتاج إلى 3 تمريرات.

2. **التمرير الأول (خانة الآحاد):**

   - قم بفرز الأرقام بناءً على خانة الآحاد:
   - تصبح القائمة `[170, 90, 802, 2, 24, 45, 75, 66]`.

3. **التمرير الثاني (خانة العشرات):**

   - قم بفرز الأرقام بناءً على خانة العشرات:
   - تصبح القائمة `[802, 2, 24, 45, 66, 170, 75, 90]`.

4. **التمرير الثالث (خانة المئات):**

   - قم بفرز الأرقام بناءً على خانة المئات:
   - تصبح القائمة `[2, 24, 45, 66, 75, 90, 170, 802]`.

5. **النتيجة النهائية:**

   - القائمة الآن مرتبة بالكامل: `[2, 24, 45, 66, 75, 90, 170, 802]`.

**Radix Sort:-

Best Case:

Big O: 
𝑂(𝑛 * 𝑘 )
 في أكبر رقم حتى في الحالة المثلى(digits) هو عدد الأرقام  k هو عدد العناصر في القائمة و 𝑛 الوصف: حيث 
 يحتاج إلى المرور على كل عنصر بناءً على كل رقم Radix Sort

Average Case:

Big O: 
𝑂(𝑛 * 𝑘 )
الوصف: 
في أكبر رقم  بغض النظر عن ترتيب العناصر k  وعدد الأرقام  𝑛 يتطلب وقتًا متناسبًا مع عدد العناصر Radix Sort  

Worst Case:

Big O: 
𝑂(𝑛 * 𝑘 )
الوصف: يتطلب وقتًا مشابهًا في أسوأ الحالات،
لأن العملية تعتمد على عدد الأرقام في الأرقام الكبيرة وعلى حجم القائمة.

Radix Sort ? في 𝑘 ماذا يعني  

في أكبر رقم (digits) هو عدد الأرقام k 
 سيكون 3 𝑘 إذا كانت الأرقام تتكون من 3 خانات (مثل 345 أو 678) فإن

*/

RADIX_CODE

/*

function getDigit(num, i) {
    let result = Math.abs(num);
  
    for (let count = i; count > 0; count--) {
      result = Math.floor(result / 10);
    }
  
    return result % 10;
  }
  
  function digitCount(num) {
    return Math.abs(num).toString().length;
  }
  
  function mostDigits(nums) {
    let max = 0;
  
    for (const num of nums) {
      max = Math.max(max, digitCount(num));
    }
  
    return max;
  }
  
  function radixSort(nums) {
    const end = mostDigits(nums);
  
    for (let i = 0; i < end; i++) {
      const helperArr = Array.from({ length: 10 }, () => []);
  
      for (const num of nums) {
        helperArr[getDigit(num, i)].push(num);
      }
  
      nums = [].concat(...helperArr);
    }
  
    return nums;
  }
  
  console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
  console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
  console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));
  // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

  */
 
