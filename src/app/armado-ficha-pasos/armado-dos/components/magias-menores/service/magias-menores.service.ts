import {Injectable} from '@angular/core';
import {CondicionMenor, MagiaMenor} from "../../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class MagiasMenoresService {
  public contador: number = 0;
  public magiasMenores: MagiaMenor[] = [
    {
      nombre: 'Anticipación 1 ',
      descripcion: 'Añade anticipación a otra magia ',
      bonificacion: 2,
      magiaMenorId: 1,
    },
    {
      nombre: 'Bonificación ofensiva 1',
      descripcion: 'Aumenta el daño de un objeto',
      bonificacion: 2,
      magiaMenorId: 2,
    },
    {
      nombre: 'Bonificación ofensiva 2',
      descripcion: 'Aumenta el daño de una magia',
      bonificacion: 2,
      magiaMenorId: 3,
    },
    {
      nombre: 'Bonificación ofensiva 3',
      descripcion: 'Aumenta el daño de una invocación',
      bonificacion: 2,
      magiaMenorId: 4,
    },
    {
      nombre: 'Bonificación defensiva 1',
      descripcion: 'Aumenta la Resistencia',
      bonificacion: 2,
      magiaMenorId: 5,
    },
    {
      nombre: 'Bonificación defensiva 2',
      descripcion: 'Bloquea daños',
      bonificacion: 2,
      magiaMenorId: 6,
    },
    {
      nombre: 'Perceptiva 1',
      descripcion: 'Aumenta la astucia para tiradas de percepción',
      bonificacion: 2,
      magiaMenorId: 7,
    },
    {
      nombre: 'Movilidad 1',
      descripcion: 'Le permite desplazarse 2 metros en cualquier direccion',
      bonificacion: 0,
      magiaMenorId: 8,
    },
    {
      nombre: 'Movilidad 2',
      descripcion: 'Marca un punto intermedio de forma mental y se aleja 1 metro de ese punto y el objetivo más próximo ' +
        'también se aleja (10 metros para posicionar el punto mental)',
      bonificacion: 0,
      magiaMenorId: 9,
    },
    {
      nombre: 'Reducción 1',
      descripcion: 'Reduce una Estadística del objetivo',
      bonificacion: 2,
      magiaMenorId: 10,
    },
    {
      nombre: 'Reducción 2',
      descripcion: 'Reduce la resistencia del equipamiento del objetivo',
      bonificacion: 2,
      magiaMenorId: 11,
    },
    {
      nombre: 'Reducción 3',
      descripcion: 'Reduce la resistencia de una zona objetivo',
      bonificacion: 2,
      magiaMenorId: 12,
    },
    {
      nombre: 'Inteligencia 1',
      descripcion: 'Aumenta la investigación',
      bonificacion: 2,
      magiaMenorId: 13,
    },
    {
      nombre: 'Voluntad 1',
      descripcion: 'Mejora las tiradas de Tenacidad',
      bonificacion: 2,
      magiaMenorId: 14,
    },
    {
      nombre: 'Voluntad 2',
      descripcion: 'Aumenta las tiradas de coraje',
      bonificacion: 2,
      magiaMenorId: 15,
    },
    {
      nombre: 'Voluntad 3',
      descripcion: 'Aumenta las tiradas de Autocontrol',
      bonificacion: 2,
      magiaMenorId: 16,
    },
    {
      nombre: 'Evasión 1',
      descripcion: 'Aumenta esquivar',
      bonificacion: 2,
      magiaMenorId: 17,
    },
    {
      nombre: 'Telequinesis 1',
      descripcion: 'Desplazamiento de un objeto que pese menos de 500 gramos',
      bonificacion: 0,
      magiaMenorId: 18,
    }
  ];
  public condicionesMenores: CondicionMenor[] = [
    {
      nombre: 'Anticipación',
      bonificacion: 1,
      descripcion: 'magias que pueden prepararse con cierto tiempo de antelación ante su uso',
      condicionMenotId: 1
    },
    {
      nombre: 'Aparición',
      bonificacion: 1,
      descripcion: 'Magias por las cuales el usuario puede traer a este plano diferentes súbditos o' +
        ' invocaciones como espectros, no muertos criaturas en general o incluso herramientas',
      condicionMenotId: 2
    },
    {
      nombre: 'Bonificación',
      bonificacion: 1,
      descripcion: 'El mago aumenta una o más características del objetivo',
      condicionMenotId: 3
    },
    {
      nombre: 'Canalización',
      bonificacion: 1,
      descripcion: 'Magias que requieren de más de una acción para poder ser realizadas y que en cada' +
        ' acción se realizara una tira acumulativa de efectividad.',
      condicionMenotId: 4
    },
    {
      nombre: 'Comando',
      bonificacion: 1,
      descripcion: 'El mago puede dar órdenes a criaturas u objetivos que estén bajo su control',
      condicionMenotId: 5
    },
    {
      nombre: 'Defensiva',
      bonificacion: 1,
      descripcion: 'Habilidad para defenderse',
      condicionMenotId: 6
    },
    {
      nombre: 'Disrupción',
      bonificacion: 1,
      descripcion: 'Magias que interrumpen, alteran o anulan el efecto de otras magias',
      condicionMenotId: 7
    },
    {
      nombre: 'Enlaces',
      bonificacion: 1,
      descripcion: 'Las magias que conectan a dos seres para activar efectos de cualquier tipo de un mago a otro',
      condicionMenotId: 8
    },
    {
      nombre: 'Fatiga arcana',
      bonificacion: 1,
      descripcion: 'Magias que luego de usarse, por la exigencia de las mismas, el usuario no puede volver a' +
        ' canalizarla en el siguiente turno ni en el actual.',
      condicionMenotId: 9
    },
    {
      nombre: 'Interrupción',
      bonificacion: 1,
      descripcion: 'La magia puede tirarse en el momento de la acción de otro usuario, estas habilidades' +
        ' restaran una acción de la propia reserva en el próximo turno (a menos que la magia' +
        ' describa lo contrario)',
      condicionMenotId: 10
    },
    {
      nombre: 'Limitante',
      bonificacion: 1,
      descripcion: 'Las magias condicionan o ponen límites al mago que la sutiliza',
      condicionMenotId: 11
    },
    {
      nombre: 'Maldición',
      bonificacion: 1,
      descripcion: 'Hechizos o marcas con diversos efectos en el objetivo o en la zona',
      condicionMenotId: 12
    },
    {
      nombre: 'Morfología',
      bonificacion: 1,
      descripcion: 'Magias que alteran la forma de un objeto u objetivo',
      condicionMenotId: 13
    },
    {
      nombre: 'Ofensiva',
      bonificacion: 1,
      descripcion: 'Habilidad para causar daño a un objetivo',
      condicionMenotId: 14
    },
    {
      nombre: 'Pasivas',
      bonificacion: 1,
      descripcion: 'Las magias que no requieren de tirada alguna y que están activas constantemente. Se' +
        ' pueden activar con solamente el gasto de mana',
      condicionMenotId: 15
    },
    {
      nombre: 'Repetición',
      bonificacion: 1,
      descripcion: 'Una magia que su activación provee 2 o más activaciones de algún efecto, estas' +
        ' recibirán bonificaciones externas en su primer uso, los demás solo recibirán la efectividad' +
        ' que dicte la magia y el nivel (a menos que la magia especifique lo contrario)',
      condicionMenotId: 16
    },
    {
      nombre: 'Restricción',
      bonificacion: 1,
      descripcion: 'El mago reduce o amaina las capacidades del objetivo',
      condicionMenotId: 17
    },
    {
      nombre: 'Sacrificio',
      bonificacion: 1,
      descripcion: 'El usuario cede de sus propios recursos o habilidades',
      condicionMenotId: 18
    },
    {
      nombre: 'Sanación',
      bonificacion: 1,
      descripcion: 'Habilidad que regenera recursos o restablece estadísticas',
      condicionMenotId: 19
    },
    {
      nombre: 'Categoría propia',
      bonificacion: 1,
      descripcion: 'magias que tienen uno o más efectos particulares que no entren en las otras definiciones',
      condicionMenotId: 20
    },
    {
      nombre: 'Esencia del Fortaleza',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Fortaleza',
      condicionMenotId: 21
    },
    {
      nombre: 'Esencia del Apoyo',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Apoyo',
      condicionMenotId: 22
    },
    {
      nombre: 'La Esencia del Control',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Control',
      condicionMenotId: 23
    },
    {
      nombre: 'Esencia del Cuerpo',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Cuerpo',
      condicionMenotId: 24
    },
    {
      nombre: 'Esencia del Daño',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Daño',
      condicionMenotId: 25
    },
    {
      nombre: 'Esencia del Elementalismo',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Elementalismo',
      condicionMenotId: 26
    },
    {
      nombre: 'Esencia del Invocacion',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Invocacion',
      condicionMenotId: 27
    },
    {
      nombre: 'Esencia del Mente',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Mente',
      condicionMenotId: 28
    },
    {
      nombre: 'Esencia del Sagacidad',
      bonificacion: 1,
      descripcion: 'Magias de La Esencia del Sagacidad',
      condicionMenotId: 29
    },
  ];
  public condicionMenorHereo: CondicionMenor;
  public magiasMenoresHereo: MagiaMenor[] = [];
  constructor() { }

}
