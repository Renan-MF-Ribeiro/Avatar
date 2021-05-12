export class Personagem {

    public nome!: string
    public nomeAternativo!: string
    public nascionalidade!: string
    public etnia!: string
    public dobra!: string
    public idade!: string
    public morte!: string
    public antecessor!: string
    public sucessor!: string
    public descricao_fisica!: {
        genero: string
        cor_olhos: string
        cor_cabelo: string

    }
    public aliados!: string
    public inimigos!: string
    public arma!: string
    public informacoes!: {
        profissao: string
        posicao: string
        afiliacao: string

    }
    public primeira_aparicao!: string
    public ultima_aparição!: string
    public dublador_original!: string
    public dublador_brasileiro!: string
    public refencias!: Array<String>
    public img!:{
        topo: string
        // lda = Lenda de Ang
        lda: string
        // ldk = Lenda de Korra
        ldk: string
        perfil: string
        etnia: string
    }
    public frase!: string
    public momentoFrase!: String
}

