// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"wasdKeyMZ","status":true,"description":"","parameters":{}},
{"name":"AltMenuScreen","status":true,"description":"更改菜单屏幕布局。","parameters":{}},
{"name":"AddAutoToActorCommand","status":true,"description":"Add 'Auto' command on the top or bottom of Actor Command","parameters":{"commandName":"自动选取技能","autoCommandPos":"0"}},
{"name":"AltSaveScreen","status":true,"description":"更改保存/加载屏幕的布局。","parameters":{}},
{"name":"2D_Cat_BeautifulSunshineFilter","status":true,"description":"v1.0 为游戏添加绮丽的日光效果滤镜。","parameters":{"beautifulSunshineEnabled":"true","godrayGain":"0.6","godrayLacunarity":"2.5","godrayAlpha":"0.75","godrayAngle":"30","godragSpeed":"5","advancedBloomBrightness":"0.6","advancedBloomThreshold":"0.5","advancedBloomBloomScale":"0.5","advancedBloomBlur":"8","advancedBloomQuality":"8"}},
{"name":"2D_Cat_GameStartMovie","status":false,"description":"v1.2 设置游戏启动影像。","parameters":{"movieName":"default name","moviePlayDuration":"0","touchSkip":"true"}},
{"name":"2D_Cat_RegionWall","status":true,"description":"v1.0 基于区域编号自定义空气墙。","parameters":{"regionIdBlockPlayerArr":"[\"10\", \"11\"]","regionIdBlockEventsArr":"[\"10\", \"12\"]"}},
{"name":"2D_Cat_MsgBreathingPortrait","status":false,"description":"v1.1 在对话时添加带呼吸效果的多人立绘。","parameters":{}},
{"name":"2D_Cat_GlisteningWaterTile","status":true,"description":"v1.1 为地图中的水（等）图块添加波光粼粼效果。","parameters":{"water1ImgPosX":"0","water1ImgPosY":"0","water1ReferenceColor":"#2da2cd","water1RedOffset":"100","water1GreenOffset":"100","water1BlueOffset":"100","_cutLine1":"","water2ImgPosX":"0","water2ImgPosY":"144","water2ReferenceColor":"#2da2cd","water2RedOffset":"100","water2GreenOffset":"100","water2BlueOffset":"100","_cutLine2":"","glistenSpeed":"1","glistenPower":"0.3","glistenOffset":"0","glistenSize":"0.008"}},
{"name":"GALV_MessageBusts","status":true,"description":"(v.2.6) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"0","Bust Position":"0","Text X Offset":"390","Filename Append":""}},
{"name":"AlchemySystem","status":true,"description":"项目合成插件 v1.0.3","parameters":{"EnabledMenuAlchemy":"true","EnabledAlchemySwitchId":"0","EnabledGoldWindow":"true","DisplayKeyItemCategory":"false","MaxNumMakeItem":"999","MaxMaterials":"3","MakeItemSeFileName":"Heal5","MakeItemSeVolume":"90","MakeItemSePitch":"100","MakeItemSePan":"0","MenuAlchemyText":"合成","NeedMaterialText":"必要素材：","NeedPriceText":"必要経費：","TargetItemText":"生成的项目："}},
{"name":"QuestSystem","status":false,"description":"Quest任务系统 v1.0.1","parameters":{"QuestDatas":"[\"{\\\"VariableId\\\":\\\"\\\",\\\"Title\\\":\\\"\\\",\\\"IconIndex\\\":\\\"\\\",\\\"Requester\\\":\\\"\\\",\\\"Rewards\\\":\\\"\\\",\\\"Difficulty\\\":\\\"\\\",\\\"Place\\\":\\\"\\\",\\\"TimeLimit\\\":\\\"\\\",\\\"Detail\\\":\\\"\\\",\\\"HiddenDetail\\\":\\\"\\\"}\"]","EnabledQuestMenu":"true","EnabledQuestMenuSwitchId":"0","MenuCommands":"[\"orderingQuest\",\"reportedQuest\",\"all\"]","DisplayDifficulty":"true","DisplayPlace":"true","DisplayTimeLimit":"true","QuestOrderSe":"{\"FileName\":\"Skill1\",\"Volume\":\"90\",\"Pitch\":\"100\",\"Pan\":\"0\"}","QuestReportMe":"{\"FileName\":\"Item\",\"Volume\":\"90\",\"Pitch\":\"100\",\"Pan\":\"0\"}","WindowSize":"{\"CommandWindowWidth\":\"300\",\"CommandWindowHeight\":\"160\",\"DialogWindowWidth\":\"400\",\"DialogWindowHeight\":\"160\",\"GetRewardWindowWidth\":\"540\",\"GetRewardWindowHeight\":\"160\"}","Text":"{\"MenuQuestSystemText\":\"任务\",\"QuestOrderText\":\"你接受这个任务吗？\",\"QuestOrderYesText\":\"接受\",\"QuestOrderNoText\":\"不接受\",\"QuestCancelText\":\"确定要取消这个任务吗？\",\"QuestCancelYesText\":\"取消\",\"QuestCancelNoText\":\"不取消\",\"QuestReportText\":\"是否现在领取任务奖励？\",\"QuestReportYesText\":\"是\",\"QuestReportNoText\":\"否\",\"NothingQuestText\":\"没有相应任务\",\"GetRewardText\":\"接收任务奖励\",\"HiddenTitleText\":\"？？？？？？\",\"AllCommandText\":\"所有任务\",\"QuestOrderCommandText\":\"任务委托\",\"OrderingQuestCommandText\":\"正在进行的任务\",\"QuestCancelCommandText\":\"取消任务\",\"QuestReportCommandText\":\"领取任务奖励\",\"ReportedQuestCommandText\":\"已完成的任务\",\"FailedQuestCommandText\":\"失败的任务\",\"ExpiredQuestCommandText\":\"已过期的任务\",\"HiddenQuestCommandText\":\"未知的任务\",\"NotOrderedStateText\":\"未接受\",\"OrderingStateText\":\"进行中\",\"ReportableStateText\":\"可领取奖励\",\"ReportedStateText\":\"已完成\",\"FailedStateText\":\"失败\",\"ExpiredStateText\":\"已过期\",\"RequesterText\":\"【发布者】：\",\"RewardText\":\"【报酬】：\",\"DifficultyText\":\"【难度】：\",\"PlaceText\":\"【地点】：\",\"TimeLimitText\":\"【期限】：\"}","TextColor":"{\"NotOrderedStateColor\":\"#ffffff\",\"OrderingStateColor\":\"#ffffff\",\"ReportableStateColor\":\"#ffffff\",\"ReportedStateColor\":\"#ffffff\",\"FailedStateColor\":\"#ffffff\",\"ExpiredStateColor\":\"#ff0000\"}","GoldIcon":"314"}},
{"name":"SkillTreeConfig","status":false,"description":"技能树配置","parameters":{}},
{"name":"skilltree","status":false,"description":"技能树系统 v1.6.2","parameters":{"SpName":"SP","MaxSp":"9999","EnabledSkillTreeSwitchId":"0","EnableGetSpWhenBattleEnd":"true","EnableGetSpWhenLevelUp":"true","ViewMode":"wide","EnableMZLayout":"false","IconWidth":"32","IconHeight":"32","IconSpaceWidth":"32","IconSpaceHeight":"32","ViewLineWidth":"3","ViewLineColorBase":"#000000","ViewLineColorLearned":"#00aaff","ViewBeginXOffset":"24","ViewBeginYOffset":"24","ViewCursorOfs":"6","ViewRectColor":"#ffff00","ViewRectOfs":"1","LearnSkillSeFileName":"Item3","LearnSkillSeVolume":"90","LearnSkillSePitch":"100","LearnSkillSePan":"0","MenuSkillTreeText":"技能树","NeedSpText":"必要%1:","OpenedNodeText":"已习得","NodeOpenConfirmationText":"扣除%1%2学习%3么?","NodeOpenYesText":"学习","NodeOpenNoText":"不学","BattleEndGetSpText":"%1%2已入手.","LevelUpGetSpText":"%1%2已入手."}},
{"name":"SkillTree_ClassEx","status":false,"description":"Skill Tree Class Expansion v1.0.1","parameters":{}},
{"name":"SkillTree_CommonEvent","status":false,"description":"","parameters":{}},
{"name":"SkillTreeConfig_LayoutEx","status":false,"description":"技能树配置","parameters":{}},
{"name":"SkillTree_LayoutEx","status":false,"description":"技能树布局扩展 v1.2.0","parameters":{"IconXOfs":"5","OpenedImage":"","ChangeOpenedTextColor":"true","IconFontSize":"20","BackgroundImage":""}},
{"name":"TorigoyaMZ_Achievement2","status":true,"description":"成就系统 (v.1.4.0)","parameters":{"base":"","baseAchievementData":"[\"{\\\"key\\\":\\\"隐藏成就满级了！\\\",\\\"title\\\":\\\"满级了！\\\",\\\"description\\\":\\\"达到LV99\\\",\\\"icon\\\":\\\"87\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"<隐藏成就:满级了！>\\\"}\",\"{\\\"key\\\":\\\"主线成为魔女！\\\",\\\"title\\\":\\\"成为魔女！\\\",\\\"description\\\":\\\"你现在是一位成功的魔女了，早点出发吧。\\\",\\\"icon\\\":\\\"133\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"<主线,成为魔女！>\\\"}\",\"{\\\"key\\\":\\\"主线出发！\\\",\\\"title\\\":\\\"出发！\\\",\\\"description\\\":\\\"你的旅行开始了。\\\",\\\"icon\\\":\\\"82\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"<主线>\\\"}\",\"{\\\"key\\\":\\\"隐藏成就塞尔达资深玩家\\\",\\\"title\\\":\\\"塞尔达资深玩家\\\",\\\"description\\\":\\\"鸡肉味，嘎嘣脆。\\\",\\\"icon\\\":\\\"259\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"<隐藏成就>\\\"}\",\"{\\\"key\\\":\\\"隐藏成就光之战士\\\",\\\"title\\\":\\\"光之战士\\\",\\\"description\\\":\\\"在米菈罗赛杀死贾巴利耶前击杀它。\\\\n或者成功摧毁花田。\\\",\\\"icon\\\":\\\"70\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"<隐藏成就>\\\"}\",\"{\\\"key\\\":\\\"主线无民之国的公主\\\",\\\"title\\\":\\\"无民之国的公主\\\",\\\"description\\\":\\\"抱歉，这不是童话书。\\\",\\\"icon\\\":\\\"76\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"<主线>\\\"}\",\"{\\\"key\\\":\\\"隐藏成就亚梓莎真传弟子\\\",\\\"title\\\":\\\"亚梓莎真传弟子\\\",\\\"description\\\":\\\"在遇到芙兰老师前将等级升至5级。\\\",\\\"icon\\\":\\\"87\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就花田翻车的伊蕾娜\\\",\\\"title\\\":\\\"花田翻车的伊蕾娜\\\",\\\"description\\\":\\\"魔女三戒呢？是不是忘了啊？还是说你只是想看看这样选\\\\n会产生什么分支剧情吗？\\\",\\\"icon\\\":\\\"185\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就你的好奇心迟早会害死你\\\",\\\"title\\\":\\\"你的好奇心迟早会害死你\\\",\\\"description\\\":\\\"发现一个特殊迷宫，里面可能有丰厚的宝藏。\\\",\\\"icon\\\":\\\"210\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线可爱如花的女孩\\\",\\\"title\\\":\\\"可爱如花的女孩\\\",\\\"description\\\":\\\"只有一样东西，我看得一清二楚。某样物品映入我眼中。\\\\n是那个人用双手珍贵地抱在手中的——一束花。\\\",\\\"icon\\\":\\\"183\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就非洲酋长\\\",\\\"title\\\":\\\"非洲酋长\\\",\\\"description\\\":\\\"被魔法罐打死，该魔物在每次喝罐子中的水时有10%几率出现。\\\",\\\"icon\\\":\\\"63\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就同类相食\\\",\\\"title\\\":\\\"同类相食\\\",\\\"description\\\":\\\"老鼠是会吃掉老鼠的，只不过有一方不是真的老鼠。\\\",\\\"icon\\\":\\\"259\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线资金调度\\\",\\\"title\\\":\\\"资金调度\\\",\\\"description\\\":\\\"我们现在提供占卜服务，每次只需要少量的1000能量币。\\\\n——某群星行商\\\",\\\"icon\\\":\\\"307\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线缓步接近的平静之死\\\",\\\"title\\\":\\\"缓步接近的平静之死\\\",\\\"description\\\":\\\"可惜你没有遇到不死妹……\\\",\\\"icon\\\":\\\"17\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线肌肉人\\\",\\\"title\\\":\\\"肌肉人\\\",\\\"description\\\":\\\"所以说到最后也没搞明白他们叫什么是吧……\\\",\\\"icon\\\":\\\"130\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就另一种可能性\\\",\\\"title\\\":\\\"另一种可能性\\\",\\\"description\\\":\\\"那么问题来了，灾飞以后的灰色黄昏到底去哪里了呢？\\\",\\\"icon\\\":\\\"303\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线魔法师之国\\\",\\\"title\\\":\\\"魔法师之国\\\",\\\"description\\\":\\\"没事的，以后还能遇到她的……\\\",\\\"icon\\\":\\\"133\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就永恒的伙伴\\\",\\\"title\\\":\\\"永恒的伙伴\\\",\\\"description\\\":\\\"两个人要消耗两个人的食物，这很合理。\\\\n注：投影和本体之间还是存在某种共鸣的。\\\",\\\"icon\\\":\\\"303\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就尸鬼伊蕾娜\\\",\\\"title\\\":\\\"尸鬼伊蕾娜\\\",\\\"description\\\":\\\"这家伙你都打不过吗？那你还是再看看有没有支线要清再来吧。\\\",\\\"icon\\\":\\\"1\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线诚实之国\\\",\\\"title\\\":\\\"诚实之国\\\",\\\"description\\\":\\\"我说我是嫌太麻烦所以没做被沙耶推了的线你们信不信。\\\",\\\"icon\\\":\\\"146\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线老旧之国与复活的猫神大人\\\",\\\"title\\\":\\\"老旧之国与复活的猫神大人\\\",\\\"description\\\":\\\"魔女战刺不刺激啊23333\\\",\\\"icon\\\":\\\"149\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线王立瑟雷斯特利亚\\\",\\\"title\\\":\\\"王立瑟雷斯特利亚\\\",\\\"description\\\":\\\"所以说最后还是没有CG过场呢\\\",\\\"icon\\\":\\\"101\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就我们中出了个叛徒！\\\",\\\"title\\\":\\\"我们中出了个叛徒！\\\",\\\"description\\\":\\\"所以说背叛杀就是省事啊=)。\\\",\\\"icon\\\":\\\"96\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就物品之国攻城战！\\\",\\\"title\\\":\\\"物品之国攻城战！\\\",\\\"description\\\":\\\"城是吧，我给你扬了！\\\",\\\"icon\\\":\\\"64\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线物品之国\\\",\\\"title\\\":\\\"物品之国\\\",\\\"description\\\":\\\"这么大个巨人就只会平A啊！\\\",\\\"icon\\\":\\\"180\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就时间终结\\\",\\\"title\\\":\\\"时间终结\\\",\\\"description\\\":\\\"千万不要尝试与已经是既定过去的自己见面。\\\",\\\"icon\\\":\\\"220\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线回溯之叹？\\\",\\\"title\\\":\\\"回溯之叹？\\\",\\\"description\\\":\\\"以旁观者的视角，虽然代入感差了，但至少没那么刀了不是。\\\",\\\"icon\\\":\\\"220\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就阿兹卡班\\\",\\\"title\\\":\\\"分院帽：阿兹卡班！\\\",\\\"description\\\":\\\"人狠话不多，起手阿瓦达。\\\",\\\"icon\\\":\\\"1\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线刽子手\\\",\\\"title\\\":\\\"刽子手\\\",\\\"description\\\":\\\"你们是女性之敌，罪该万死。\\\\n——伊蕾娜\\\",\\\"icon\\\":\\\"291\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"隐藏成就你做了什么？\\\",\\\"title\\\":\\\"你做了什么？\\\",\\\"description\\\":\\\"你真有那么恨她吗？犯得着用阿瓦达啃大瓜吗？\\\\n（还是只是想看看这样做会怎么样？下地狱吧。——sans）\\\",\\\"icon\\\":\\\"1\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"false\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线平平无奇的伊蕾娜\\\",\\\"title\\\":\\\"所有一切平凡无奇的灰之魔女故事\\\",\\\"description\\\":\\\"接下来的剧情可能大多数人都没看过了（笑）。\\\",\\\"icon\\\":\\\"186\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"key\\\":\\\"主线忘却纪行的艾姆妮西亚\\\",\\\"title\\\":\\\"忘却纪行的艾姆妮西亚\\\",\\\"description\\\":\\\"所以说第二季什么时候出啊。\\\",\\\"icon\\\":\\\"184\\\",\\\"hint\\\":\\\"\\\",\\\"isSecret\\\":\\\"true\\\",\\\"note\\\":\\\"\\\"}\"]","baseSaveSlot":"achievement","popup":"","popupEnable":"true","popupPosition":"leftUp","popupTopY":"10","popupAnimationType":"tween","popupWait":"1.25","popupWidth":"300","popupPadding":"10","popupTitleFontSize":"20","popupTitleColor":"1","popupMessage":"成就已激活","popupMessageFontSize":"16","popupSound":"{\"soundName\":\"Saint5\",\"soundVolume\":\"90\"}","popupWindowImage":"Window","popupOpacity":"-1","titleMenu":"","titleMenuUseInTitle":"true","titleMenuUseInMenu":"true","titleMenuText":"成就","achievementMenu":"","achievementMenuHiddenTitle":"？？？？？","achievementMenuHiddenIcon":"0","advanced":"","advancedFontFace":"","advancedOverwritable":"false"}},
{"name":"TorigoyaMZ_Achievement2_AddonCategory","status":true,"description":"成就附加插件: 类别设定 (v.1.1.1)","parameters":{"base":"","categories":"[\"{\\\"name\\\":\\\"主线\\\",\\\"prefix\\\":\\\"主线\\\"}\",\"{\\\"name\\\":\\\"隐藏成就\\\",\\\"prefix\\\":\\\"隐藏成就\\\"}\"]","position":"top","maxCols":"4"}},
{"name":"SVActorPositionMZ","status":true,"description":"Change actors' position on screen at sideview battle.","parameters":{"actor1 Xpos":"1000","actor1 Ypos":"380","actor2 Xpos":"1000 + 32","actor2 Ypos":"380 + 48","actor3 Xpos":"1000 + 32 * 2","actor3 Ypos":"380 + 48 * 2","actor4 Xpos":"1000 + 32 * 3","actor4 Ypos":"380 + 48 * 3"}},
{"name":"ABMZ_EnemyHate","status":true,"description":"v1.18 敌方攻击仇恨值最高成员\n仇恨值伴随战斗行动变化","parameters":{"DisplayHateLine":"false","DebugMode":"false","DamageHateFormula":"damage","MPDamageHateFormula":"MPDamage * 5","HealHateFormula":"healPoint * 2","BuffHateFormula":"enemy.atk * 4","DebuffHateFormula":"enemy.atk * 4","StateToEnemyHateFormula":"enemy.atk * 4","StateToActorHateFormula":"enemy.atk * 4","RemoveStateHateFormula":"enemy.atk * 4","ReduceOthersHate":"false","OthersHateRateFormula":"(100 - (point / enemy.atk)) / 100","---EnemyList---":"","ShowEnemyList":"false","EnemyListX":"0","EnemyListY":"0","HateIconList":"64 5 4 16","EnemyListFontSize":"24","EnemyListLineHeight":"32","EnemyListWidth":"240","HateGaugeColor1":"2","HateGaugeColor2":"10","---HateGauge---":"","ShowHateGauge":"true","HateGaugeWidth":"180","HateGaugeX":"Graphics.boxWidth /6 * (index +1)","HateGaugeY":"320","ShowEnemyNameOnHateGauge":"true"}},
{"name":"FlyCat_EnemyLevel","status":true,"description":"给敌人加上等级、显示名字","parameters":{"等级姓名文字显示开关":"true","字体X坐标":"-40","字体Y坐标":"0","等级文字显示":"Lv"}},
{"name":"2D_Cat_BodyShakeMove","status":true,"description":"v1.0 角色移动时添加晃动身体的效果。","parameters":{"enableOnlyDash":"false"}},
{"name":"2D_Cat_CharacterShadow","status":false,"description":"v1.2 为游戏角色添加自定义的阴影。","parameters":{"shadowFileName":"Shadow1","offsetX":"0","offsetY":"0"}},
{"name":"2D_Cat_OldFilmFilter","status":false,"description":"v1.0 为游戏画面添加老电影式的滤镜效果。","parameters":{"isOldFilmEnabled":"false","oldFilmSepia":"0.3","oldFilmNoise":"0.3","oldFilmNoiseSize":"1","oldFilmScratch":"0.4","oldFilmScratchWidth":"1","oldFilmVignetting":"0.4","oldFilmVignettingAlpha":"1","oldFilmVignettingBlur":"0.3"}},
{"name":"2D_Cat_CustomAnimCursor","status":true,"description":"v1.0 自定义动画光标指针。","parameters":{"images":"[\"Cursor1\",\"Cursor2\",\"Cursor3\",\"Cursor4\"]","interval":"100"}},
{"name":"2D_Cat_DanmuSimulation","status":false,"description":"v1.2 在游戏画面模拟弹幕效果。","parameters":{}},
{"name":"WeatherOnBattle","status":true,"description":"display weather not only map but also battle","parameters":{}},
{"name":"MOG_Weather_EX","status":false,"description":"v3.40 天气粒子效果(需要素材)(已修改) 作者:Moghunter","parameters":{"Battle Weather":"false","图片文件-1":"WE_Sakura_03","图片文件-2":"WE_Sakura_02","图片文件-3":"WE_Sakura_01","图片文件-4":"","图片文件-5":"","图片文件-6":"","图片文件-7":"","图片文件-8":"","图片文件-9":"","图片文件-10":"","图片文件-11":"","图片文件-12":"","图片文件-13":"","图片文件-14":"","图片文件-15":"","图片文件-16":"","图片文件-17":"","图片文件-18":"","图片文件-19":"","图片文件-20":"","图片文件-21":"","图片文件-22":"","图片文件-23":"","图片文件-24":"","图片文件-25":"","图片文件-26":"","图片文件-27":"","图片文件-28":"","图片文件-29":"","图片文件-30":"","图片文件-31":"","图片文件-32":"","图片文件-33":"","图片文件-34":"","图片文件-35":"","图片文件-36":"","图片文件-37":"","图片文件-38":"","图片文件-39":"","图片文件-40":"","图片文件-41":"","图片文件-42":"","图片文件-43":"","图片文件-44":"","图片文件-45":"","图片文件-46":"","图片文件-47":"","图片文件-48":"","图片文件-49":"","图片文件-50":"","图片文件-51":"","图片文件-52":"","图片文件-53":"","图片文件-54":"","图片文件-55":"","图片文件-56":"","图片文件-57":"","图片文件-58":"","图片文件-59":"","图片文件-60":"","图片文件-61":"","图片文件-62":"","图片文件-63":"","图片文件-64":"","图片文件-65":"","图片文件-66":"","图片文件-67":"","图片文件-68":"","图片文件-69":"","图片文件-70":"","图片文件-71":"","图片文件-72":"","图片文件-73":"","图片文件-74":"","图片文件-75":"","图片文件-76":"","图片文件-77":"","图片文件-78":"","图片文件-79":"","图片文件-80":"","图片文件-81":"","图片文件-82":"","图片文件-83":"","图片文件-84":"","图片文件-85":"","图片文件-86":"","图片文件-87":"","图片文件-88":"","图片文件-89":"","图片文件-90":"","图片文件-91":"","图片文件-92":"","图片文件-93":"","图片文件-94":"","图片文件-95":"","图片文件-96":"","图片文件-97":"","图片文件-98":"","图片文件-99":"","图片文件-100":"","图片文件-101":"","图片文件-102":"","图片文件-103":"","图片文件-104":"","图片文件-105":"","图片文件-106":"","图片文件-107":"","图片文件-108":"","图片文件-109":"","图片文件-110":"","图片文件-111":"","图片文件-112":"","图片文件-113":"","图片文件-114":"","图片文件-115":"","图片文件-116":"","图片文件-117":"","图片文件-118":"","图片文件-119":"","图片文件-120":"","图片文件-121":"","图片文件-122":"","图片文件-123":"","图片文件-124":"","图片文件-125":"","图片文件-126":"","图片文件-127":"","图片文件-128":"","图片文件-129":"","图片文件-130":"","图片文件-131":"","图片文件-132":"","图片文件-133":"","图片文件-134":"","图片文件-135":"","图片文件-136":"","图片文件-137":"","图片文件-138":"","图片文件-139":"","图片文件-140":"","图片文件-141":"","图片文件-142":"","图片文件-143":"","图片文件-144":"","图片文件-145":"","图片文件-146":"","图片文件-147":"","图片文件-148":"","图片文件-149":"","图片文件-150":"","图片文件-151":"","图片文件-152":"","图片文件-153":"","图片文件-154":"","图片文件-155":"","图片文件-156":"","图片文件-157":"","图片文件-158":"","图片文件-159":"","图片文件-160":"","图片文件-161":"","图片文件-162":"","图片文件-163":"","图片文件-164":"","图片文件-165":"","图片文件-166":"","图片文件-167":"","图片文件-168":"","图片文件-169":"","图片文件-170":"","图片文件-171":"","图片文件-172":"","图片文件-173":"","图片文件-174":"","图片文件-175":"","图片文件-176":"","图片文件-177":"","图片文件-178":"","图片文件-179":"","图片文件-180":"","图片文件-181":"","图片文件-182":"","图片文件-183":"","图片文件-184":"","图片文件-185":"","图片文件-186":"","图片文件-187":"","图片文件-188":"","图片文件-189":"","图片文件-190":"","图片文件-191":"","图片文件-192":"","图片文件-193":"","图片文件-194":"","图片文件-195":"","图片文件-196":"","图片文件-197":"","图片文件-198":"","图片文件-199":"","图片文件-200":""}},
{"name":"Barrier","status":true,"description":"用状态实现屏障功能","parameters":{"BarrierText":"%1吸收%2的伤害，剩下%3！","BarrierBreakText":"%1被摧毁了,承受了%2的伤害！","Piercing":"true","PiercingChain":"true","BarrierAnime":"1","BarrierBreakAnime":"2"}},
{"name":"Weather(Particle)System","status":true,"description":"","parameters":{}},
{"name":"SoR_MiniMapAndScene_MZ","status":true,"description":"<Minimap and Area Map>","parameters":{"Minimap_Radius":"64","MiniMap_Position":"2","Minimap_PixelSize":"4","-----Region Settings-----":"","PaintColor_Passable":"rgba(80,80,80,1.0)","PaintColor_InPassable":"rgba(55,55,255,1.0)","RegionID_TransferPoint":"1","PaintColor_TransferPoint":"rgba(255,255,55,1.0)","RegionID_InpassableSearch":"2","Inpassable_IsolatedPoint":"true","--------Images--------":"","Minimap_FrontLayerImage":"base","MapIcon_Player":"player","MapIcon_EnemySymbol":"enemy","MapIcon_NPCSymbol":"npc","MapIcon_TreasureSymbol":"treasure","-----For Area Map-----":"","Name_AreaMapScene":"AreaMap","UseLegend_AreaMapScene":"true","CallButton_ForAreaMap":"tab","LegendPlayer_ForAreaMap":"Player","LegendEnemy_ForAreaMap":"Enemy","LegendNPC_ForAreaMap":"NPC","LegendTreasure_ForAreaMap":"Treasure","--------Othres--------":"","Padding_MinimapInnerPos":"-6","Padding_MinimapInnerRad":"8"}},
{"name":"SoR_EnemySymbolEncounter_MZ","status":true,"description":"<Symbol Encoutner System>","parameters":{"IsFollowerAttacked":"false","InvincibleTime_AfterBattle":"300","EnemySearchRange_scale":"2.0","SymbolKeepOut_RegionID":"-1","BalloonID_PlayerDetected":"1","SE_PlayerDetected":"Shot2","BalloonID_PlayerFled":"6","SE_PlayerFled":"Down1","BattleBGM_surprised":"","Use_MenuSubCommandMap":"false","InvincibleStyle_Flash":"true","InvincibleStyle_Opaque":"false","InvincibleStyle_Blend":"0"}},
{"name":"SoR_MessageExtension_MZ","status":true,"description":"<Message Window Extension>","parameters":{}},
{"name":"SoR_MapActionIndicator_MZ_Alpha","status":true,"description":"<Action Indicator on Map>","parameters":{"Indicator_Style":"0","TextColor_ActionName":"3","TextColor_ActionKey":"14","Default_DecisionKey":"","VehicleOn_text":"骑上扫帚","VehicleOn_icon":"0","VehicleOn_key":"Enter","VehicleOff_text":"下扫帚","VehicleOff_icon":"0","VehicleOff_key":"Enter"}},
{"name":"MrLiu_MiniMap","status":false,"description":"在RMMV游戏的地图界面上显示小地图","parameters":{"NotShowMiniMap":"117"}},
{"name":"AltimitMovement","status":false,"description":"Vector-based character movement and collision","parameters":{"player":"","player_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","player_circular_movement":"true","":"","followers":"","followers_distance":"1.50","followers_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","followers_circular_movement":"true","vehicles":"","vehicles_boat_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.333' />\"","vehicles_ship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.5' />\"","vehicles_airship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.25' />\"","event":"","event_character_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","event_tile_collider_list":"\"<rect x='0' y='0' width='1' height='1' />\"","presets":"[]","move_route":"","move_route_align_grid":"true","input_config":"","input_config_enable_touch_mouse":"true","input_config_gamepad_mode":"3","play_test":"","play_test_collision_mesh_caching":"false"}},
{"name":"2D_Cat_FreestyleMsgText","status":true,"description":"v1.0 自由设定对话框文字式样，包括颜色、渐变色、加粗、倾斜、轮廓、阴影、辉光等效果。","parameters":{}}
];
