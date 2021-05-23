import { Historia } from "../models/historia.model";

export class Historias{
    historiaList: Array<Historia> = [
        {
            id:'#mundoavatar',
            titulo: 'História do Mundo do Avatar',
            subtitulo:"",
            menu:[
                'História do Mundo do Avatar',
                'Datas',
                'Linha do Tempo',
                'Avatar Yangchen',
                'Avatar Kuruk',
                'Avatar Kyoshi',
                'Avatar Roku',
                'Avatar Aang',
                'Avatar Korra',
                'Segunda Era Avatar'
            ],
            corpo:`<head>
            <style type="text/css">
            h1 {
                font-size: 25px;
            }
            
            h2 {
                font-size: 22px;
            }
            
            #historia h3 {
                font-size: 20px;
                color: rgb(112, 0, 0)
            }
            
            #historia h4 {
                font-size: 16px;
                color: rgb(0, 112, 0)
            }
            
            #historia div li {
                padding: 10px;
                font-size: 14px;
                list-style-type: disc;
                list-style-position: inside;
            }
            
            p {
                font-size: 16px;
                padding: 10px;
                z-index: 1;
            }
            
            dd {
                padding-left: 50px;
                font-size: 14px;
            }
            
                        
            #navbar-example3 {
                width: 200px;
                left: 0px;
                background-color: #FFF8DC;
                border: white;
                border-style: solid;
                border-width: 1px;
                border-radius: 10%;
            }
            
            #navbar-example3 a:hover {
                background: rgb(243, 211, 151);
            }
            
            #historia {
                background-color: #FFF8DC;
                z-index: 1;
                padding-top: 20px;
                margin-left:20px;
                width: 750px
            }
            
            </style>
          </head>
            
            <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
            <h1 id="mundoavatar#História do Mundo do Avatar"> História do Mundo do Avatar</h1>
            <p>O mundo tem uma extensa história que remonta a mais de vinte mil anos. Este artigo lista eventos históricos em uma linha do tempo. A história deste mundo pode ser dividida em duas partes, a época anterior ao Avatar e a época do Avatar.
                Antes da criação do Avatar, as tartarugas-leões serviam como protetores da humanidade, permitindo aos humanos erguer cidades sobre suas carapaças. Sempre que os habitantes de suas cidades se aventuravam na Selva Espiritual, as
                criaturas conferiam ao povo a capacidade de dobrar o elemento ao qual a tartaruga estava associada; o poder deveria ser devolvido após sua reentrada na cidade.</p>
            <p> No entanto, após a criação do Avatar, as tartarugas leões renunciaram a seus papéis como protetores da humanidade, e as pessoas foram deixadas para fazer suas próprias casas espalhadas pelo mundo, o que acabou levando à divisão do
                mundo em quatro nações. O evento histórico mais notável que ocorreu durante as aventuras da Equipe Avatar foi a Guerra dos Cem Anos, o subsequente Movimento de Restauração da Harmonia, e o Projeto de Reconstrução do Sul. Uma série
                de eventos importantes ocorreram durante o tempo da Equipe Avatar de Korra, incluindo a Revolução Anti-dobra, os eventos em torno da Convergência Harmônica, a insurreição do Lótus Vermelho, a formação do Império da Terra e a Crise
                dos Evacuados. Algum tempo antes da era de Korra, o termo "moderno" foi usado para descrever como o mundo entrou em uma era industrial. </p>
            <hr>
            <h2 id="mundoavatar#Datas">Datas</h2>
            <p> Uma questão importante para o mundo Avatar é como rastrear sua extensa história. Tradicionalmente, a história pode ser registrada pelo chamado "calendário Avatar", que atribui a cada Avatar uma "era" e, em seguida, rastreia os dias
                desde seu nascimento. Por exemplo, o segundo dia da primeira visita de Kyoshi à Nação do Fogo foi "seis mil quatrocentos e cinquenta e quatro dias da Era de Kyoshi". No entanto, o calendário Avatar era considerado arcaico e trabalhoso
                para usar pela maioria das pessoas, e normalmente era usado apenas por historiadores e para rituais espirituais na época do Avatar Kyoshi.</p>
            <p>Para esclarecer a linha do tempo freqüentemente confusa no mundo Avatar, esta linha do tempo e outros artigos, em vez disso, datam os eventos como anos antes do Genocídio dos Nômades do Ar (AG) e anos depois do genocídio (DG). 0 DG
                é o ano em que o Senhor do Fogo Sozin usou o poder do Cometa de Sozin para iniciar a Guerra dos Cem Anos com o Genocídio dos Nômades do Ar e serve como uma época para o sistema de datas.</p>
            <p>Outras notas sobre o sistema: 0 DG começou no inverno, mas com a primavera chegando. Isso satisfaz tanto o calendário solar quanto o calendário lunar chinês. O cometa de Sozin chegou no final do oitavo mês (solar ou chinês) daquele
                ano, a fim de satisfazer o termo "fim do verão" usado por Roku.</p>
            <p>Aang emergiu do iceberg durante o inverno no final de 99 DG e as batalhas finais da guerra ocorreram no oitavo mês de 100 DG. Quase todos os personagens atingiram suas idades atuais em 99 DG, já que nenhum aniversário, exceto o de
                Yue, foi mostrado na série.Por exemplo, Katara completou quatorze anos em 99 DG e estava com quase quinze no final da guerra. Os únicos aniversários conhecidos que ocorreram são os de Yue, que fez dezesseis anos no início dos 100
                anos, no final do inverno, e do filho de Iroh, Lu Ten, que tinha idade desconhecida quando foi morto durante a guerra, mas cujo aniversário foi durante a primavera. Como o aniversário de Toph é desconhecido, Toph poderia ter feito
                12 anos em 99 DG ou 100 DG. Portanto, seu dado ano de nascimento (88 DG) pode ser impreciso.</p>
            <p>A datação de alguns dos eventos entre o despertar de Aang na Tribo da Água do Sul e a chegada de Aang na Tribo da Água do Norte pode ser imprecisa, pois não se sabe se o calendário solar ou o calendário lunar chinês está sendo usado.
            </p>
            <h2>Zodíaco chinês</h2>
            <p>O zodíaco chinês também está incluído. Ele gira em torno do ciclo matemático de doze animais. Os animais são listados aqui em ordem.</p>
            <table width="50%" style="padding: 20px;">
                <tbody>
                    <tr>
                        <td width="50%">
                            1. Rato<br> 2. Boi<br> 3. Tigre<br> 4. Coelho<br> 5. Dragão<br> 6. Cobra<br>
                        </td>
                        <td>
                            7. Cavalo<br> 8. Ovelha<br> 9. Macaco<br> 10. Galo<br> 11. Cachorro<br> 12. Porco<br>
                        </td>
                    </tr>
                </tbody>
            </table>

            <br>
            <h2>Nomes de era</h2>
            <p>No segundo anel do calendário de Wan Shi Tong, dezesseis nomes de era são visíveis. No entanto, não está claro como eles são usados ​​na datação do mundo Avatar.A invasão da Nação do Fogo ocorreu no Dia do Sol Negro durante a era Ri
                Wu, enquanto um eclipse anterior referido como "o dia mais escuro da história da Nação do Fogo" ocorreu na era Pei Zhi.
                <dl>
                    <dd style="padding-left: 50px; font-size: 12px;"><b>Nota: </b>Essas definições são baseadas de forma muito vaga nos caracteres, pois muitas das combinações são difíceis de entender. Alguns dos caracteres não são mais usados ​​no chinês moderno</dd>
                </dl>
                <table>
                    <tbody>
                        <tr>
                            <td width="50%">
                                1. Ri Wu <br>(氜 武, "Militares superiores")<br> 2. Chun Tai <br>(淳 泰, "Honesto ebrxaltado")<br> 3. Zhi Yuan <br>(坧 元, "Fundação ebrrigem")<br> 4. Jiong Yu <br>(烱 裕, "Abundância brilhante")<br> 5. Ri Long <br>(氜 隆,
                                "Grande prosperidade")
                                <br> 6. Yi Wen <br>(溢 文, "Cultura transbordando")<br> 7. Pei Zhi <br>(培 治. "Regra debrultivo")<br> 8. Kun De <br>(焜 徳, "virtude resplandecente")<br>
                            </td>
                            <td>
                                9. Yun Zhen <br>(氲 貞, "Lealdade florescente")<br> 10. Ru Ming <br>(渪 明, "Imerso no brilho")<br> 11. Yao Ping <br>(堯 平, "Paz do Imperador Yao")<br> 12. Yang Chong <br>(煬 崇, "Honra ardente")<br> 13. Fen An <br>(氛
                                安, "Paz nublada")
                                <br> 14. Zhang Shun <br>(漳 順, "Suave como o rio Zhang")<br> 15. Yuan Zheng <br>(垣 正, "Bastião da justiça")<br> 16. Zhuo Guang <br>(焯 光 "Luz brilhante")<br>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    O primeiro caractere nessas palavras de dois caracteres tem um radical (um dos 214 elementos ideográficos na escrita chinesa usado em combinação com a fonética para formar milhares de caracteres diferentes) que representa um dos quatro elementos e gira
                    na ordem ar, água , terra e fogo.
                    <li>气 - o radical "ar", usado em caracteres relacionados ao gás </li>
                    <li>氵 - o radical "três gotas de água", usado em caracteres relacionados ao líquido </li>
                    <li>土 - o radical "terra", usado em caracteres relacionados a sujeira, terra, mineral, etc.</li>
                    <li>火 - o radical "fogo", usado em personagens relacionados a fogo, calor, etc.</li>
                    <p>A atual era Ri Wu, por exemplo, usa o radical de ar (气). Este sistema pode, portanto, ser baseado no Ciclo de Avatar, com a era mudando com a morte de cada Avatar. Se este for o caso, Aang estaria vivendo durante a era Ri Wu
                        (militar superior), Roku durante a era Zhuo Guang (luz brilhante), Kyoshi durante a era Yuan Zheng (bastião da retidão) e assim por diante. Isso também significaria que Korra estaria vivendo durante a era Chun Tai (honesta
                        e exaltada).</p>
                    <h2>Calendário de Avatar tradicional</h2>
                    <p>
                        Os dias podem ser contados quando eles caem na vida de um Avatar, como Rangi se referindo a um dia específico como "seis mil quatrocentos e cinquenta e quatro dias da Era de Kyoshi". Este método de contagem de dias foi considerado arcaico durante a vida
                        de Kyoshi, e usado apenas por historiadores educados ou para certas cerimônias espirituais.</p>

                    <h2 id="mundoavatar#Linha do Tempo">Linha do tempo</h2>
                    <hr>
                    <h3>Antes da Era de Raava (antes de 19.829 AG)</h3>
                    <li>Tui e La se manifestam no mundo físico, assumindo formas mortais como peixes koi.</li>
                    <li>A Mãe dos Rostos dá à luz Koh, o Ladrão de Rostos; no entanto, eles se separam posteriormente. </li>
                    <li>Os primeiros humanos aparecem no mundo. </li>
                    <li>Vaatu rompe as barreiras que separam humanos e espíritos, permitindo que ambos viajem entre o mundo espiritual e o mundo mortal.</li>
                    <h3>Era de Raava (19.829 AG - 9.829 AG)</h3>
                    <br><h4>19.829 AG - Era de Raava</h4>
                    <li>Raava, o espírito de luz e paz, duela com sua contraparte, Vaatu, o espírito de escuridão e caos.</li>
                    <li>A primeira Convergência Harmônica conhecida ocorre.</li>
                    <br><h4>Data desconhecida antes de 9.850 AG</h4>
                    <li>Os humanos começam a construir suas cidades nas cascas de tartarugas-leões para se protegerem dos perigos dos Espíritos Selvagens. Sempre que as pessoas precisam se aventurar na selva para coletar alimentos, as tartarugas-leões
                        conferem aos caçadores a capacidade de controlar um dos elementos. Eventualmente, a maioria das cidades perderam contato e conhecimento da existência umas das outras, e desenvolveram culturas únicas. Alguns humanos continuam
                        a viver com os espíritos selvagens como nômades.</li>
                    <li>Um grupo de nômades humanos montou acampamento na costa do Mar de Mo Ce, onde eles encontram o espírito Lady Tienhai. Em contraste com outros espíritos, Lady Tienhai rapidamente se torna solidária com os humanos, jurando protegê-los
                        do perigo. Os nômades consequentemente se estabeleceram e fundaram uma cidade.</li>
                    <br><h4>9.850 AG - Ano da Cobra</h4>
                    <li>Wan nasce.</li>
                    <br><h4>9.848 AG - Ano das Ovelhas</h4>
                    <li>Jaya nasce.</li>
                    <br><h4>9.832 AG - Ano do Rato</h4>
                    <li>Wan rouba o elemento fogo de uma tartaruga-leão para incitar a rebelião e roubar comida da família Chou.</li>
                    <li>Wan é banido para o mundo espiritual selvagem.</li>
                    <li> Wan fez amizade com os espíritos e aprendeu a forma de dobra de fogo do Dragão Dançante.</li>
                    <br><h4>9.830 AG - Ano do Tigre</h4>
                    <li>Wan rompe o link que conecta Raava e Vaatu, no processo de liberar o caos para o mundo.</li>
                    <li>Wan e Raava começam sua jornada juntos para dominar os outros elementos.</li>
                    <br><h4>9.829 AG - Ano do Coelho</h4>
                    <li>Um grande grupo de colonos dobradores de fogo, liderados por Jaya, são mortos por espíritos das trevas durante a batalha no mundo espiritual selvagem.</li>
                    <li>A segunda convergência harmônica conhecida ocorre.</li>
                    <li> Wan derrota e bloqueia Vaatu em uma barreira elemental no oco da Árvore do Tempo.</li>
                    <li> Wan e Raava tornam-se permanentemente ligados, tornando Wan o primeiro Avatar.</li>
                    <li>Wan ordena que os espíritos retornem ao seu mundo e separa os dois reinos, selando os portais espirituais localizados nos pólos norte e sul.</li>
                    <li>No advento do Avatar, as tartarugas leões decidiram coletivamente que sua tarefa como protetoras da humanidade estava terminada e que eles não concederiam mais poderes de dobra.</li>
                    <h3>Primeira Idade do Avatar ( 9.829 AG - 171 DG)</h3>
                    <li> Antes do Avatar Kyoshi ( 9.829 AG - 312 AG)</li>
                    <br><h4> Em algum momento entre 9.829 AG e 3.829 AG</h4>
                    <li>À medida que a humanidade deixa as cidades estabelecidas nas tartarugas-leões, elas começam a entrar em contato umas com as outras. Os diferentes povos começam a guerrear uns contra os outros, forçando Wan a intervir para manter
                        a paz. Seus esforços, no entanto, têm pouco sucesso. Os conflitos violentos continuam até sua morte e depois.</li>
                    <li>O próximo Avatar nasce no ciclo após a morte de Wan.</li>
                    <li>Os nômades do ar aprendem a arte de dobrar o ar com os bisões voadores, e o Templo do Ar do Norte é construído. </li>
                    <br><h4>3.829 AG - Ano do Coelho</h4>
                    <li>O Guru Laghima dobrador de ar atinge a ausência de peso e vive seus últimos quarenta anos sem tocar o solo. Seu rival filosófico, Guru Shoken, defende que as pessoas devem seguir seu próprio caminho, livres da moral ou das
                        idéias iluministas.
                    </li>
                    <li>Em algum ponto após a morte de Laghima, as quatro nações são formadas.</li>
                    <br><h4>Em algum momento entre 9.829 AG e 345 AG</h4>
                    <li> A biblioteca de Wan Shi Tong é trazida do Mundo Espiritual para o mundo físico.</li>
                    <li> As pessoas do posterior Reino da Terra aprendem a arte de dobrar a terra com os texugos (Oma e Shu são os primeiros humanos conhecidos a usar técnicas específicas de dobra de terra), os Guerreiros do Sol aprendem a arte de
                        dobrar o fogo com os dragões e as Tribos da Água aprendem a arte de dobrar a água observando a atração da lua nas marés do oceano.</li>
                    <li>Um grupo de dobradores de água da Tribo da Água do Norte construiu uma grande cidade de gelo para unir as várias tribos que habitam a região do Pólo Norte.</li>
                    <li>Após uma agitação civil, a Tribo da Água - que originalmente estava centrada em torno do Pólo Norte - se divide em dois grupos: um ficou no Pólo Norte, enquanto o outro grupo saiu para colonizar o Pólo Sul. As relações com
                        sua tribo irmã foram posteriormente curadas, e as duas tribos se reuniam nas celebrações anuais da Lua Nova.</li>
                    <li>Um grande grupo de dobradores de água da Tribo da Água do Sul, que estava vagando pelo Reino da Terra, descobre o Pântano Nevoento e, confortável com a grande quantidade de água ali, decide ficar, formando a Tribo do Pântano
                        Nevoento. A Tribo da Água do Sul nunca fica sabendo dessa ramificação e a própria Tribo do Pântano Nevoento mais tarde esquece suas próprias origens.</li>
                    <li>A civilização do Guerreiro do Sol floresce, aprendendo a dominar o fogo com os dragões. Eles operam sob uma chefia tribal liderada por um único chefe. Eles eventualmente desaparecem na obscuridade, escondendo-se em ruínas e
                        acredita-se que estejam extintos. O resto do arquipélago das Ilhas do Fogo é influenciado por sua cultura, e os ilhéus continuam a arte de domar o fogo.</li>
                    <li>Os senhores da guerra lutam entre si por terras nas desagregadas Ilhas do Fogo. Um deles, Toz, ordena o rapto de todas as crianças da aldeia que se recusaram a prestar-lhe homenagem. As crianças nunca mais são vistas, fazendo
                        com que suas mães morram de tristeza e se tornem espíritos Kemurikage. Os Kemurikage se vingam tomando os filhos do senhor da guerra e seus homens, levando ao colapso do regime de Toz quando seus homens o abandonam por
                        medo dos espíritos das trevas.</li>
                    <li> Em algum momento, vários membros do Bhanti se aventuram de sua ilha, localizada na região sul do que mais tarde se tornaria o arquipélago da Nação do Fogo, para outras nações, onde se tornam sábios, mais notavelmente os Sábios
                        do Fogo, sábios do Reino da Terra e sábios da Tribo da Água do Norte. Enquanto os outros mantêm suas tradições espirituais, os sábios da Terra gradualmente se tornam funcionários de fato. Embora o tempo exato dessas migrações
                        seja desconhecido, a ordem dos Sábios do Fogo era considerada há "milhares" de anos na época do Avatar Aang.</li>
                    <li>Guerras de unificação das Ilhas do Fogo: Um homem consegue derrotar os senhores da guerra restantes e trazê-los à justiça, unindo assim as Ilhas do Fogo na Nação do Fogo, sob ele mesmo como o primeiro Senhor do Fogo, líder
                        dos Sábios do Fogo espirituais. O Senhor do Fogo e os Sábios do Fogo lideram uma regra espiritual, assim como os Nômades do Ar eram liderados por seus monges. Com o tempo, no entanto, o Senhor do Fogo acumulou poder político,
                        governando a Nação do Fogo como um soberano, e o cargo tornou-se hereditário, dando início à linhagem de Senhores do Fogo.</li>
                    <li>Oma funda a cidade de Omashu após a morte de seu amante Shu.</li>
                    <li>Um Avatar do passado derrota Hundun e fere mortalmente seu irmão, forçando os reis gêmeos siameses a recuar para o Mundo Espiritual. Em 171 DG, ​​Hundun afirmou que isso aconteceu milhares de anos no passado, mas ele passou
                        seu exílio no Mundo Espiritual onde o tempo passa de forma diferente.</li>
                    <li>O vasto Reino da Terra é gradualmente unido sob a autoridade política da cidade-estado de Ba Sing Se. O Rei de Ba Sing Se torna-se Rei da Terra, senhor de todos os reinos menores dentro do Reino da Terra, alguns dos quais mantêm
                        seu próprio senhorio hereditário.</li>
                    <li>A marinha da Nação do Fogo está proibida de usar cores militares no Mar do Leste durante o reinado do 22º Rei da Terra.</li>
                    <li> Avatar Salai nasce e é lembrado como um dos maiores Avatares de sua época.</li>
                    <li>Avatar Szeto nasce na Nação do Fogo. Ele se torna um oficial no governo da Nação do Fogo, põe fim ao conflito entre os nobres clãs e restaura a economia da nação, fazendo isso de dentro do sistema ao se tornar um dos administradores
                        mais eficazes de sua história. Isso leva a uma era de estabilidade política e prosperidade econômica na Nação do Fogo.</li>
                    <li>O espírito Lady Tienhai se apaixona e se casa com o governante de sua cidade. Ela assume uma forma mortal e, eventualmente, morre, despertando a raiva do espírito General Old Iron.</li>
                    <li id="mundoavatar#Avatar Yangchen"> Avatar Yangchen dos Nômades do Ar nasce no Templo do Ar Ocidental, após a morte de Szeto. Seu reinado como Avatar é pacífico, devido à sua dedicação feroz em manter o equilíbrio e servir o mundo. Em uma de suas primeiras missões,
                        ela chega a um acordo com Old Iron, parando sua violência, prometendo a ele que a cidade velha de Tienhai está abandonada. Mais tarde, ela assina um tratado com a Quinta Nação para proteger o Reino da Terra do sul. Yangchen
                        também faz vários acordos com outros espíritos, mas muitos desses pactos são quebrados por humanos após sua morte, resultando em vários espíritos que se tornam sombrios e vingativos.</li>
                    <br><h4>Em algum momento do século 4 AG</h4>
                    <li>O 40º Rei da Terra foi assassinado por Tieguai, o Imortal.</li>
                    <br><h4 id="mundoavatar#Avatar Kuruk"> 345 AG - Ano das Ovelhas</h4>
                    <li>O Avatar Yangchen morre; e o Avatar Kuruk nasce na Tribo da Água do Norte.</li>
                    <li>Nasce Jianzhu.</li>
                    <li>Kelsang nasce.</li>
                    <br><h4>Algum dia entre 345 AG e 312 AG</h4>
                    <li>Quando Kuruk tenta dominar o estado Avatar pela primeira vez, ele destrói acidentalmente uma ilha inteira; não houve vítimas fatais.</li>
                    <li>Kuruk luta contra vários espíritos das trevas, incluindo o Heartwalker da Montanha Yaoping e os espíritos da enguia-fênix que vivem sob a Ilha Ma'inka. Esses conflitos corrompem espiritualmente Kuruk e contribuem para sua depressão
                        duradoura, resultando em ele negligenciando muitas de suas funções habituais.</li>
                    <li>Avatar Kuruk tenta matar Koh, o Ladrão de Rosto, como vingança por ter roubado o rosto de sua noiva Ummi. É confuso colocar esse evento em ordem cronológica, como se a descrição de Koh do evento fosse considerada literalmente,
                        teria acontecido 800-700 AG, mais de trezentos anos antes do nascimento de Kuruk. No entanto, sabe-se que o tempo passa de forma diferente no Mundo Espiritual.</li>
                    <h3 id="mundoavatar#Avatar Kyoshi"> A Era de Kyoshi (312 - 82 AG) </h3>
                    <br><h4>312 AG - Ano do Dragão</h4>
                    <li>Avatar Kuruk morre; O Avatar Kyoshi do Reino da Terra é filho de Jesa e Hark.</li>
                    <li>Após a morte de Kuruk, o Reino da Terra sofre de crescente instabilidade, à medida que os piratas da Quinta Nação comandados por Tulok atacam sua costa sul e o levante Pescoço Amarelo eclode.</li>
                    <li>Rangi é filho de Hei-Ran e Junsik.</li>
                    <li>Yun nasce.</li>
                    <li>Aoma é filho do capitão da vila de Yokoya.</li>
                    <li>Nasce Suzu.</li>
                    <li>Jae nasce.</li>
                    <li>Mirai nasce.</li>
                    <br><h4>Em algum momento entre 312 AG e 296 AG</h4>
                    <li>Junsik morre.</li>
                    <li>Lady Wumei morre. Seu marido, Lu Beifong, fica arrasado com sua morte e, conseqüentemente, cai sob a influência do camareiro Hui</li>
                    <br><h4>310 AG - Ano do Cavalo</h4>
                    <li>Nasce Te Sihung.</li>
                    <br><h4>307/306 AG</h4>
                    <li>Kyoshi é deixada sob os cuidados dos moradores de Yokoya pelos pais. Depois que o eles partiram, os moradores imediatamente renegaram o negócio e jogaram Kyoshi nas ruas. Viramdo sem-teto, ela quase morre de fome.</li>
                    <br><h4>305 AG - Ano do Porco</h4>
                    <li>Kyoshi é salvo da fome por Jianzhu e Kelsang. Ela faz o teste Avatar, mas sai antes de sua conclusão.</li>
                    <br><h4>304 AG - Ano do Rato</h4>
                    <li>Jianzhu derrota os Pescoços Amarelos na Batalha da passagem de Zhulu e enterra cerca de 5.000 rebeldes vivos, encerrando sua rebelião. O restante dos Pescoços Amarelos se escondem, enquanto seu líder Xu Ping An é aprisionado
                        secretamente para que a Nação do Fogo possa estudar sua habilidade de gerar raios.</li>
                    <br><h4>Em algum momento entre 305 e 296 AG</h4>
                    <li>Uma grande frota fragmentada da Quinta Nação é destruída por Kelsang. Tulok se torna o líder indiscutível dos piratas da Quinta Nação.</li>
                    <li>O líder da quinta nação, Tulok, é sucedido por sua filha Tagaka. Ela prova ser uma rainha pirata excepcionalmente capaz, ganhando uma reputação terrível e fazendo da Quinta Nação a frota pirata mais poderosa do mundo. Em algum
                        ponto, ela derrota a marinha do Reino da Terra em batalha e mata o último almirante de Ba Sing Se em um duelo, deixando a posição vaga.</li>
                    <li>As guerras de segredos de Ba Sing Se e punhais: vários príncipes da família real do Reino da Terra rivalizavam secretamente pelo trono em Ba Sing Se. Muitos assassinos foram contratados para remover potenciais rivais, um deles
                        sendo Amak, que matou sete membros importantes da família real por ordem de um príncipe menor do Reino da Terra.</li>
                    <br><h4>299 AG - Ano do Cavalo</h4>
                    <li>Jesa e Hark morrem de febre.</li>
                    <br><h4>298 AG - Ano da Cabra</h4>
                    <li>Jianzhu e Kelsang identificam falsamente Yun como o Avatar durante sua viagem à vila de Makapu.</li>
                    <br><h4>296 AG - Ano do Galo</h4>
                    <li>O bando de piratas do Fade-Red Devils é completamente exterminado pela Quinta Nação.</li>
                    <li> Queda da Quinta Nação: Yun e seus companheiros, principalmente Kyoshi, derrotam os piratas da Quinta Nação. Amak é morto durante o encontro, e Tagaka é preso. A identidade do Avatar é consequentemente posta em dúvida, já que
                        Kyoshi exibiu poderes de dobra extremamente incomuns.</li>
                    <li>Para resolver a crise de sucessão do Avatar, Jianzhu consulta o Padre Glowworm, após o que Kyoshi é revelado como o verdadeiro Avatar. Yun é sacrificado por Jianzhu ao espírito malévolo e acredita-se que esteja morto. Consequentemente,
                        Kyoshi se recusa a aceitar Jianzhu como seu professor. Kelsang é morto por Jianzhu durante sua tentativa para proteger Kyoshi, embora ela consiga escapar com Rangi, fugindo de Jianzhu para o interior do Reino da Terra,
                        onde eles se juntam à Companhia de Ópera Voadora.</li>
                    <li>Xu Ping An é libertado pela sociedade de flor de outono e planeja restaurar os Pescoços Amarelos, embora ele logo seja morto por Kyoshi em um duelo lei tai.</li>
                    <li>Lek é morto durante o sequestro de Rangi.</li>
                    <li>Hui convoca um conclave de sábios do Reino da Terra para discutir se Jianzhu está apto para servir como guardião do Avatar. Muitos sábios, incluindo Hui, são mortos em um envenenamento em massa orquestrado por Jianzhu.</li>
                    <li>Jianzhu é morto por Yun ao confrontar Kyoshi em Qinchao.</li>
                    <li>Kyoshi busca refúgio no Templo do Ar do Sul e recebe uma visão de Kuruk.</li>
                    <li>Kyoshi derrota as frotas fragmentadas da Quinta Nação antes que eles possam se juntar.</li>
                    <li>Kyoshi derrota um bando de daofei conhecido como Garras Esmeraldas, que estava aterrorizando a província de Gintong.</li>
                    <br><h4>295 AG - Ano do Cachorro</h4>
                    <li>Metade dos frangos suínos da Nação do Fogo são abatidos devido à doença.</li>
                    <li>Kyoshi derruba a Tríade da Asa Dourada e os corruptos oficiais da paz do Capitão Li no Anel Inferior de Ba Sing Se.</li>
                    <li>O senhor do Fogo Zoryu convida Kyoshi para a Nação do Fogo para celebrar o Festival de Szeto.</li>
                    <li>Yun mantém convidados como reféns no Palácio Real da Nação do Fogo e mata Lu Beifong e o Chanceler Dairin.</li>
                    <li>Uma grande rixa irrompe entre os clãs Saowon e Keohso na cidade ao norte Chung-Ling.</li>
                    <li>O Lorde do Fogo Zoryu consegue uma isca para Yun para confessar a conspiração com o clã Saowon. O clã imediatamente cai em desgraça, e Lady Huazo e Chaejin são colocados em prisão domiciliar. A guerra camélia-peônia chega ao
                        fim.
                    </li>
                    <li>Kyoshi confronta Yun em Yokoya. A mansão do Avatar é destruída na batalha que se seguiu, e Yun é morto.</li>
                    <li> Em algum momento entre 295 e 270 AG</li>
                    <li>Kyoshi adota totalmente a península de Yokoya como sua terra natal e treina os primeiros guerreiros Kyoshi.
                    </li>
                    <br><h4>270 AG - Ano do Porco</h4>
                    <li>Avatar Kyoshi mata o senhor da guerra Chin e separa Yokoya do continente, fundando a Ilha Kyoshi; a Guerra de Chin, o Conquistador, termina com a vitória do governo do Reino da Terra. O 46º Rei da Terra restaura seu reinado
                        sobre todo o Reino da Terra, embora a agitação civil começa a se espalhar no continente. O dia da morte de Chin é lembrado como o Dia do Avatar na Vila Chin e o Dia Kyoshi na Ilha Kyoshi.</li>
                    <li>Algum tempo depois desse evento, um levante camponês em Ba Sing Se estimula Kyoshi a criar o Dai Li. No processo, o Reino da Terra é transformado em uma monarquia constitucional.</li>
                    <br><h4>Em algum momento entre 270 e 82 AG</h4>
                    <li>A filha de Kyoshi, Koko, a sucede como governadora da Ilha de Kyoshi. </li>
                    <h3>Prelúdio da Guerra dos Cem Anos</h3>
                    <br><h4 id="mundoavatar#Avatar Roku">(82-0 AG) 82 AG - Ano do Cavalo</h4>
                    <li>Avatar Kyoshi morre aos 230 anos; Nasce o Avatar Roku da Nação do Fogo.</li>
                    <li>O Senhor do Fogo Sozin nasce no mesmo dia que Roku.</li>
                    <br><h4>66 AG - Ano do Cão</h4>
                    <li>Avatar Roku é confirmado como Avatar em seu décimo sexto aniversário, e deixa o Nação do Fogo para dominar os elementos.</li>
                    <br><h4>58 AG - Ano do Cavalo</h4>
                    <li>O senhor do Fogo Sozin sobe ao trono, após a morte de seu pai.</li>
                    <br><h4>55 AG - Ano do Galo</h4>
                    <li>Avatar Roku destrói o Templo do Fogo no solstício de inverno enquanto está preso no estado Avatar durante seu treinamento.</li>
                    <br><h4> 54 AG - Ano do Cachorro</h4>
                    <li> Avatar Roku retorna à Nação do Fogo após doze anos de viagem e se casa com Ta Min, uma nobre da Capital.</li>
                    <br><h4>50 AG - Ano do Tigre</h4>
                    <li>Nasce o Guru Pathik.</li>
                    <br><h4>37 AG - Ano do Coelho</h4>
                    <li>Avatar Roku descobre as primeiras colônias da Nação do Fogo no Reino da Terra e confronta o Senhor do Fogo Sozin. </li>
                    <li>Roku e Sozin se envolvem na batalha, resultando na destruição de parte do Palácio Real da Nação do Fogo por Roku.</li>
                    <br><h4 id="mundoavatar#Avatar Aang"> 12 AG - Ano do Dragão</h4>
                    <li>Avatar Roku é morto enquanto lutava contra uma erupção vulcânica aos setenta anos.</li>
                    <li>Nasce o Avatar Aang dos Nômades do Ar.</li>
                    <li>Nasce Bumi de Omashu.</li>
                    <br><h4>antes de 2 - 1 AG</h4>
                    <li> Aang recebe suas tatuagens após inventar a técnica scooter de ar , tornando-o o mais jovem mestre em dobra de ar na história registrada.</li>
                    <br><h4>2 - 1 AG</h4>
                    <li> Aang e seu excêntrico amigo de infância Bumi deslizavam pelo sistema de entrega de Omashu para se divertirem.</li>
                    <li>Aang tocou com seu amigo Kuzon na Nação do Fogo.</li>
                    <h3> A Guerra dos Cem Anos (0 - 100 DG)</h3>
                    <br><h4>0 AG - Ano do Dragão</h4>
                    <li>O Avatar Aang é confirmado como Avatar aos doze anos, quatro anos antes do normal, porque os monges temiam uma possível guerra. Os monges decidiram enviar Aang ao Templo do Ar Oriental para continuar seu treinamento. Atormentado
                        e confuso com seu destino, ele foge do Templo do Ar do Sul com seu bisão voador, Appa. Ao ser pego por uma tempestade e ser puxado para baixo da água, Aang entra no estado Avatar e se envolve no gelo perto do Pólo Sul.</li>
                    <li>O Senhor do Fogo Sozin começa o que seria a Guerra dos Cem Anos atacando as outras nações. Ele usa o poder de um cometa, mais tarde renomeado como Cometa de Sozin em sua homenagem, para lançar um ataque genocida aos Nômades
                        do Ar em uma tentativa de matar o Avatar. Todos os nômades do ar são mortos durante o ataque inicial ou mais tarde, sendo caçados e executados, exceto por Aang.</li>
                    <li>A Nação do Fogo lança uma invasão coordenada massiva do Reino da Terra, lenta mas seguramente avançando através do continente ao longo dos próximos cem anos.</li>
                    <li>Azulon nasce.</li>
                    <br><h4> 15 DG - Ano da Cabra</h4>
                    <li>Em uma tentativa de invasão do Norte, a Marinha do Fogo e a Tribo da Água do Norte se engajam na batalha, terminando com a vitória da Tribo da Água do Norte e a captura de soldados e uniformes da Marinha do Fogo.</li>
                    <br><h4>19 DG - Ano do Porco</h4>
                    <li> Kanna nasceu na Tribo da Água do Norte.</li>
                    <br><h4>20 DG - Ano do Rato</h4>
                    <li>Senhor do Fogo Sozin morre aos 102 anos; Senhor do Fogo Azulon ascende ao trono.</li>
                    <li>O herbalista nasceu no Reino da Terra. </li>
                    <br><h4>39 DG - Ano da Cabra</h4>
                    <li>Nasce Jeong Jeong da Nação do Fogo.</li>
                    <br><h4>Antes dos 40 anos</h4>
                    <li> A Nação do Fogo inicia ataques contra a Tribo da Água do Sul, destruindo sua cidade e capturando sistematicamente sua população de dobra de água.</li>
                    <br><h4>64 DG - Ano do Macaco</h4>
                    <li>Ursa nasce, filho de Jinzuk e Rina; a filha do Avatar Roku</li>
                    <br><h4>Antes de 82 DG</h4>
                    <li>Nasce Kuei do Reino da Terra. Aos quatro anos, seu pai morre e Kuei se torna o 52º Rei da Terra. Por causa da juventude do novo Rei da Terra, Long Feng é nomeado regente de Ba Sing Se, e se torna o conselheiro de maior confiança
                        do Rei da Terra. Aproveitando sua posição, Long Feng suprime o conhecimento da guerra do jovem príncipe e assume o controle total da cidade.</li>
                    <br><h4>82 DG - Ano do Tigre</h4>
                    <li>Nasce Hahn, da Tribo da Água do Norte.</li>
                    <br><h4>83 DG - Ano do Coelho</h4>
                    <li>O príncipe Zuko é filho do príncipe Ozai e da princesa Ursa.</li>
                    <li>Nasce Jet do Reino da Terra.</li>
                    <li>Yin nasce.</li>
                    <br><h4>84 DG - Ano do Dragão</h4>
                    <li>Princesa Yue é filha do chefe Arnook da Tribo da Água do Norte e sua esposa. Uma criança doente, Yue é curada pelo Espírito da Lua, Tui, por ter um pouco de seu espírito vital infundido dentro dela.</li>
                    <li>Sokka é filho do chefe Hakoda e Kya da Tribo da Água do Sul.</li>
                    <li> Kori Morishita é filho do prefeito Morishita e sua esposa.</li>
                    <br><h4>85 DG - Ano da Cobra</h4>
                    <li>Filho de Ukano e Michi nasceu Mai da Nação do Fogo.</li>
                    <li> Princesa Azula é filha do príncipe Ozai e da princesa Ursa.</li>
                    <li>Katara é filha do Chefe Hakoda e Kya da Tribo da Água do Sul.</li>
                    <li>Ho Tun nasce.</li>
                    <br><h4>87 DG - Ano da Cabra ou 88 DG - Ano do Macaco</h4>
                    <li>Nasce Moo-Chee-Goo-Chee-La-Poo-Chee Terceiro.</li>
                    <li>Nasce Teo, filho do mecanicista.</li>
                    <li>Toph Beifong é filho de Lao Beifong e Poppy Beifong da Gaoling.</li>
                    <br><h4>92 DG - Ano do Rato</h4>
                    <li>Penga nasce.</li>
                    <br><h4>94 DG - Ano do Tigre</h4>
                    <li>Iroh começa seu lendário Cerco de Ba Sing Se.</li>
                    <li>Os invasores do sul atacam a Tribo da Água do Sul em uma tentativa de matar o último dobrador de água do sul. A esposa do chefe Hakoda, Kya, se sacrifica para salvar Katara, de oito anos, a verdadeira última dobradora de água
                        da Tribo da Água do Sul.</li>
                    <br><h4>95 DG - Ano do Coelho</h4>
                    <li>Iroh rompe a parede externa de Ba Sing Se.</li>
                    <li>O filho de Iroh, Lu Ten, é morto no cerco de Ba Sing Se, fazendo com que Iroh encerrasse a operação após seiscentos dias.</li>
                    <li>Princesa Ursa conspira com o príncipe Ozai para matar Senhor do Fogo Azulon a fim de salvar Zuko e fazer Ozai Senhor do Fogo. Com a morte de Azulon aos 95 anos, Ozai o sucede como Senhor do Fogo e Ursa é banido da Capital da
                        Nação do Fogo.</li>
                    <li>O Príncipe Zuko se torna o Herdeiro do trono da Nação do Fogo.</li>
                    <br><h4>97 DG - Ano da Cobra</h4>
                    <li>O Príncipe Zuko é banido para capturar o Avatar após um Agni Kai com seu pai, o Senhor do Fogo Ozai. Ele está acompanhado por seu tio, Iroh.</li>
                    <li>Ursa, como "Noriko", casa-se com Ikem, como "Noren", em Hira'a.</li>
                    <br><h4>98 DG - Ano do Cavalo</h4>
                    <li>Tom-Tom, da Nação do Fogo, é filho de Ukano e Michi.</li>
                    <br><h4>99 DG - Ano da Cabra</h4>
                    <li>Avatar Aang é despertado do iceberg após cem anos por Katara e Sokka.</li>
                    <li>O Príncipe Zuko localiza o Avatar e começa a caçá-lo após sua primeira tentativa de prendê-lo falhar e causar muitos danos à aldeia da Tribo da Água do Sul.</li>
                    <li>Há uma fuga maciça em uma plataforma de prisão para dobradores de terra, e todos os presos escapam.</li>
                    <li>Avatar Roku informa Aang sobre o solstício de inverno que o cometa de Sozin chegará no final do verão, dizendo a ele que Ozai deve ser derrotado antes do tempo de sua chegada.</li>
                    <li>Os Sábios do Fogo são acusados ​​de traição e presos pelo Almirante Zhao.</li>
                    <li>Avatar Aang começa seu treinamento de dobra de água com Katara.</li>
                    <li>A vila de Gaipan é destruída pelos Lutadores da Liberdade de Jet e os moradores são evacuados.</li>
                    <br><h4>100 DG - Ano do Macaco</h4>
                    <li>Avatar Aang começa seu treinamento de dobra de fogo com Jeong Jeong, no entanto, seu treinamento termina prematuramente quando o Almirante Zhao ataca o acampamento de Jeong Jeong.</li>
                    <li>A Nação do Fogo é repelida na batalha pelo Templo do Ar do Norte, mas eles adquirem um balão de guerra experimental no rescaldo.</li>
                    <li> A Nação do Fogo invade a Tribo da Água do Norte, mas é repelida por Aang depois que ele se fundiu temporariamente com o Espírito do Oceano, La, que ficou furioso com o Almirante Zhao por matar o Espírito da Lua, Tui.
                    </li>
                    <li>La aprisiona o almirante Zhao na névoa das almas perdidas em retaliação pela morte de Tui.</li>
                    <li>Princesa Yue sacrifica sua vida para se tornar o Espírito da Lua. Isso é possível devido ao pequeno parte de espírito que Tui infundiu dentro dela para trazê-la à vida como ela era um bebê.</li>
                    <li>Membros da Tribo da Água do Norte partiram para a Tribo da Água do Sul para ajudá-los e reconstruir, inicializando o Projeto de Reconstrução do Sul.</li>
                    <li>A Princesa Azula da Nação do Fogo recruta Mai e Ty Lee para caçar o Avatar.</li>
                    <li>Omashu cai sob a ocupação da Nação do Fogo; A resistência de Omashu é formada.</li>
                    <li>Avatar Aang começa seu treinamento de dobra de terra com Toph.</li>
                    <li>Os piratas do rio Jiang, ajudados por Katara, romperam o bloqueio da Nação do Fogo em uma vila no sul do Reino da Terra, permitindo que entregassem remédios a uma comunidade isolada.</li>
                    <li>Uma tentativa de romper a Parede Externa de Ba Sing Se, usando uma furadeira gigante e liderada pela Princesa Azula, falha.</li>
                    <li>Ba Sing Se cai nas mãos da Nação do Fogo por meio de um golpe de estado interno liderado pela Princesa Azula, assistida por seus amigos Mai e Ty Lee, e o Dai Li.</li>
                    <li>Avatar Aang é morto por Azula, e posteriormente trazido de volta à vida por Katara com água espiritual.</li>
                    <li>O prisioneiro de alta segurança General Iroh é preso pela Princesa Azula e o Dai Li.</li>
                    <li>O operativo de Dai Li Joo Dee é nomeado Administrador Burocrático Supremo de Ba Sing Se pela Princesa Azula.</li>
                    <li>A Nação do Fogo estabelece o controle administrativo da Passagem da Serpente, estabelecendo uma ponte fortificada.</li>
                    <li>Primeiro dia do oitavo mês: Um ataque à Capital da Nação do Fogo liderado por Avatar Aang durante um eclipse solar em uma tentativa de derrotar o Senhor do Fogo falha, deixando muitos dos inimigos do Senhor do Fogo presos.
                    </li>
                    <li>Durante o eclipse, o Rei Bumi liberta Omashu da Nação do Fogo.</li>
                    <li>General Iroh se liberta da Prisão da Capital da Nação do Fogo.</li>
                    <li>O príncipe Zuko trai a Nação do Fogo e se junta à missão do Avatar para expulsar o Senhor do Fogo Ozai.</li>
                    <li>Avatar Aang começa seu treinamento de dobra de fogo com o Príncipe Zuko; Zuko e Aang partem para a cidade dos Guerreiros do Sol para aprender a dominar o fogo com Ran e Shaw.</li>
                    <li>Algum tempo depois do primeiro dia do oitavo mês: o cometa de Sozin retorna, aumentando os poderes dos dobradores de fogo cem vezes.</li>
                    <li>O Senhor do Fogo Ozai se coroou o Rei Fênix e nomeou Azula como Senhora do Fogo.</li>
                    <li>A Ordem do Lótus Branco, liderada por Grand Lotus Iroh, liberta Ba Sing Se do governo da Nação do Fogo, efetivamente libertando todo o Reino da Terra.</li>
                    <li>Aang conhece uma antiga tartaruga-leão, o ser vivo mais antigo do mundo, e aprende a arte perdida de dobra de energia.</li>
                    <li>Príncipe Zuko e Katara derrotam Azula durante sua coroação como Senhora do Fogo no Cometa-Enhanced Agni Kai. Isso faz com que Azula perca sua sanidade restante.</li>
                    <li>Utilizando o cometa de Sozin, Ozai lança um grande ataque ao Reino da Terra com sua armada de dirigíveis da Nação do Fogo em uma tentativa de encerrar a guerra de forma decisiva com uma demonstração de força e destruição.</li>
                    <li>Um ataque lançado por Toph, Sokka e Suki consegue destruir a armada enquanto Aang luta contra Ozai.</li>
                    <li>Avatar Aang derrota Ozai através do uso do Estado Avatar e usa a dobra de energia para retirar sua dobra de fogo.</li>
                    <li>Rei Phoenix Ozai está preso por vários crimes de guerra.</li>
                    <li>O Príncipe Zuko ascende ao trono como Senhor do Fogo, jurando às nações que dedicará seu governo à reconstrução do mundo com a ajuda do Avatar.</li>
                    <h3 id="mundoavatar#Pós-Guerra dos Cem Anos">Pós-Guerra dos Cem Anos (100 AG - 171 DG)</h3>
                    <br><h4>100 DG - Ano do Macaco</h4>
                    <li>O Movimento de Restauração da Harmonia é lançado para remover as colônias da Nação do Fogo do Reino da Terra.</li>
                    <br><h4>101 DG - Ano do Galo</h4>
                    <li>Toph funda a Beifong Metalbending Academy. </li>
                    <li>Em resposta ao Movimento de Restauração da Harmonia, Kori Morishita cria a Resistência Yu Dao e tenta assassinar o Senhor do Fogo Zuko.</li>
                    <li>Uma crise em Yu Dao faz com que o Senhor do Fogo Zuko retire seu apoio do Movimento de Restauração da Harmonia, ameaçando mergulhar o mundo na guerra novamente.</li>
                    <li>Avatar Aang evita a guerra, com a noção de que as nações podem viver juntas em paz.</li>
                    <li>Aang forma os Acólitos do Ar a partir do Fã Clube Oficial Avatar Aang.</li>
                    <br><h4>102 DG - Ano do Cachorro</h4>
                    <li>Zuko, com a ajuda da Equipe Avatar e de sua irmã, Azula, embarca em uma busca por Ursa, que os leva a sua nova vida em Hira'a.</li>
                    <li>Yu Dao e outras colônias da Nação do Fogo criam um governo conjunto de representantes da Nação do Fogo e do Reino da Terra, iniciando a progressão em direção à formação da República das Nações Unidas.</li>
                    <li>A Nova Sociedade Ozai se reúne em uma tentativa de derrubar o Senhor do Fogo Zuko.</li>
                    <li>Ursa retorna ao Palácio Real da Nação do Fogo pela primeira vez desde seu exílio.</li>
                    <li>Crianças na Capital da Nação do Fogo estão sendo sequestradas por impostores Kemurikage.</li>
                    <li> Katara e Sokka retornam ao Pólo Sul após dois anos.</li>
                    <li>Mestre Pakku funda uma escola de dobra de água na Tribo da Água do Sul.</li>
                    <li>Um grupo de nacionalistas da Tribo da Água do Sul liderado por Gilak tenta erradicar toda a presença estrangeira na Tribo da Água do Sul.</li>
                    <li>Gilak é morto.</li>
                    <br><h4>Entre 102 - 103 DG</h4>
                    <li>A cidade de Cranefish é estabelecida na costa oeste do Reino da Terra e cresce rapidamente. As tensões começam a aumentar entre dobradores e não dobradores, resultando na revolta supremacista de Liling, que é derrotada pela
                        Equipe Avatar e os guardas não dobradores da Refinaria de Fogo Terrestre.</li>
                    <br><h4>Entre 102 - 119 DG</h4>
                    <li>Aang e Katara se casam e têm dois filhos: Bumi, um não dobrador, e Kya, uma dobradora de água.</li>
                    <li>Aang e Zuko estabelecem a República das Nações Unidas, uma quinta nação com a Cidade da República como sua capital.</li>
                    <li>A Nação do Fogo presenteia uma grande estátua de Aang para a Cidade da República como um símbolo de paz e boa vontade.</li>
                    <li>Toph viaja pelo mundo para ensinar dobra de metal.</li>
                    <br><h4>115 DG - Ano do Porco</h4>
                    <li>Gommu nasce.</li>
                    <br><h4>119 AG - Ano do Coelho</h4>
                    <li>Nasce Tenzin, o filho mais novo de Aang e Katara e o único dobrador de ar entre seus filhos.</li>
                    <li>Nasce o Lightning Bolt Zolt.</li>
                    <br><h4>120 DG - Ano do Dragão</h4>
                    <li>Lin Beifong nasceu, filho de Toph e Kanto.</li>
                    <li>Nasce Hiroshi Sato.</li>
                    <li>Na mesma época, o comerciante de repolho fundou a Cabbage Corp.</li>
                    <br><h4>126 DG - Ano do Cachorro</h4>
                    <li>Suyin Beifong, meia-irmã de Lin, nasce de pai desconhecido.</li>
                    <br><h4>128 DG - Ano do Rato</h4>
                    <li>Yakone é levado a julgamento por seus crimes contra Ciadade Republica. Depois de tentar uma fuga, ele perde sua inclinação para Avatar Aang.</li>
                    <br><h4>130 DG - Ano do Tigre</h4>
                    <li>Nasce Shiro Shinobi.</li>
                    <li>Saikhan nasce.</li>
                    <li>Noatak, o filho mais velho de Yakone e sua esposa e mais tarde conhecido como o revolucionário Amon, nasce.</li>
                    <br><h4>133 DG - Ano da Cobra</h4>
                    <li>Nasce Tarrlok, o filho mais novo de Yakone.</li>
                    <br><h4>135 DG - Ano da Cabra</h4>
                    <li>Pema nasce.</li>
                    <li>Nasce o manifestante igualista.</li>
                    <br><h4>138 DG - Ano do Cachorro</h4>
                    <li>Hiroshi Sato fundou a Future Industries após inventar o Satomobile.</li>
                    <br><h4>142 DG - Ano do Tigre</h4>
                    <li>Toph renuncia ao cargo de Chefe de Polícia.</li>
                    <br><h4>144 DG - Ano do Dragão</h4>
                    <li>Noatak aos 14 anos, foge após defender Tarrlok de Yakone e dobrar o sangue de ambos.</li>
                    <br><h4>149 DG - Ano do Galo</h4>
                    <li>Ryu nasce.</li>
                    <br><h4>151 DG - Ano do Porco</h4>
                    <li>Tonraq, herdeiro aparente da chefia da Tribo da Água do Norte, lidera um batalhão contra a invasão de sua casa por bárbaros. Ele destrói uma floresta de espíritos no processo, resultando em seu banimento pelo chefe tribal,
                        seu pai.</li>
                    <li>Unalaq assume a posição de Tonraq como herdeiro aparente.</li>
                    <li>Tonraq se estabelece no Pólo Sul.</li>
                    <br><h4>152 DG - Ano do Rato</h4>
                    <li> Mako nasceu, filho de San e Naoki.</li>
                    <li> Asami Sato nasceu, filho de Hiroshi Sato e Yasuko.</li>
                    <br><h4 id="mundoavatar#Avatar Korra">153 DG - Ano do Boi</h4>
                    <li>Avatar Aang morre; O Avatar Korra da Tribo da Água do Sul é filho de Tonraq e Senna.</li>
                    <li>Depois de viajar ao redor do mundo e se tornar uma curandeira renomada por seus próprios méritos, Kya retorna à Tribo da Água do Sul para cuidar de sua mãe em luto.</li>
                    <li>Nasce Hong Li.</li>
                    <br><h4>154 DG - Ano do Tigre</h4>
                    <li>Nasce Bolin, o filho mais novo de San e Naoki.</li>
                    <br><h4>155 DG - Ano do Coelho</h4>
                    <li>Desna e Eska são filhos de Unalaq e Malina.</li>
                    <li>A Ordem do Lótus Branco visita a família de Korra no Pólo Sul e confirma a afirmação de Korra de ser o Avatar.</li>
                    <br><h4>158 DG - Ano do Cavalo</h4>
                    <li>Yasuko, esposa de Hiroshi Sato, é assassinada durante um assalto à propriedade de Sato pela Tríade Agni Kai.</li>
                    <li>Nasce Skoochy.</li>
                    <li>Zaheer, Ming-Hua, Ghazan e P'Li tentam sequestrar Korra, mas são apreendidos pelo Chefe Sokka, Tenzin, Tonraq e Senhor do Fogo Zuko. Os criminosos estão presos em prisões diferentes e especializadas em todo o mundo.</li>
                    <br><h4>160 DG - Ano do Macaco</h4>
                    <li>Os pais de Mako e Bolin são mortos por um dobrador de fogo desonesto.</li>
                    <li>Jinora, a filha mais velha de Tenzin e Pema, nasce</li>
                    <br><h4>163 DG - Ano do Porco</h4>
                    <li>Nasce Ikki, a filha mais nova de Tenzin e Pema.</li>
                    <br><h4>165 DG - Ano do Boi</h4>
                    <li>Nasce Meelo, o primeiro filho de Tenzin e Pema.</li>
                    <br><h4>166 DG - Ano do Tigre</h4>
                    <li>Hiroshi Sato tenta persuadir Wonyong Keum a ajudá-lo a melhorar os tanques mecha Equialitario, embora Keum finalmente tenha decidido desistir do negócio, para grande aborrecimento da família Sato.</li>
                    <br><h4>167 DG - Ano do Coelho</h4>
                    <li>Mako e Bolin deixam a Tríade de Ameaças Triplas e decidem viver com Toza na Arena Pro-dobra.</li>
                    <br><h4>170 DG - Ano do Cavalo</h4>
                    <li>Depois de passar em seu teste final de dobra de fogo, Korra vai para a Cidade da República para começar seu treinamento de dobra de ar com Tenzin.</li>
                    <li>A Revolução Anti-dobra começa publicamente com a destruição da Arena Pro-Bending durante um ataque igualitario.</li>
                    <li>Amon remove a dobra de Tarrlok.</li>
                    <li>Os igualitarios lançam um ataque a Cidade República. No decorrer do ataque, os insurgentes ocupam a capital, bem como a Ilha do Templo do Ar, e derrubam o Conselho da República Unida. Amon remove a dobra de vários policiais
                        que foram feitos seus prisioneiros após a batalha, incluindo Lin Beifong.</li>
                    <li>Rohan, o segundo filho de Tenzin e Pema, nasce durante a batalha.</li>
                    <li>A Primeira Divisão das Forças Unidas é destruída pela armada biplano dos igualitarios ao tentar retomar a Cidade República.</li>
                    <li>A dobra de Avatar Korra é retirada por Amon durante o espetaculo de vitória dos Igualitarios, embora ela consiga destravar sua dobra de ar e expor Amon como um dobrador de água da Tribo da Água do Norte, dando um forte golpe
                        para apoiar a Revolução Anti-Dobra. Amon foge da Cidade da República com seu irmão Tarrlok, que se mata e Amon enquanto cruzava o Mar de Mo Ce.</li>
                    <li>O espírito do Avatar Aang restaura a dobra do Avatar Korra com dobra de energia e passa esse conhecimento para ela. Korra, conseqüentemente, restaura a dobra de Lin Beifong, bem como a dobra de todas as outras pessoas inocentes
                        que a perderam.</li>
                    <br><h4>171 DG - Ano das Ovelhas</h4>
                    <li>Asami Sato assume o controle da Future Industries como CEO.</li>
                    <li>Bumi se aposenta das Forças Unidas e muda-se para a Ilha do Templo Aéreo com Tenzin e sua família.</li>
                    <li>O Conselho da República Unida é dissolvido em favor de um presidente eleito democraticamente, o não dobrador Raiko.</li>
                    <li>Korra rompe os laços com Tenzin e começa seu treinamento espiritual com Unalaq.</li>
                    <li>Korra viaja para o coração do Pólo Sul e reabre um portal espiritual adormecido no solstício de inverno.</li>
                    <li>Korra descobre a verdade sobre como Unalaq incriminou seu irmão para se tornar o Chefe das Tribos da Água.</li>
                    <li>A Guerra Civil da Tribo da Água começa.</li>
                    <li>Korra é engolida por um espírito das trevas, o que faz com que ela perca temporariamente a memória. Mais tarde, ela se reconecta com o primeiro Avatar, Wan, e recupera a maioria de suas memórias.</li>
                    <li>Jinora conduz Korra ao Mundo Espiritual.</li>
                    <li>Korra reabre o portal espiritual do Norte após a vida de Jinora ser ameaçada por Unalaq.</li>
                    <li>A terceira convergência harmônica conhecida ocorre.</li>
                    <li>Unalaq liberta Vaatu e se torna o primeiro Dark Avatar após se fundir com o espírito das trevas. Ele expurga Raava de Korra e destrói o espírito de luz.</li>
                    <li>Unalaq morre depois que o espírito de Vaatu é purificado por Korra usando a própria técnica de limpeza espiritual de Unalaq.</li>
                    <li>Korra começa o Ciclo de Avatar novamente, embora ela não tenha mais uma conexão com os Avatares anteriores.</li>
                    <h3 id="mundoavatar#Segunda Era Avatar">Segunda Idade do Avatar (171 AG - Presente)</h3>
                    <br><h4>171 AG - Ano das Ovelhas</h4>
                    <li>Korra deixa os portais espirituais abertos e renuncia o papel do Avatar como a ponte entre os dois mundos, assumindo um papel de pacificador mais geral. [166]
                    </li>
                    <li>A Guerra Civil da Tribo da Água termina. A Tribo da Água do Sul torna-se independente com Tonraq como seu novo chefe. [166]
                    </li>
                    <li>Desna e Eska se tornam os novos co-chefes da Tribo da Água do Norte.
                    </li>
                    <li>Após milênios de exílio no Mundo Espiritual, Hundun reentra no mundo mortal para se vingar do Avatar e lançar o mundo no caos. Korra derrota e mata Hundun no entanto, restaurando o equilíbrio no Mundo Espiritual.</li>
                    <li>Vários não dobradores ganham habilidades de dobra de ar em todas as quatro nações, incluindo Bumi, Kai, Opal e Zaheer.
                    </li>
                    <li>Korra é banida da Cidade da República pelo presidente Raiko.</li>
                    <li>A Rainha da Terra Hou-Ting ordena que Dai Li sequestre dobradores de ar em Ba Sing Se.</li>
                    <li>Zaheer escapa de sua prisão e posteriormente liberta seus companheiros de equipe Ghazan, Ming-Hua, e P'Li.
                    </li>
                    <li>Korra se torna o primeiro Avatar dobra de metal.</li>
                    <li>Zaofu é atacado pelo Lótus Vermelho em busca de Korra.</li>
                    <li>A Rainha da Terra Hou-Ting é assassinada por Zaheer e a Muralha Interna da cidade é derrubada por Ghazan, mergulhando o Reino da Terra no caos.
                    </li>
                    <li>O Lótus Vermelho ataca o Templo do Ar do Norte e ameaça destruir a Nação do Ar revivida se Korra não se render.
                    </li>
                    <li>P'Li é morto por Suyin.</li>
                    <li>Bolin se torna o segundo não-Avatar conhecido que pode dobrar lava.</li>
                    <li>Ghazan destrói o Templo do Ar do Norte.</li>
                    <li>Zaheer se torna a segunda pessoa na história a ser capaz de voar.</li>
                    <li>Ming-Hua é morto por Mako.</li>
                    <li>Ghazan comete suicídio em uma tentativa de enterrar Mako e Bolin.</li>
                    <li>Zaheer é preso mais uma vez.</li>
                    <li>Jinora recebe suas tatuagens de dobra de ar e é ungida como uma mestre.</li>
                    <li>Korra é oficialmente bem-vinda de volta à Cidade da República.</li>
                    <li>Os dobradores de ar retornam às suas raízes nômades, promovendo paz, equilíbrio e harmonia em todo o mundo enquanto Korra se recupera.</li>
                    <br><h4>Entre 171 - 174 DG</h4>
                    <li>Cidade República chega a um acordo com os espíritos que vivem na metrópole.
                    </li>
                    <li>Kuvira reúne um exército para juntar o Reino da Terra.</li>
                    <li>Korra se reabilita no complexo da Tribo da Água do Sul por dois anos, embora ainda mentalmente marcada pelo atentado de Zaheer contra sua vida, ela parte em uma jornada para se reconectar com Raava.</li>
                    <br><h4>174 DG - Ano do Cachorro</h4>
                    <li>Wu é coroado o quinquagésimo quarto Rei da Terra.</li>
                    <li>Kuvira anuncia durante a coroação de Wu a dissolução do Reino da Terra e da monarquia, reformando-o em um novo "Império da Terra" sob sua liderança.</li>
                    <li>Depois de derrotar Korra em um duelo mano a mano, Kuvira anexou Zaofu ao Império da Terra, trazendo toda a nação sob seu controle.
                    </li>
                    <li>Com um canhão de energia espiritual à sua disposição, Kuvira marcha com seu exército para a Cidade da República e força o Presidente Raiko a entregar a República das Nações Unidas a ela.</li>
                    <li>Hiroshi Sato se sacrifica na batalha contra o enorme traje de mecha de Kuvira.</li>
                    <li>Um novo portal espiritual surge no coração da Cidade da República.</li>
                    <li>Kuvira se rende a si mesma e aos militares do Império Terrestre.</li>
                    <li>Wu planeja abolir a monarquia do Reino da Terra, oficialmente, em favor de líderes eleitos democraticamente para os vários estados, territórios e províncias.
                    </li>
                    <li>Varrick e Zhu Li se casam.
                    </li>
                    <li>O presidente Raiko anuncia uma expansão da Cidade da República.</li>
                    <li>Espíritos e humanos entram em conflito pelo domínio do portal espiritual da Cidade da República e sua área circundante.
                    </li>
                    <li>Começam as eleições presidenciais na República das Nações Unidas. Zhu Li Moon é eleita o segunda presidente da República Unida, derrotando o incumbente Raiko.</li>
                    <li>Muitas tríades perderam seu território durante a destruição do centro de Cidade República, agora lutando entre si pelos territoriais restantes.
                    </li>
                    <li>As primeiras eleições democráticas no Reino da Terra ocorrem no Estado de Gaoling, mas são anuladas após o Comandante Guan influenciar os eleitores por meio de lavagem cerebral.</li>
                    <li>Após um julgamento por seus crimes de guerra, Kuvira é condenada à prisão domiciliar em Zaofu três meses após sua rendição.</li>

        </div>
            `

        },
        {
            id:'#avatarkorra',
            titulo: 'A lenda de Korra',
            subtitulo:"",
            menu:[
                'A lenda de Korra',
                'Livro Um: Ar',
                'Livro Dois: Espíritos',
                'Livro três: Mudança',
                'Livro Quatro: Equilíbrio'
                
            ],
            corpo:`<head>
            <style type="text/css">
            h1 {
                font-size: 25px;
            }
            
            h2 {
                font-size: 22px;
            }
            
            #historia h3 {
                font-size: 20px;
                color: rgb(112, 0, 0)
            }
            
            #historia h4 {
                font-size: 16px;
                color: rgb(0, 112, 0)
            }
            
            #historia div li {
                padding: 10px;
                font-size: 14px;
                list-style-type: disc;
                list-style-position: inside;
            }
            
            p {
                font-size: 16px;
                padding-left: 10px;
                padding-right: 10px;
                z-index: 1;
            }
            
            dd {
                padding-left: 50px;
                font-size: 14px;
            }
            
                        
            #navbar-example3 {
                width: 200px;
                left: 0px;
                background-color: #FFF8DC;
                border: white;
                border-style: solid;
                border-width: 1px;
                border-radius: 10%;
            }
            
            #navbar-example3 a:hover {
                background: rgb(243, 211, 151);
            }
            
            #historia {
                background-color: #FFF8DC;
                z-index: 1;
                padding-top: 20px;
                margin-left:20px;
                width: 750px
            }
            
            </style>
          </head>
            
            <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
            <h1 id="avatarkorra#A lenda de Korra"> <b>A lenda de Korra</b></h1>
            <div class="row"><div class="col-8">
            <p>A lenda de Korra é uma série de televisão americana de animação ambientada no universo Avatar como uma sequência de Avatar: O Último Mestre do Ar. O episódio de estreia foi ao ar na Nickelodeon em 14 de abril de 2012. No entanto, os dois primeiros episódios foram lançados online de 24 a 25 de março de 2012 e estavam disponíveis em alta definição gratuitamente no iTunes. A série teve 52 episódios, terminando sua exibição em 19 de dezembro de 2014.</p></div>
            <div class="col-4"><img src="assets/historia/Korra-logo.png" width=110%"></div></div><p>
            A série começa setenta anos após o final do arco de história Avatar: O Último Mestre do Ar com novos personagens e cenários. A protagonista da nova série, Korra, o Avatar depois de Aang, é uma jovem rebelde e cabeça quente da Tribo da Água do Sul que está "pronta para enfrentar o mundo". A série segue Korra enquanto ela enfrenta os difíceis desafios, deveres e responsabilidades que vêm com ser o Avatar.
            <hr>
            
             <h1 id="avatarkorra#Livro Um: Ar">Livro Um: Ar (气)</h1>
             <div class="row">
             <div class="col-4"><img src="assets/historia/cidade-republica.png" width=110%"></div>
             <div class="col-8">
             <p>Após a conclusão da Guerra dos Cem Anos, Avatar Aang e o senhor do fogo Zuko reuniram pessoas das quatro nações e fundaram a República das Nações Unidas, com sua capital sendo uma cidade república, uma grande "metrópole movida por tecnologia do tipo steampunk". como carros e motocicletas. Aang e Katara tiveram três filhos, o mais novo deles era Tenzin, o único dobrador de ar dos três irmãos.</p></div></div><p> Enquanto isso, Toph Beifong viajou extensivamente para ensinar dobra de metal para outros dobradores de terra. Após a morte de Aang em 153 AG, ele reencarnou como uma garota da Tribo da Água do Sul chamada Korra.</p>
            <p>
            Atualmente, setenta anos após o fim da Guerra dos Cem Anos, Korra, uma rebelde garota de dezessete anos, está pronta para completar seu treinamento de dobra de ar e cumprir seu papel como Avatar. Ela já dominou a dobra de água, dobra de terra e dobra de fogo neste ponto.
            </p><p>No início da série, Korra viaja para a Cidade da República e começa seu treinamento de dobra de ar com Tenzin. O próprio Tenzin é casado com Pema. Ele tem duas filhas, Jinora, uma "traça de livros", e Ikki, uma "faladeira", enquanto Meelo, seu primeiro filho, foi seu único filho até o décimo episódio, "Virando as Marés", quando Pema deu à luz outro menino chamado Rohan.</p>
            <div class="row"><div class="col-7">
            <p>
            No entanto, a cidade da república não é o que Korra imaginou que fosse. Anti-dobradores chamados de "Igualitarios", que se opõem às artes de dobrar, utilizam técnicas como o bloqueio de chi para promover seus objetivos de revolução, liderados por Amon. Korra deve lutar contra o crime desenfreado e a Revolução Anti-Dobra, ajudada por dois irmãos, Mako, um dobrador de fogo, e Bolin, um dobrador de terra. Ela também é acompanhada por seu companheiro animal, Naga, e a Força Policial da Cidade da República, que é liderada pela filha de Toph, Lin Beifong. </p></div>
            <div class="col-5"><img src="assets/historia/revolucao.jpg" width=100%"></div></div>
            <hr>

            <h1 id="avatarkorra#Livro Dois: Espíritos">Livro Dois: Espíritos (神靈)</h1>
            <p>
            Seis meses após os eventos da Revolução Anti-Dobra, Korra, tendo aprendido a dobrar todos os quatro elementos e alcançado o status de um Avatar totalmente realizado, deve mais uma vez se tornar a aluna quando ela mergulha no reino dos espíritos sob os ensinamentos de seu tio paterno e tutor. Agora aprendendo as profundezas de suas conexões espirituais, Korra logo descobre que a luz não pode existir sem a escuridão, e em um ciclo interminável de criação e destruição, apenas ela tem a habilidade de manter o equilíbrio no mundo.</p>

            <h1 id="avatarkorra#Livro três: Mudança">Livro três: Mudança (易)</h1>
            <p>            
            Com uma mudança na energia do mundo devido à Convergência Harmônica, a capacidade de dobrar o ar ressurgiu em alguns não dobradores, levando Korra e seus aliados a vasculhar o Reino da Terra em busca desses novos dobradores para oferecer treinamento e orientação. No entanto, enquanto a Nação do Ar está sendo lentamente reconstruída, Zaheer e seus companheiros cúmplices do Lótus Vermelho escapam de suas respectivas prisões e se propõem a derrubar todas as nações e sucumbir o mundo à anarquia. A crença deles de que a desordem é a ordem natural representa uma ameaça letal para Korra e ela deve lutar para salvar não apenas o equilíbrio das nações no mundo, mas também ela mesma e o Ciclo Avatar.</p>

            <h1 id="avatarkorra#Livro Quatro: Equilíbrio">Livro Quatro: Equilíbrio (平衡)</h1>
            <p>
            Após a insurreição do Lótus Vermelho, Korra partiu para a Tribo da Água do Sul para se recuperar e o Time Avatar seguiu em frente com suas vidas. Três anos depois, em 174 AG, a ex-capitã da guarda de Zaofu, Kuvira, estava viajando pelo Reino da Terra com Bolin, Varrick e seu noivo, Baatar Jr., em uma missão para reunir a nação depois que ela caiu em desordem após a morte da rainha Hou-Ting. Quando ela deveria abdicar do controle para o recém-coroado Rei da Terra Wu, ela denunciou sua autoridade e se autoproclamou governante do Império da Terra. Enquanto isso, Korra conseguiu se curar fisicamente, embora ela ainda esteja enfrentando um bloqueio emocional causado por traços residuais de mercúrio. Com os problemas chegando ao Reino da Terra, a Equipe Avatar se dividiu e o paradeiro do Avatar é desconhecido, a busca pelo equilíbrio começa novamente.</p>
            
            `

        },
    ]
        
    
}