let latin = "A B V W G D Đ E Ž Z I J K L LJ M N NJ O P R S T Ć U F H C Č DŽ Š a b v w g d đ e ž z i j k l lj m n nj o p r s t ć u f h c č dž š"
let cyrilic = "А Б B В Г Д Ђ Е Ж З И Ј К Л Љ М Н Њ О П Р С Т Ћ У Ф Х Ц Ч Џ Ш а б в в г д ђ е ж з и ј к л љ м н њ о п р с т ћ у ф х ц ч џ ш"

latin = latin.split(" ");
cyrilic = cyrilic.split(" ");

console.log(latin.length, cyrilic.length);

function L2C(word) {
    let newWord = ""
    for(let i = 0; i < word.length; i++){
        newWord += cyrilic[latin.indexOf(word[i])];
    }
    return newWord;
}

console.log(L2C("nikola"));

let words = `
1	као	as
2	И	I
3	његов	his
4	да	that
5	он	he
6	био	was
7	за	for
8	о	on
9	су	are
10	с	with
11	они	they
12	бити	be
13	ат	at
14	један	one
15	имају	have
16	Ова	this
17	из	from
18	би	by
19	Хот	hot
20	реч	word
21	али	but
22	ста	what
23	неки	some
24	је	is
25	она	it
26	ви	you
27	или	or
28	Имао	had
29	ово	the
30	од	of
31	до	to
32	и	and
33	Старт	a
34	у	in
35	ми	we
36	цан	can
37	напоље	out
38	Друго	other
39	су	were
40	која	which
41	учинити	do
42	њихове	their
43	Време	time
44	ако	if
45	воља	will
46	како	how
47	рекао	said
48	Породица	an
49	сваки	each
50	рећи	tell
51	не	does
52	Сет	set
53	три	three
54	Желим	want
55	аир	air
56	добро	well
57	такође	also
58	плаи	play
59	мала	small
60	крај	end
61	пут	put
62	дом	home
63	прочитајте	read
64	рука	hand
65	Порт	port
66	велика	large
67	спелл	spell
68	адд	add
69	чак	even
70	Ланд	land
71	овде	here
72	муст	must
73	велики	big
74	висока	high
75	таква	such
76	фоллов	follow
77	Закон	act
78	зашто	why
79	аск	ask
80	мен	men
81	Цханге	change
82	отишао	went
83	Лигхт	light
84	врста	kind
85	Офф	off
86	треба	need
87	Хоусе	house
88	пицтуре	picture
89	пробајте	try
90	нас	us
91	Опет	again
92	Анимал	animal
93	Поинт	point
94	мајка	mother
95	свет	world
96	близу	near
97	изградити	build
98	Селф	self
99	Еартх	earth
100	отац	father
101	Ани	any
102	Нев	new
103	Рад	work
104	парт	part
105	узети	take
106	добити	get
107	место	place
108	маде	made
109	ливе	live
110	где 	where
111	после	after
112	Назад	back
113	литтле	little
114	Само	only
115	Роунд	round
116	човек	man
117	године	year
118	дошао	came
119	Схов	show
120	сваки	every
121	гоод	good
122	ме	me
123	даје	give
124	Наш	our
125	под	under
126	Назив	name
127	веома	very
128	кроз	through
129	само	just
130	облик	form
131	реченица	sentence
132	велики	great
133	мисли	think
134	кажу	say
135	помоћ	help
136	низак	low
137	линија	line
138	разликују	differ
139	ред	turn
140	Узрок	cause
141	много	much
142	значити	mean
143	пре	before
144	потез	move
145	Право	right
146	дечак	boy
147	Олд	old
148	сувише	too
149	Исто	same
150	она	she
151	све	all
152	тамо	there
153	када	when
154	уп	up
155	користити	use
156	Ваш	your
157	ваи	way
158	Абоут	about
159	многи	many
160	онда	then
161	им	them
162	пишу	write
163	би	would
164	као	like
165	тако	so
166	ово	these
167	јој	her
168	лонг	long
169	направити	make
170	ствар	thing
171	видети	see
172	га	him
173	два	two
174	има	has
175	изгледа	look
176	више	more
177	дан	day
178	могао	could
179	иди	go
180	доћи	come
181	јесте	did
182	број	number
183	звук	sound
184	Но	no
185	мост	most
186	људи	people
187	мој	my
188	преко	over
189	знам	know
190	вода	water
191	од	than
192	позив	call
193	Прво	first
194	који	who
195	мај	may
196	довн	down
197	страна	side
198	био	been
199	сада	now
200	наћи	find
201	глава	head
202	станд	stand
203	сопствени	own
204	паге	page
205	треба	should
206	Цоунтри	country
207	фоунд	found
208	одговор	answer
209	Сцхоол	school
210	расти	grow
211	Студија	study
212	још	still
213	научити	learn
214	биљка	plant
215	цовер	cover
216	Фоод	food
217	Сун	sun
218	четири	four
219	између	between
220	држава	state
221	задржати	keep
222	Еие	eye
223	никад	never
224	Ласт	last
225	лет	let
226	Мислио	thought
227	Град	city
228	дрво	tree
229	цросс	cross
230	фарм	farm
231	тежак	hard
232	Старт	start
233	моћ	might
234	прича	story
235	Сав	saw
236	далеко	far
237	Сеа	sea
238	драв	draw
239	напустио	left
240	касно	late
241	рун	run
242	немој	don’t
243	док	while
244	Пресс	press
245	близу	close
246	Нигхт	night
247	прави	real
248	живот	life
249	мало	few
250	север	north
251	књига	book
252	носе	carry
253	узео	took
254	Наука	science
255	еат	eat
256	Соба	room
257	пријатељ	friend
258	почела	began
259	Идеја	idea
260	Фисх	fish
261	Моунтаин	mountain
262	престати	stop
263	једном	once
264	база	base
265	хеар	hear
266	Хорсе	horse
267	Цут	cut
268	сигуран	sure
269	ватцх	watch
270	боја	color
271	фаце	face
272	Воод	wood
273	Маин	main
274	отворен	open
275	Изгледа	seem
276	заједно	together
277	Следећа	next
278	Бела	white
279	Деца	children
280	бегин	begin
281	Имам	got
282	валк	walk
283	Пример	example
284	олакшати	ease
285	папир	paper
286	група	group
287	Увек	always
288	Мусиц	music
289	они	those
290	оба	both
291	ознака	mark
292	Често	often
293	леттер	letter
294	до	until
295	Миле	mile
296	Ривер	river
297	ауто	car
298	феет	feet
299	Царе	care
300	Други	second
301	Довољно	enough
302	Плаин	plain
303	девојка	girl
304	уобичајено	usual
305	Млади	young
306	реади	ready
307	изнад	above
308	икад	ever
309	Црвена	red
310	листа	list
311	мада	though
312	осетити	feel
313	Разговор	talk
314	Бирд	bird
315	Ускоро	soon
316	боди	body
317	Дог	dog
318	Породица	family
319	Дирецт	direct
320	посе	pose
321	оставити	leave
322	Сонг	song
323	мерење	measure
324	врата	door
325	Продуцт	product
326	Црна	black
327	кратак	short
328	нумерал	numeral
329	Класа	class
330	ветар	wind
331	Питање	question
332	деси	happen
333	комплетан	complete
334	Схип	ship
335	Ареа	area
336	халф	half
337	Роцк	rock
338	редослед	order
339	Фире	fire
340	југ	south
341	Проблем	problem
342	комад	piece
343	Рекао	told
344	Знао	knew
345	проћи	pass
346	Од	since
347	топ	top
348	Цела	whole
349	Кинг	king
350	улица	street
351	инцх	inch
352	помножите	multiply
353	ништа	nothing
354	Курс	course
355	остани	stay
356	точак	wheel
357	пун	full
358	сила	force
359	Плава	blue
360	објекат	object
361	одлучује	decide
362	Сурфаце	surface
363	Дееп	deep
364	Моон	moon
365	Исланд	island
366	Фоот	foot
367	Систем	system
368	заузет	busy
369	Тест	test
370	Рекорд	record
371	Боат	boat
372	заједнички	common
373	злато	gold
374	могуће	possible
375	Плане	plane
376	Уместо 	stead
377	суво	dry
378	Питам	wonder
379	смех	laugh
380	хиљада	thousand
381	Пре	ago
382	ран	ran
383	цхецк	check
384	Гаме	game
385	Облик	shape
386	изједначавају	equate
387	Хот	hot
388	Мисс	miss
389	Донео	brought
390	топлоте	heat
391	Снов	snow
392	гума	tire
393	доносе	bring
394	да	yes
395	дистант	distant
396	попунити	fill
397	источно	east
398	боја	paint
399	Лангуаге	language
400	међу	among
401	јединица	unit
402	повер	power
403	Град	town
404	фино	fine
405	известан	certain
406	фли	fly
407	пасти	fall
408	води	lead
409	крик	cry
410	Дарк	dark
411	машина	machine
412	НАПОМЕНА	note
413	ваит	wait
414	План	plan
415	Слика	figure
416	звезда	star
417	бок	box
418	именица	noun
419	поље	field
420	одмор	rest
421	исправан	correct
422	стању	able
423	Поунд	pound
424	доне	done
425	Беаути	beauty
426	Дриве	drive
427	стајао	stood
428	садржати	contain
429	Фронт	front
430	учи	teach
431	недеља	week
432	коначни	final
433	дао	gave
434	Зелена	green
435	ох	oh
436	Брзо	quick
437	развити	develop
438	Оцеан	ocean
439	топло	warm
440	бесплатно	free
441	минут	minute
442	јака	strong
443	специал	special
444	минд	mind
445	иза	behind
446	Цлеар	clear
447	реп	tail
448	производе	produce
449	чињеница	fact
450	спаце	space
451	Чуо	heard
452	бест	best
453	сат	hour
454	боље	better
455	прави	true
456	током	during
457	сто	hundred
458	Фиве	five
459	запамтите	remember
460	корак	step
461	рано	early
462	држите	hold
463	запад	west
464	тло	ground
465	Интерест	interest
466	достићи	reach
467	Фаст	fast
468	глагол	verb
469	певати	sing
470	листен	listen
471	шест	six
472	Табле	table
473	травел	travel
474	мање	less
475	морнинг	morning
476	десет	ten
477	Симпле	simple
478	неколико	several
479	самогласник	vowel
480	ка	toward
481	рат	war
482	лаи	lay
483	против	against
484	Паттерн	pattern
485	споро	slow
486	Центар	center
487	лове	love
488	Лице	person
489	новац	money
490	служе	serve
491	појављују	appear
492	пут	road
493	Карта	map
494	Раин	rain
495	Правило	rule
496	регулишу	govern
497	повући	pull
498	хладно	cold
499	белешка	notice
500	Воице	voice
501	Енерги	energy
502	Хунт	hunt
503	вероватно	probable
504	Бед	bed
505	брат	brother
506	Егг	egg
507	вожња	ride
508	ћелија	cell
509	Верујем	believe
510	можда	perhaps
511	пицк	pick
512	изненадна	sudden
513	цоунт	count
514	Скуаре	square
515	Разлог	reason
516	дужина	length
517	представљају	represent
518	Арт	art
519	Предмет	subject
520	регион	region
521	Величина	size
522	варирају	vary
523	реше	settle
524	спеак	speak
525	Тежина	weight
526	Генерал	general
527	ице	ice
528	материја	matter
529	Цирцле	circle
530	паир	pair
531	укључују	include
532	Дивиде	divide
533	слог	syllable
534	осећао	felt
535	Гранд	grand
536	лопта	ball
537	још	yet
538	талас	wave
539	дроп	drop
540	хеарт	heart
541	пм	am
542	присутна	present
543	тежак	heavy
544	Данце	dance
545	Енгине	engine
546	позиција	position
547	рука	arm
548	виде	wide
549	Саил	sail
550	Материјал	material
551	фракција	fraction
552	шума	forest
553	седети	sit
554	раса	race
555	прозор	window
556	Сторе	store
557	Суммер	summer
558	Траин	train
559	Слееп	sleep
560	доказати	prove
561	усамљен	lone
562	нога	leg
563	вежба	exercise
564	Валл	wall
565	Цатцх	catch
566	Моунт	mount
567	жеља	wish
568	Ски	sky
569	Боард	board
570	Јои	joy
571	Винтер	winter
572	Сат	sat
573	написано	written
574	Вилд	wild
575	инструмент	instrument
576	чува	kept
577	Стакло	glass
578	трава	grass
579	крава	cow
580	Јоб	job
581	ивица	edge
582	знак	sign
583	Висит	visit
584	прошлост	past
585	Софт	soft
586	фун	fun
587	бригхт	bright
588	гас	gas
589	Временска	weather
590	месец	month
591	милиона	million
592	беар	bear
593	финисх	finish
594	срећан	happy
595	Надам	hope
596	Фловер	flower
597	облачити	clothe
598	чудно	strange
599	гоне	gone
600	Траде	trade
601	Мелоди	melody
602	Трип	trip
603	канцеларија	office
604	добијају	receive
605	ред	row
606	уста	mouth
607	тачан	exact
608	Симбол	symbol
609	дие	die
610	Најмање	least
611	невоља	trouble
612	Схоут	shout
613	осим	except
614	написао	wrote
615	семе	seed
616	тоне	tone
617	придружи	join
618	сугеришу	suggest
619	Цлеан	clean
620	Бреак	break
621	Лади	lady
622	Иард	yard
623	рисе	rise
624	бад	bad
625	ударац	blow
626	уље	oil
627	Блоод	blood
628	додирнути	touch
629	растао	grew
630	цент	cent
631	мик	mix
632	тим	team
633	жица	wire
634	трошкови	cost
635	Изгубио	lost
636	Бровн	brown
637	носе	wear
638	Гарден	garden
639	једнак	equal
640	послао	sent
641	изабрати	choose
642	пала	fell
643	фит	fit
644	флов	flow
645	Фаир	fair
646	Банк	bank
647	прикупља	collect
648	сачувати	save
649	контрола	control
650	децимал	decimal
651	ЕАР	ear
652	друго	else
653	сасвим	quite
654	поломио	broke
655	цасе	case
656	Миддле	middle
657	убити	kill
658	син	son
659	Лаке	lake
660	тренутак	moment
661	скала	scale
662	гласно	loud
663	пролеће	spring
664	посматрати	observe
665	дете	child
666	страигхт	straight
667	сугласник	consonant
668	народ	nation
669	Речник	dictionary
670	млеко	milk
671	Спеед	speed
672	метод	method
673	орган	organ
674	плате	pay
675	старост	age
676	Секција	section
677	хаљина	dress
678	Цлоуд	cloud
679	изненађење	surprise
680	Куиет	quiet
681	Стоне	stone
682	тини	tiny
683	цлимб	climb
684	Цоол	cool
685	дизајн	design
686	лоша	poor
687	лот	lot
688	експеримент	experiment
689	боттом	bottom
690	Кеи	key
691	Ирон	iron
692	Сингле	single
693	Стицк	stick
694	стан	flat
695	двадесет	twenty
696	кожа	skin
697	смиле	smile
698	бразда	crease
699	Холе	hole
700	јумп	jump
701	Баби	baby
702	осам	eight
703	Виллаге	village
704	меет	meet
705	Роот	root
706	буи	buy
707	подићи	raise
708	решити	solve
709	Метал	metal
710	без обзира да ли	whether
711	Пусх	push
712	седам	seven
713	став	paragraph
714	трећи	third
715	ће	shall
716	Хелд	held
717	Хаир	hair
718	описати	describe
719	Цоок	cook
720	спрат	floor
721	или	either
722	резултат	result
723	бурн	burn
724	хилл	hill
725	безбедан	safe
726	Цат	cat
727	век	century
728	размотрити	consider
729	Типе	type
730	Закон	law
731	бит	bit
732	Цоаст	coast
733	Цопи	copy
734	фраза	phrase
735	нем	silent
736	талл	tall
737	Санд	sand
738	земљишта	soil
739	ролна	roll
740	Температура	temperature
741	прст	finger
742	Индустрија	industry
743	вриједност	value
744	Фигхт	fight
745	лаж	lie
746	беат	beat
747	узбуђују	excite
748	природни	natural
749	Виев	view
750	осећање	sense
751	капитал	capital
752	неће	won’t
753	столица	chair
754	опасност	danger
755	Фруит	fruit
756	богат	rich
757	дебела	thick
758	војник	soldier
759	Процес	process
760	раде	operate
761	пракса	practice
762	Посебан	separate
763	тешко	difficult
764	лекар	doctor
765	молим	please
766	заштитити	protect
767	Ноон	noon
768	Цроп	crop
769	модеран	modern
770	елемент	element
771	ударити	hit
772	студент	student
773	Цорнер	corner
774	Парти	party
775	снабдевање	supply
776	чији	whose
777	лоцирати	locate
778	ринг	ring
779	карактер	character
780	инсеката	insect
781	ухваћен	caught
782	период	period
783	указују	indicate
784	Радио	radio
785	крака	spoke
786	атома	atom
787	људски	human
788	Историја	history
789	ефект	effect
790	Елецтриц	electric
791	очекују	expect
792	кост	bone
793	раил	rail
794	замислите	imagine
795	обезбедити	provide
796	слажем	agree
797	тако	thus
798	нежан	gentle
799	Жена	woman
800	капетан	captain
801	Ваљда	guess
802	неопходно	necessary
803	схарп	sharp
804	Винг	wing
805	створити	create
806	комшија	neighbor
807	Васх	wash
808	Бат	bat
809	прилично	rather
810	публика	crowd
811	кукуруз	corn
812	упоредити	compare
813	песма	poem
814	стринг	string
815	Белл	bell
816	зависе	depend
817	месни	meat
818	руб	rub
819	Тубе	tube
820	познати	famous
921	Доллар	dollar
822	поток	stream
823	страх	fear
284	призор	sight
825	танак	thin
826	Триангле	triangle
827	Планет	planet
828	пожури	hurry
829	Цхиеф	chief
830	колонија	colony
831	Цлоцк	clock
832	Мине	mine
833	Тие	tie
834	ентер	enter
835	мајор	major
836	Фресх	fresh
837	претраживање	search
838	сенд	send
839	жут	yellow
840	Гун	gun
841	дозволи	allow
842	штампа	print
843	деад	dead
844	Спот	spot
845	десерт	desert
846	одело	suit
847	струја	current
848	Лифт	lift
840	росе	rose
850	стижу	arrive
851	Мастер	master
852	Трацк	track
853	родитељ	parent
854	Схоре	shore
855	Дивисион	division
856	лист	sheet
857	супстанца	substance
858	фаворизовати	favor
859	цоннецт	connect
860	Пост	post
861	троше	spend
862	акорд	chord
863	масти	fat
864	драго	glad
865	оригинал	original
866	Схаре	share
867	Статион	station
868	тата	dad
869	хлеб	bread
870	наплаћују	charge
871	Правилно	proper
872	Бар	bar
873	Понуда	offer
874	сегмент	segment
875	роб	slave
876	Дуцк	duck
877	Инстант	instant
878	тржиште	market
879	степен	degree
880	населити	populate
881	цхицк	chick
882	Деар	dear
883	Енеми	enemy
884	одговорити	reply
885	пиће	drink
886	доћи	occur
887	Суппорт	support
888	Говор	speech
889	Природа	nature
890	домет	range
891	Стеам	steam
892	Мотион	motion
893	путања	path
894	течност	liquid
895	лог	log
896	значило	meant
897	количник	quotient
898	зуби	teeth
899	шкољка	shell
900	врат	neck
901	кисеоник	oxygen
902	шећер	sugar
903	Деатх	death
904	прилично	pretty
905	вештина	skill
906	жене	women
907	Сеасон	season
908	Решење	solution
909	магнет	magnet
910	силвер	silver
911	хвала	thank
912	грана	branch
913	Матцх	match
914	суфикс	suffix
915	посебно	especially
916	фиг	fig
917	уплашен	afraid
918	огроман	huge
919	сестра	sister
920	Стеел	steel
921	дискутовати	discuss
922	напред	forward
923	слично	similar
924	водич	guide
925	Искуство	experience
926	скор	score
927	Аппле	apple
928	купио	bought
929	водио	led
930	нагиб	pitch
931	капут	coat
932	маса	mass
933	картица	card
934	трака	band
935	конопац	rope
936	Слип	slip
937	вин	win
938	дреам	dream
939	вече	evening
940	услов	condition
941	феед	feed
942	алат	tool
943	Укупно	total
944	Басиц	basic
945	мирис	smell
946	Валлеи	valley
947	нити	nor
948	Доубле	double
949	Сеат	seat
950	наставити	continue
951	Блоцк	block
952	графикон	chart
953	шешир	hat
954	продају	sell
955	успех	success
956	цомпани	company
957	одузмите	subtract
958	Евент	event
959	Посебно	particular
960	договор	deal
961	Свим	swim
962	Термин	term
963	супротно	opposite
964	супруга	wife
965	Схое	shoe
966	раме	shoulder
967	спреад	spread
968	организовати	arrange
969	камп	camp
970	инвент	invent
971	памук	cotton
972	Борн	born
973	одредити	determine
974	куарт	quart
975	девет	nine
976	Камион	truck
977	бука	noise
978	Ниво	level
979	шанса	chance
980	окупљају	gather
981	Схоп	shop
982	Стретцх	stretch
983	бацити	throw
984	схине	shine
985	Проперти	property
986	колона	column
987	молекул	molecule
988	изаберите	select
989	погрешно	wrong
990	греи	gray
991	Репеат	repeat
992	захтевају	require
993	широка	broad
994	припремити	prepare
995	со	salt
996	нос	nose
997	плурал	plural
998	бес	anger
999	тврдња	claim
1000	Континент	continent
`.trim()
.toLowerCase()
.replace(/\s+/g, ' ')
.split(" ")

words = words.filter( (word, index) =>  {
    // proveriti da li je reč srpska:
    if(index % 3 == 1){
        // proveriti da li se isto piše ćirilicom i latinicom
        let recLatinicom = words[index+1];
        let recCirilicom = L2C(recLatinicom);

        if(word == "фоллов"){
            console.log(word, recCirilicom, recLatinicom);
        }

        if(recCirilicom.toLowerCase() !== word.toLowerCase()){
            return true;
        }
    }
})
console.log(words.length);

words = words.join("|");

