# jdr-medicina-especializada-app
App da empresa JDR Medicina Especializada
#### 1) Add Bootstrap ao Projeto
download do arquivo Bootstrap e
```
"styles": [
          {
            "input": "src/theme/variables.scss"
          },
          {
            "input": "src/global.scss"
          },
          {
            "input": "node_modules/bootstrap/dist/css/bootstrap.min.css"
          }
        ],
```
Para uso do bootstrap scripts, jquery and popper.js é necessários adicioná-los ao projeto

#### 2) Criando o Serviço para consumir API com dados do Banco de Dados
```
ionic generate service nomeDoService
```
["Ionic 4 ele adota a nomenclatura de Service, enquanto no Ionic 3, ele é chamado de Provider."](https://pt.stackoverflow.com/questions/365181/no-ionic-o-provider-agora-%C3%A9-service)
E no código do serviço adiciona
```
import { HttpClientModule } from '@angular/common/http';
```
No module.ts
```
...
import { HttpClientModule } from '@angular/common/http';
...
imports: [..., ..., ..., ..., ..., HttpClientModule],
...
```
E no nomeArquivo.ts usa
```
import { classeDoService } from '../nomeDoArquivoService.service';
```
