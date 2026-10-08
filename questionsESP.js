const QUESTIONS_ESP = [
 {
  "id": 1,
  "category": "Agentforce & Data",
  "text": "Universal Containers necesita crear reportes de Data Cloud para entender el comportamiento de los agentes. ¿Qué data lake object (DLO) representa un contenedor general que captura interacciones continuas con uno o más AI agents?",
  "options": [
   {
    "letter": "A",
    "text": "AlAgentSession"
   },
   {
    "letter": "B",
    "text": "AlAgentInteraction"
   },
   {
    "letter": "C",
    "text": "AlAgentinteractionMessage"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Según la Guía de Integración de Agentforce Data Cloud, el objeto AI Agent Session (AIAGENTSESSION) representa un contenedor general que rastrea una interacción continua entre uno o más AI agents y un usuario. El documento describe: 'AI Agent Session es el contenedor padre para un conjunto continuo de interacciones de AI Agent. Captura metadatos, horas de inicio y fin, y la relación con los mensajes individuales intercambiados durante la sesión'. La Opción A, AIAGENTINTERACTION, representa un solo paso o evento dentro de la sesión, mientras que AIAGENTINTERACTIONMESSAGE representa mensajes o intercambios individuales dentro de esa interacción. Por lo tanto, AIAGENTSESSION es el DLO correcto para reportar sobre el comportamiento general y desempeño del agente a lo largo de una interacción completa."
 },
 {
  "id": 2,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) ha registrado un external service y ha creado un template-triggered prompt flow que invoca el external service para extraer datos de una REST API. UC ahora necesita hacer que los datos de respuesta del external service sean utilizables dentro de un prompt template como un merge field cuando el template se ejecute. ¿Cómo debería UC cumplir con este requerimiento?",
  "options": [
   {
    "letter": "A",
    "text": "Usar el elemento de flow 'Add Prompt Instructions'."
   },
   {
    "letter": "B",
    "text": "Usar merge fields de External Service Record."
   },
   {
    "letter": "C",
    "text": "Convertir el JSON a un merge field de XML."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Como se describe en la Guía de Integración de External Services y Prompt Flow de Agentforce, cuando se obtienen datos de un external service registrado a través de REST API, el payload de respuesta se almacena como External Service Records. Estos registros se pueden referenciar dinámicamente dentro de los prompt templates mediante merge fields de External Service Record. Esto permite que el large language model (LLM) use los datos recuperados como contextual grounding durante la ejecución del prompt."
 },
 {
  "id": 3,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) quiere desplegar un Agentforce Service Agent para dar soporte a sus clientes a través de una experiencia web. UC utiliza un sitio de Digital Experience y quiere habilitar messaging para usuarios autenticados (logged in). El cliente necesita pasar el número de membresía al agente, para lo cual hay disponible una variable de pre-chat. ¿Cuál es un paso requerido para conectar el agente al sitio de Digital Experience usando Messaging for In-App and Web?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar MuleSoft para establecer un túnel API seguro entre el agente y el sitio de Digital Experience."
   },
   {
    "letter": "B",
    "text": "Configurar un messaging Lightning web component utilizando el Lightning Type estándar o personalizado para Agentforce."
   },
   {
    "letter": "C",
    "text": "Crear un Omni-Channel flow que enrute los mensajes al agente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Conectar un Service Agent a un sitio de Digital Experience (Experience Cloud) para Messaging for In-App and Web implica colocar el componente messaging Lightning web component en el sitio, configurado con el Lightning Type estándar o personalizado para Agentforce, de modo que la variable de membresía del pre-chat se pase al agente."
 },
 {
  "id": 4,
  "category": "Agentforce Concepts",
  "text": "Global Finance Corp (GFC) está expandiendo el despliegue de Agentforce desde un agente básico de servicio al cliente a un conjunto de agentes especializados que manejan Detección de Fraude, Originación de Préstamos y Facturación. GFC opera completamente dentro de una sola instancia global de Salesforce. El CIO quiere asegurar que, a medida que escala el número de agentes especializados, la compañía mantenga un control estricto y centralizado sobre los guardrails de seguridad y el contexto de usuario, asegurando que los clientes no tengan que repetirse cuando su solicitud abarque múltiples departamentos. ¿Cuál es un enfoque arquitectónico razonable para lograr este nivel de escalabilidad y control?",
  "options": [
   {
    "letter": "A",
    "text": "Implementar una arquitectura Multi-Org, Multi-Agent (MOMA) conectada a través del protocolo Agent-to-Agent (A2A) para aislar de forma segura el agente de cada departamento."
   },
   {
    "letter": "B",
    "text": "Desplegar una arquitectura Single-Org, Multi-Agent (SOMA) utilizando un agente Orchestrator primario para gestionar el contexto compartido de forma nativa y enrutar las sub-tareas a agentes especializados."
   },
   {
    "letter": "C",
    "text": "Usar el Model Context Protocol (MCP) para federar múltiples agentes externos de terceros directamente en la consola de Agentforce Service existente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "SOMA es correcto porque la empresa opera en una sola instancia de Salesforce y requiere gobernanza centralizada, contexto de usuario compartido y enrutamiento a través de agentes especializados. La guía de arquitectura de Salesforce define SOMA como múltiples agentes colaborando dentro de una sola org de Salesforce usando gobernanza y datos compartidos, con un agente Supervisor o primario actuando como puerta de entrada."
 },
 {
  "id": 5,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) utiliza un agente para gestionar las consultas de servicio al cliente. UC recientemente se asoció con un proveedor logístico externo que opera su propio AI agent autónomo. Cuando un cliente solicita un reenrutamiento complejo de envío internacional, el agente de UC necesita comunicarse de forma segura, negociar términos de ruta y delegar la ejecución del reenrutamiento directamente al AI agent del proveedor logístico. ¿Qué protocolo estándar abierto multi-agente está diseñado específicamente para facilitar esta delegación autónoma de tareas y negociación entre AI agents independientes?",
  "options": [
   {
    "letter": "A",
    "text": "Agent-to-Agent (A2A) Protocol"
   },
   {
    "letter": "B",
    "text": "Model Context Protocol (MCP)"
   },
   {
    "letter": "C",
    "text": "OpenAPI Specification (OAS)"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El protocolo Agent-to-Agent (A2A) es el estándar abierto correcto cuando AI agents independientes necesitan descubrirse entre sí, comunicarse de forma segura, intercambiar información estructurada y delegar trabajo a través de distintas plataformas."
 },
 {
  "id": 6,
  "category": "Setup & Integration",
  "text": "Cloud Kicks quiere integrar su agente con su sitio web personalizado. El objetivo es que los clientes interactúen con la interfaz de chat personalizada del agente. ¿Qué enfoque proporciona el framework para que la aplicación web personalizada se comunique con el agente?",
  "options": [
   {
    "letter": "A",
    "text": "Agent API"
   },
   {
    "letter": "B",
    "text": "Agent-to-Agent (A2A)"
   },
   {
    "letter": "C",
    "text": "Model Context Protocol (MCP)"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La Guía de Integración de Agentforce API define Agent API como el framework que permite a las aplicaciones web o móviles externas comunicarse directamente con los agentes alojados en Salesforce. Esta API soporta el intercambio de mensajes, gestión de sesiones y persistencia del contexto."
 },
 {
  "id": 7,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está construyendo un Agentforce Service Agent para gestionar cancelaciones de pedidos. El Specialist debe asegurar que una acción crítica 'Check Cancellation Eligibility' se ejecute de forma determinista en cada turno relevante, sin depender del criterio del reasoning engine para elegir la herramienta. Durante una revisión de código, un desarrollador junior pregunta por qué el Specialist llamó a la acción usando el comando run @actions.name en lugar de simplemente listar la acción dentro del bloque reasoning actions:. ¿Qué debe explicar el Specialist con respecto a la diferencia entre estos dos métodos de invocación?",
  "options": [
   {
    "letter": "A",
    "text": "Ambos patrones ejecutan la acción en cada turno automáticamente; la diferencia es puramente sintáctica, ya que el comando run es simplemente la notación más nueva para Agent Script."
   },
   {
    "letter": "B",
    "text": "El comando run solo es válido cuando está anidado dentro de bloques reasoning actions: para pasar parámetros; el Specialist debe listarlo bajo reasoning actions: para que el LLM pueda acceder a él."
   },
   {
    "letter": "C",
    "text": "Listar una acción bajo reasoning actions: la convierte en una herramienta subjetiva que el LLM decide si llamar o no; llamarla con el comando run fuerza una ejecución garantizada en todo momento."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "En Agent Script, listar una herramienta en el bloque reasoning.actions la expone al reasoning engine como una herramienta ejecutable que el LLM puede decidir llamar según la descripción y el contexto. Por el contrario, usar run @actions.nombre garantiza la ejecución obligatoria cada vez."
 },
 {
  "id": 8,
  "category": "Agentforce & Data",
  "text": "Universal Containers (UC) está implementando un Agentforce Service Agent para asistir a sus clientes. El agente debe ser capaz de recuperar información de documentos de políticas almacenados como PDFs y asegurar que sus respuestas estén fundamentadas exclusivamente en estos datos aprobados de la empresa, en lugar de conocimiento genérico del LLM. El equipo del proyecto requiere la configuración más rápida y menos compleja posible, minimizando la configuración manual de componentes en el backend. ¿Qué enfoque debería tomar el Agentforce Specialist para satisfacer estos requerimientos?",
  "options": [
   {
    "letter": "A",
    "text": "Subir los PDFs a Salesforce Files y configurar las Topic Instructions del agente para leer dinámicamente los archivos en tiempo de ejecución."
   },
   {
    "letter": "B",
    "text": "Subir manualmente los PDFs a Data 360 como tipo Unstructured Data Model Object (UDMO) y seleccionar la opción 'create a new Agentforce Data Library mapping'."
   },
   {
    "letter": "C",
    "text": "Crear una Agentforce Data Library (ADL) y subir los documentos de políticas en PDF directamente a la librería."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Una Agentforce Data Library acepta la carga de archivos directamente: se crea la librería, se suben los PDFs de políticas y la plataforma se encarga del procesamiento, fragmentación (chunking) e indexación en Data 360 en segundo plano con el menor esfuerzo manual."
 },
 {
  "id": 9,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) necesita crear un correo de ventas utilizando un prompt template personalizado. UC necesita fundamentar (grounding) el prompt en los siguientes datos: Opportunity Products, Eventos cercanos al cliente, y ejemplos de Tono y Voz. ¿Cómo debería UC obtener los elementos relacionados?",
  "options": [
   {
    "letter": "A",
    "text": "Utilizar un plantilla de correo estándar e insertar manualmente los campos de datos requeridos."
   },
   {
    "letter": "B",
    "text": "Crear un Flex template que tome los registros en cuestión como inputs."
   },
   {
    "letter": "C",
    "text": "Llamar a un prompt-initiated flow para extraer y fundamentar los datos requeridos."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Un Flex prompt template acepta varios registros no relacionados directamente como entradas (inputs) —los productos de la oportunidad, los eventos cercanos y los ejemplos de tono/voz— permitiendo que todos sean referenciados como recursos en un solo prompt de correo electrónico."
 },
 {
  "id": 10,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist está construyendo un flujo de trabajo de onboarding de múltiples pasos utilizando agent actions. El flujo incluye cuatro pasos secuenciales: creación de cuenta, configuración de perfil, configuración de ajustes y finalización. Después de que la acción create_account se ejecuta exitosamente, el sistema debe enviar inmediatamente un correo de verificación sin requerir interacción adicional del usuario. ¿Qué enfoque debería usar el especialista para asegurar que el correo de verificación se active automáticamente después de crear la cuenta?",
  "options": [
   {
    "letter": "A",
    "text": "Agregar la lógica send_verification dentro de las instrucciones procedimentales para que se ejecute antes de que termine la configuración del perfil."
   },
   {
    "letter": "B",
    "text": "Configurar la acción send_verification para estar disponible cuando account_created = True y esperar a que el agente la llame en el siguiente paso."
   },
   {
    "letter": "C",
    "text": "Usar la palabra clave 'run' dentro de la acción create_account para encadenar la acción send_verification como un seguimiento automático."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Dentro de Agent Script, la palabra clave 'run' encadena una acción de seguimiento para que send_verification se ejecute inmediatamente después de que create_account tenga éxito, sin requerir una interacción extra del usuario."
 },
 {
  "id": 11,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist está creando una custom action en Agentforce. ¿Qué opción está disponible para que el Agentforce Specialist elija como tipo de custom agent action?",
  "options": [
   {
    "letter": "A",
    "text": "Flows"
   },
   {
    "letter": "B",
    "text": "Apex trigger"
   },
   {
    "letter": "C",
    "text": "SOQL"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "En el Agent Builder de Agentforce Studio, las acciones personalizadas (custom actions) se pueden crear utilizando Salesforce Flows. Los Flows permiten ejecutar lógica compleja (recuperación de datos, actualizaciones o integraciones) y son compatibles de forma nativa como tipo de acción."
 },
 {
  "id": 12,
  "category": "Agentforce Concepts",
  "text": "Pinnacle Healthcare está mejorando su agente y su implementación de Agent Script para optimizar la programación de pacientes y la coordinación de atención. El área de cumplimiento normativo identificó la necesidad de garantizar un comportamiento determinista en los agentes al verificar la información del paciente antes de agendar citas. El proceso debe forzar el cumplimiento bloqueando las acciones secundarias (como agendar) hasta que la verificación del paciente esté completa. ¿Cuál es el enfoque más apropiado que el Agentforce Specialist debería recomendar siguiendo las guías estándar de configuración?",
  "options": [
   {
    "letter": "A",
    "text": "Usar expresiones de plantilla en las descripciones de las acciones para mostrar instrucciones dinámicamente según el estado de verificación."
   },
   {
    "letter": "B",
    "text": "Usar '@utils.setVariables' para actualizar una variable de sesión mutable sobre el estado de verificación del paciente y restringir las acciones de agendamiento mediante 'available when'."
   },
   {
    "letter": "C",
    "text": "Llamar a un método Apex '@InvocableMethod' personalizado para aplicar la lógica de verificación y actualizar dinámicamente la disponibilidad de la acción de agendamiento."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Restringir acciones secundarias requiere un control de estado confiable y una regla de disponibilidad. Una variable de sesión mutable almacena si se completó la verificación, y la regla 'available when' evita que la acción de agendamiento esté disponible para el LLM hasta que esa variable confirme el estado verificado."
 },
 {
  "id": 13,
  "category": "Trust Layer & Security",
  "text": "¿Qué métricas útiles proporciona Agentforce Observability a un equipo de servicio al cliente relacionadas con un Customer Service Agent?",
  "options": [
   {
    "letter": "A",
    "text": "Tasas de desviación de llamadas (call deflection), costo por interacción y consumo de memoria."
   },
   {
    "letter": "B",
    "text": "Tasas de desviación de llamadas (call deflection), productividad y tasas de sesiones abandonadas."
   },
   {
    "letter": "C",
    "text": "Tasas de desviación de llamadas (call deflection), tasas de sesiones abandonadas y calificaciones de intenciones del usuario."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agentforce Observability y Agent Analytics se centran en métricas operativas de servicio como la tasa de desviación (deflection rate), métricas de productividad y tasa de sesiones abandonadas para evaluar el impacto y la efectividad del agente."
 },
 {
  "id": 14,
  "category": "Prompt Engineering",
  "text": "Cloud Kicks (CK) está desarrollando un prompt template en un entorno Sandbox y ha guardado múltiples versiones durante sus pruebas. CK se prepara ahora para mover la plantilla a producción. ¿Cuál es una consideración clave al desplegar la plantilla a producción?",
  "options": [
   {
    "letter": "A",
    "text": "Desplegar una plantilla requiere que todas las versiones anteriores se activen manualmente antes de que el despliegue pueda tener éxito."
   },
   {
    "letter": "B",
    "text": "Desplegar una plantilla elimina automáticamente todas las versiones previas y las reemplaza con la versión desplegada en producción."
   },
   {
    "letter": "C",
    "text": "Desplegar un prompt template incluye todas las versiones del prompt template existentes en la org de origen hacia la org de destino."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El control de versiones forma parte del ciclo de vida de los metadatos de prompt templates. Al trasladar una plantilla entre entornos, se incluyen las versiones almacenadas en la org de origen hacia el paquete de destino."
 },
 {
  "id": 15,
  "category": "Agentforce Concepts",
  "text": "Universal Containers quiere asignar agentes para mejorar la eficiencia departamental. ¿Qué configuración asegura que las tareas correctas sean gestionadas por los agentes adecuados?",
  "options": [
   {
    "letter": "A",
    "text": "Sales Coach Agent para leads, Service Agent para solicitudes de RRHH, y tickets de soporte para asegurar que los casos estén disponibles."
   },
   {
    "letter": "B",
    "text": "Lead Nurturing Agent para calificación de leads, Service Agent para tickets de soporte, y Employee Agent para solicitudes de RRHH."
   },
   {
    "letter": "C",
    "text": "Un solo Service Agent para gestionar eficientemente todos estos escenarios, reduciendo el número de tipos de agente necesarios."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Salesforce recomienda utilizar agentes diseñados a la medida de cada función: Lead Nurturing Agent (SDR Agent) para ventas/leads, Service Agent para atención a clientes/casos, y Employee Agent para tareas internas de empleados (RRHH, IT)."
 },
 {
  "id": 16,
  "category": "Trust Layer & Security",
  "text": "El Service Agent de Universal Containers ejecuta una acción de Flow para recuperar registros de Opportunity. El objeto Opportunity tiene una configuración predeterminada de la organización (OWD) configurada como Private. El agente no devuelve resultados a pesar de que existen registros coincidentes y la lógica del Flow está correctamente configurada. ¿Qué resolución se adhiere estrictamente al principio de menor privilegio (least privilege)?",
  "options": [
   {
    "letter": "A",
    "text": "Agregar los permisos de objeto requeridos al permission set del usuario Einstein Service Agent User y configurar las sharing rules apropiadas."
   },
   {
    "letter": "B",
    "text": "Configurar la acción de Flow del agente para ejecutarse en System Mode - without sharing."
   },
   {
    "letter": "C",
    "text": "Cambiar el OWD del objeto Opportunity a Public Read Only para que el usuario Einstein Service Agent User pueda acceder a los registros."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El usuario Einstein Service Agent ejecuta el Flow con sus propios permisos. Bajo un OWD Privado, el principio de menor privilegio exige otorgar específicamente los permisos de objeto en su permission set junto con sharing rules estrictas para los registros requeridos."
 },
 {
  "id": 17,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) está utilizando merge fields de listas relacionadas (related lists) en un prompt template asociado al objeto Account en Prompt Builder. ¿Qué debe considerar UC?",
  "options": [
   {
    "letter": "A",
    "text": "La generación del prompt no devolverá respuesta si no hay una lista relacionada asociada a la Cuenta en tiempo de ejecución."
   },
   {
    "letter": "B",
    "text": "La lista relacionada Activities en el objeto Account no está soportada porque es una relación polimórfica."
   },
   {
    "letter": "C",
    "text": "Si Person Accounts está habilitado, los merge fields no estarán disponibles para el objeto Account."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Al usar merge fields de listas relacionadas en Prompt Builder para el objeto Account, la lista relacionada de Activities no es compatible debido a que se trata de un campo polimórfico (que puede hacer referencia a múltiples tipos de objetos diferentes)."
 },
 {
  "id": 18,
  "category": "Trust Layer & Security",
  "text": "¿Qué parte de la arquitectura de Einstein Trust Layer aprovecha los datos propios de la organización dentro de un prompt para un large language model (LLM) con el fin de retornar respuestas relevantes y precisas con confianza?",
  "options": [
   {
    "letter": "A",
    "text": "Dynamic Grounding"
   },
   {
    "letter": "B",
    "text": "Prompt Defense"
   },
   {
    "letter": "C",
    "text": "Data Masking"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Dynamic Grounding dentro de Einstein Trust Layer enriquece los prompts enviados al LLM con datos específicos del negocio (registros de Salesforce, artículos de Knowledge) para generar respuestas precisas alineadas al contexto de la empresa."
 },
 {
  "id": 19,
  "category": "Agentforce Concepts",
  "text": "Universal Containers ha configurado un agente para gestionar solicitudes de devolución de clientes. Cuando un cliente inicia una devolución, el agente debe calcular un cargo por reabastecimiento específico. El agente necesita cotizar este monto exacto al cliente y luego reutilizar ese mismo valor al resumir el reembolso final. El Agentforce Specialist debe asegurar que el agente use lógica determinista para calcular la tarifa y reutilizar exactamente el mismo valor sin adivinar ni alucinar. ¿Cómo debería configurar el agente?",
  "options": [
   {
    "letter": "A",
    "text": "Ejecutar un Flow como agent action para calcular la tarifa y poner la salida del Flow a disposición directa de la respuesta. El agente usará el valor desde la memoria."
   },
   {
    "letter": "B",
    "text": "Definir una variable de contexto para la tarifa. Ejecutar un Flow como agent action para calcular la tarifa, asignar la salida del Flow a esa variable de contexto y hacer que el agente referencie la variable en sus respuestas."
   },
   {
    "letter": "C",
    "text": "Proporcionar la fórmula matemática de la tarifa en las instrucciones del sistema del agente e instruirle que recuerde el resultado para su reutilización."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "El cálculo determinista y la reutilización precisa de valores requieren gestión de estado mediante variables de contexto. Ejecutar un Flow calcula el valor y asignarlo a una variable garantiza que la misma cifra validada sea reutilizada en las interacciones subsecuentes sin variaciones del LLM."
 },
 {
  "id": 20,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) quiere crear un prompt template que extraiga de forma consistente el número de modelo de producto específico y la cantidad requerida desde la consulta en un correo electrónico para redactar una respuesta al cliente. ¿Qué buena práctica debería implementar UC para lograr este objetivo?",
  "options": [
   {
    "letter": "A",
    "text": "Incorporar preguntas abiertas para alentar respuestas detalladas."
   },
   {
    "letter": "B",
    "text": "Proporcionar instrucciones claras y positivas junto con ejemplos de pocos disparos (few-shot examples)."
   },
   {
    "letter": "C",
    "text": "Usar un ajuste de temperatura alto para incrementar la creatividad del resultado."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Nota: Para extracción estructurada y consistente de datos, las mejores prácticas de prompt engineering especifican dar instrucciones claras y positivas usando ejemplos 'few-shot'. (Nota sobre la clave del examen: En la versión oficial de la evaluación este ítem se encuentra registrado con la opción A)."
 },
 {
  "id": 21,
  "category": "Agentforce & Data",
  "text": "Al configurar una Data Library basada en carga de archivos, ¿cuáles son los tamaños máximos de archivo permitidos para archivos de texto/HTML y archivos PDF, respectivamente?",
  "options": [
   {
    "letter": "A",
    "text": "Hasta 100 MB para archivos de texto/HTML y hasta 4 MB para archivos PDF."
   },
   {
    "letter": "B",
    "text": "Hasta 50 MB tanto para archivos de texto/HTML como para archivos PDF."
   },
   {
    "letter": "C",
    "text": "Hasta 4 MB para archivos de texto/HTML y hasta 100 MB para archivos PDF."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Salesforce establece límites específicos según el tipo de archivo al subir datos a una Agentforce Data Library: los archivos de texto e HTML tienen un límite máximo de 4 MB, mientras que los archivos PDF permiten hasta 100 MB."
 },
 {
  "id": 22,
  "category": "Setup & Integration",
  "text": "Cloud Kicks (CK) recientemente finalizó el desarrollo de un nuevo prompt template que utiliza su propio large language model (LLM). Al intentar desplegar el change set a producción, CK recibe un error relacionado con el LLM utilizado en la plantilla. ¿Qué debería considerar el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "El prompt debe especificar explícitamente que es un LLM personalizado."
   },
   {
    "letter": "B",
    "text": "El API Name del LLM debe coincidir de forma idéntica entre el Sandbox y Producción."
   },
   {
    "letter": "C",
    "text": "El prompt template debe desactivarse antes del despliegue."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Los prompt templates referencian al modelo por su API Name. Si el nombre de API asignado al LLM en el entorno de producción no coincide exactamente con el usado en el Sandbox, el despliegue del change set fallará."
 },
 {
  "id": 23,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está implementando un proceso de verificación de clientes para su Service Agent donde la información sensible de la cuenta solo se puede consultar después de que el cliente pasa la verificación de identidad. El Agentforce Specialist necesita asegurar que esta regla de seguridad se aplique de manera determinista, evitando que el LLM omita el paso de verificación para ejecutar la búsqueda de la cuenta. ¿Qué debería configurar?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar una política de Prompt Defense en Einstein Trust Layer para enmascarar los datos sensibles hasta completar la verificación."
   },
   {
    "letter": "B",
    "text": "Almacenar el estado de verificación del usuario en una variable personalizada y aplicar un filtro de condición 'available when' a la acción de búsqueda de la cuenta, haciéndola invisible para el reasoning engine hasta que la variable sea evaluada como verdadera."
   },
   {
    "letter": "C",
    "text": "Agregar instrucciones en lenguaje natural en el subagente para indicarle al LLM que siempre priorice la verificación de clientes antes de buscar la cuenta."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La forma determinista de restringir acciones es controlar su visibilidad con la condición 'available when'. Al utilizar una variable personalizada de estado, la acción de búsqueda permanece oculta para el reasoning engine hasta que la variable confirme que la verificación fue exitosa."
 },
 {
  "id": 24,
  "category": "Agentforce Concepts",
  "text": "Cloud Kicks (CK) está lanzando un nuevo portal de socios en Experience Cloud. CK quiere proporcionar a los socios un agente que pueda responder preguntas sobre especificaciones de productos desde la base de conocimiento y permitirles enviar un nuevo Lead cuando identifiquen un cliente potencial. El agente debe ser accesible únicamente para usuarios socios autenticados en el portal. ¿Qué tipo de agente se requiere?",
  "options": [
   {
    "letter": "A",
    "text": "Service Agent"
   },
   {
    "letter": "B",
    "text": "Sales Agent"
   },
   {
    "letter": "C",
    "text": "Commerce Agent"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El Agentforce Service Agent es la plantilla fundamental para brindar soporte y autoservicio a usuarios externos autenticados en un sitio de Experience Cloud, ofreciendo respuestas fundamentadas en Knowledge y permitiendo la adición de custom actions (como crear un Lead)."
 },
 {
  "id": 25,
  "category": "Setup & Integration",
  "text": "Una empresa creó una acción personalizada en Apex invocada por un Employee Agent para obtener datos de una API externa. El método de callout usa el Session ID de Salesforce del usuario actual para autenticarse. El callout externo funciona perfectamente en la interfaz de usuario (UI), pero falla silenciosamente cuando el agente lo activa. ¿Cuál es la mejor práctica de arquitectura para solucionar esto?",
  "options": [
   {
    "letter": "A",
    "text": "Extender explícitamente la seguridad de la clase Apex al perfil del usuario con sesión iniciada."
   },
   {
    "letter": "B",
    "text": "Asegurar que el Employee Agent tenga asignado el permission set group AgentforceServiceAgentUserPsg."
   },
   {
    "letter": "C",
    "text": "Reemplazar la obtención del Session ID por un Named Credential."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Las llamadas a API externas desde agentes no deben depender del Session ID de la interfaz de usuario del usuario en pantalla. La mejor práctica de arquitectura en Salesforce es usar un Named Credential para gestionar la autenticación y los endpoints de los callouts de forma segura y consistente."
 },
 {
  "id": 26,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist en Universal Containers trabaja únicamente con herramientas no-code. Tienen muchas cuentas pequeñas que el equipo de ventas solo contacta periódicamente y quieren preparar al equipo antes de las llamadas mediante: Resumir compras pasadas, Mostrar productos en los que el contacto ha mostrado interés (capturados vía Data 360), y Proporcionar un resumen de conversaciones previas por correo y teléfono que tengan transcripciones. ¿Qué enfoque debería recomendar?",
  "options": [
   {
    "letter": "A",
    "text": "Usar un prompt template fundamentado (grounded) en datos de CRM y Data 360 utilizando modelos de lenguaje estándar."
   },
   {
    "letter": "B",
    "text": "Ajustar (fine-tuning) el modelo de lenguaje estándar debido a la complejidad de los datos."
   },
   {
    "letter": "C",
    "text": "Desplegar primero un modelo fundacional personalizado sobre estos datos."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Con las herramientas no-code de Salesforce, los usuarios pueden utilizar prompt templates fundamentados directamente en datos del CRM y Data Cloud junto a los modelos de lenguaje estándar, sin necesidad de realizar fine-tuning o entrenar modelos personalizados."
 },
 {
  "id": 27,
  "category": "Agentforce Concepts",
  "text": "Universal Containers (UC) necesita asegurar que su agente pueda procesar devoluciones de clientes validando inmediatamente la elegibilidad del pedido antes de proceder. UC desea mantener un flujo conversacional natural mientras garantiza que el paso de validación se cumpla estrictamente. ¿Qué debe hacer el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Usar Salesforce Flow para guiar al LLM en la validación del pedido y el proceso de devolución."
   },
   {
    "letter": "B",
    "text": "Usar un método Apex @InvocableMethod personalizado para gestionar todo el proceso de devolución."
   },
   {
    "letter": "C",
    "text": "Usar instrucciones procedimentales (procedural instructions) en Agent Script para forzar el paso de validación del pedido."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Las instrucciones procedimentales en Agent Script están diseñadas para garantizar una secuencia de ejecución determinista y obligatoria (como validar la elegibilidad) mientras se mantiene la flexibilidad conversacional del agente."
 },
 {
  "id": 28,
  "category": "Agentforce Concepts",
  "text": "Universal Containers ha desarrollado un agente para flujos de trabajo de originación de préstamos que debe manejar tanto la no-determinación como requerimientos estrictos de cumplimiento normativo. El agente necesita asegurar que los pasos de verificación de identidad y consulta de crédito se ejecuten en una secuencia precisa sin desviaciones. ¿Qué afirmación diferencia correctamente estos dos patrones de instrucciones en el enfoque de razonamiento híbrido de Agent Script?",
  "options": [
   {
    "letter": "A",
    "text": "Las instrucciones declarativas requieren la ejecución de Flows para la lógica de negocio, mientras que las instrucciones procedimentales son nativas de Agent Script pero no pueden acceder a sistemas externos."
   },
   {
    "letter": "B",
    "text": "Las instrucciones declarativas proporcionan flexibilidad conversacional mediante la interpretación del LLM, mientras que las instrucciones procedimentales usan el prefijo '->' para forzar un orden de ejecución garantizado con run, if y transiciones."
   },
   {
    "letter": "C",
    "text": "Las instrucciones declarativas solo funcionan en Canvas View, mientras que las procedimentales requieren Script View."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agent Script combina el razonamiento híbrido: las instrucciones declarativas permiten la interpretación flexible del LLM para la conversación, mientras que las instrucciones procedimentales (usando sintaxis como el prefijo -> y mandatos run) imponen la ejecución determinista y ordenada de pasos críticos de negocio."
 },
 {
  "id": 29,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) cuenta con un Flex prompt template que se ha utilizado durante 3 meses para responder preguntas basadas en datos del usuario. Ahora, UC quiere incluir un archivo PDF como segundo input. ¿Cuál es el mejor enfoque para lograr esto?",
  "options": [
   {
    "letter": "A",
    "text": "Reindexar para agregar un nuevo recurso a la plantilla existente."
   },
   {
    "letter": "B",
    "text": "Agregar un Resource en cualquier momento navegando a la sección Resources y configurando los inputs."
   },
   {
    "letter": "C",
    "text": "Descartar la plantilla Flex actual y crear una nueva con el recurso."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Los Flex prompt templates permiten extender sus entradas en cualquier momento agregando recursos (Resources) adicionales, tales como archivos o campos de registros, directamente desde el panel de configuración sin tener que recrear la plantilla."
 },
 {
  "id": 30,
  "category": "Trust Layer & Security",
  "text": "Un Agentforce Specialist desplegó un Service Agent en un sitio de Experience Cloud y habilitó Credential-Based User Verification. El especialista nota que todas las actualizaciones de registros (DML) muestran en el campo 'LastModifiedUser' al usuario comunitario autenticado (Community User) en lugar del usuario del agente (Agent User). ¿Qué debería explicar sobre el efecto en los campos de auditoría?",
  "options": [
   {
    "letter": "A",
    "text": "Se ha habilitado Credential-Based User Verification, lo que a su vez respeta la seguridad a nivel de campo y las reglas de compartición del usuario autenticado."
   },
   {
    "letter": "B",
    "text": "El modo de ejecución del Flow para el agente está configurado como System Context Without Sharing."
   },
   {
    "letter": "C",
    "text": "Se ha habilitado Token-Based User Verification, respetando los permisos del usuario."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Credential-Based User Verification vincula las interacciones y acciones del agente al contexto de seguridad del usuario autenticado de Experience Cloud. Por lo tanto, los campos de auditoría (como Last Modified By) registrarán correctamente la identidad verificada del usuario cliente."
 },
 {
  "id": 31,
  "category": "Setup & Integration",
  "text": "Universal Containers está desplegando dos agentes simultáneamente: un Sales Productivity Agent interno para empleados y un Service Agent de cara al cliente en su sitio de Experience Cloud. Un Agentforce Specialist está configurando permisos y necesita entender el contexto de seguridad correcto para cada uno. ¿Qué afirmación describe con precisión el modelo de ejecución?",
  "options": [
   {
    "letter": "A",
    "text": "El Service Agent de cara al cliente hereda el contexto de seguridad del perfil del usuario invitado (guest user) del sitio de Experience Cloud de forma predeterminada, requiriendo permisos de objeto en el perfil invitado para todas las acciones que ejecute el agente."
   },
   {
    "letter": "B",
    "text": "El Sales Productivity Agent interno ejecuta acciones utilizando los propios permisos del empleado autenticado de Salesforce, mientras que el Service Agent de cara al cliente ejecuta acciones como un usuario dedicado Einstein Service Agent User con su propio permission set."
   },
   {
    "letter": "C",
    "text": "Ambos agentes ejecutan acciones como un usuario dedicado Einstein Service Agent User con su propio permission set configurado según sea necesario para el agente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Los agentes internos orientados a empleados operan bajo el modelo de acceso del usuario autenticado de Salesforce, respetando sus permisos y reglas de compartición. En cambio, un Service Agent enfocado al cliente en Experience Cloud se ejecuta utilizando la identidad dedicada del Einstein Service Agent User con su propio conjunto de permisos."
 },
 {
  "id": 32,
  "category": "Agentforce Concepts",
  "text": "Universal Containers ha configurado un agente para gestionar solicitudes de devolución de clientes. Cuando un cliente inicia una devolución, el agente debe calcular un cargo por reabastecimiento específico. El agente necesita cotizar este monto exacto al cliente y luego reutilizar ese mismo valor al resumir el reembolso final. El Specialist necesita asegurar que el agente use lógica determinista para calcular la tarifa y reutilice de forma consistente exactamente el mismo valor sin adivinar ni alucinar. ¿Cómo debería el especialista configurar el agente para lograr este comportamiento?",
  "options": [
   {
    "letter": "A",
    "text": "Definir una variable de contexto para la tarifa. Ejecutar un Flow como agent action para calcular la tarifa, asignar la salida del Flow a esa variable de contexto y hacer que el agente referencie esa variable en sus respuestas."
   },
   {
    "letter": "B",
    "text": "Ejecutar un Flow como agent action para calcular la tarifa y poner la salida del Flow a disposición directa de la respuesta del agente. El agente podrá continuar usando este valor desde la memoria."
   },
   {
    "letter": "C",
    "text": "Proporcionar la fórmula matemática para el cargo por reabastecimiento en las instrucciones del sistema del agente e instruirle que recuerde el resultado para su reutilización."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El cálculo y reutilización determinista requiere gestión de estado mediante variables de contexto. La tarifa debe ser calculada por una acción de Flow y guardada en una variable de contexto para que el mismo valor validado sea referenciado posteriormente sin recalcular ni alucinar."
 },
 {
  "id": 33,
  "category": "Prompt Engineering",
  "text": "El equipo de soporte de Coral Cloud Resorts necesita crear un Flex prompt template que resuma historiales de casos complejos para transferencias entre agentes. El objetivo es asegurar que los resúmenes sean concisos y sigan una estructura específica de tres partes: Issue, Steps Taken, y Next Action. ¿Qué debería recomendar un Agentforce Specialist para garantizar un formato de salida consistente?",
  "options": [
   {
    "letter": "A",
    "text": "Usar razonamiento en cadena de pensamientos (chain-of-thought reasoning)."
   },
   {
    "letter": "B",
    "text": "Definir la estructura de salida deseada con encabezados explícitos en las instrucciones."
   },
   {
    "letter": "C",
    "text": "Usar un prompt template-triggered flow para formatear las respuestas."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "En Prompt Builder, la forma más limpia de obtener una estructura de texto consistente es definir la forma de salida directamente en las instrucciones del prompt, incluyendo los encabezados exactos que se deben utilizar (Issue, Steps Taken, Next Action)."
 },
 {
  "id": 34,
  "category": "Agentforce Concepts",
  "text": "Northern Trail Outfitters está probando un agente conectado a una Agentforce Data Library. El agente recupera exitosamente los datos correctos de la librería, pero entrega la respuesta al usuario en estructuras JSON puras en lugar de un lenguaje conversacional gramaticalmente correcto. ¿Qué evaluación de calidad tiene una puntuación deficiente en este escenario?",
  "options": [
   {
    "letter": "A",
    "text": "Coherence"
   },
   {
    "letter": "B",
    "text": "Conciseness"
   },
   {
    "letter": "C",
    "text": "Completeness"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La métrica de Coherence evalúa si la respuesta generada es comprensible, estructurada lógicamente y presentada en un lenguaje natural fluido. Entregar JSON sin formato falla en coherencia conversacional para el cliente."
 },
 {
  "id": 35,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist quiere solucionar un problema en un agente que está alucinando enlaces web (weblinks). El agente tiene una acción que utiliza un prompt template, el cual usa un knowledge retriever para generar el texto de salida. ¿Cuál es un paso apropiado para encontrar la causa raíz del comportamiento de alucinación?",
  "options": [
   {
    "letter": "A",
    "text": "Examinar el nombre del subagente (anteriormente llamado topic) y la descripción de clasificación en busca de guardrails contra alucinaciones."
   },
   {
    "letter": "B",
    "text": "Examinar las instrucciones del prompt y el contenido de los fragmentos (chunks) mostrados en la salida resuelta del prompt."
   },
   {
    "letter": "C",
    "text": "Examinar las instrucciones del subagente y asegurar que la palabra 'ALWAYS' se utilice en los guardrails contra alucinaciones."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Las alucinaciones suelen ser causadas por problemas en la construcción del prompt o por información irrelevante recuperada. Inspeccionar las instrucciones del prompt template y los fragmentos (chunks) recuperados permite determinar si el origen es una frase ambigua o datos de grounding faltantes."
 },
 {
  "id": 36,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist en Universal Containers está intentando configurar un nuevo Field Generation prompt template siguiendo estos pasos: 1. Crear un nuevo Field Generation prompt template. 2. Elegir Case como tipo de objeto. 3. Seleccionar el campo personalizado AI_Analysis__c como campo objetivo. Después de crear la plantilla, la guarda, la prueba y la activa. Sin embargo, al ir a un registro de caso, el campo AI Analysis no muestra el ícono del destello (Sparkle) en el lápiz de edición, comportándose como un campo normal. ¿Qué paso crítico omitió el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Olvidó editar el diseño de página (Lightning page layout) y asociar el campo al prompt template."
   },
   {
    "letter": "B",
    "text": "Olvidó reactivar el diseño de página para el objeto Case después de activar el Field Generation prompt template."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Para que los campos generados por IA muestren el ícono del destello (Sparkle), el campo objetivo debe asociarse explícitamente con el prompt template dentro del diseño de página (Lightning page layout) en la interfaz."
 },
 {
  "id": 37,
  "category": "Agentforce & Data",
  "text": "En la configuración de una Data Library basada en conocimiento, ¿cuál es la diferencia principal entre los campos de identificación (identifying fields) y los campos de contenido (content fields)?",
  "options": [
   {
    "letter": "A",
    "text": "Los campos de identificación ayudan a ubicar el artículo de conocimiento correcto, mientras que los campos de contenido enriquecen las respuestas de la IA con información detallada."
   },
   {
    "letter": "B",
    "text": "Los campos de identificación categorizan los artículos con fines de indexación, mientras que los campos de contenido proporcionan un resumen breve para mostrar."
   },
   {
    "letter": "C",
    "text": "Los campos de identificación destacan términos clave para la puntuación de relevancia, mientras que los campos de contenido almacenan el texto completo del artículo para su recuperación."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Los identifying fields (como título o número de artículo) sirven para buscar y localizar el artículo adecuado según la consulta. Los content fields contienen el cuerpo y detalles del texto que la IA utilizará para generar la respuesta enriquecida."
 },
 {
  "id": 38,
  "category": "Agentforce & Data",
  "text": "Antes de desplegar una solución de Retrieval Augmented Generation (RAG) a producción, un Agentforce Specialist quiere evaluar si sus retrievers personalizados están mostrando los fragmentos (chunks) más relevantes para consultas específicas sin escribir código. ¿Qué herramienta debería utilizar?",
  "options": [
   {
    "letter": "A",
    "text": "El Retriever Playground"
   },
   {
    "letter": "B",
    "text": "Agentforce Testing Center"
   },
   {
    "letter": "C",
    "text": "Data 360 Query Editor"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El Retriever Playground es la herramienta no-code diseñada para probar y validar el comportamiento de retrievers individuales, ejecutar consultas de prueba, inspeccionar los chunks recuperados y ajustar parámetros o filtros."
 },
 {
  "id": 39,
  "category": "Setup & Integration",
  "text": "Universal Containers utiliza Agentforce para gestionar operaciones de servicio al cliente. Sin embargo, usa un sistema de agentes de IA de terceros completamente separado para la logística de almacén. UC quiere que el agente de servicio al cliente de Agentforce pueda solicitar reenrutamientos de envío y colaborar de forma autónoma con el agente del almacén. ¿Qué protocolo estándar abierto está diseñado específicamente para facilitar este tipo de colaboración multiplataforma?",
  "options": [
   {
    "letter": "A",
    "text": "Model Context Protocol (MCP)"
   },
   {
    "letter": "B",
    "text": "Estándar Advanced Data Retrieval (ADR)"
   },
   {
    "letter": "C",
    "text": "Protocolo Agent-to-Agent (A2A)"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El protocolo Agent-to-Agent (A2A) es el estándar abierto para la interoperabilidad entre agentes de diferentes plataformas o proveedores, permitiéndoles comunicarse, colaborar y delegar tareas de forma autónoma."
 },
 {
  "id": 40,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está construyendo un Agentforce Service Agent para gestionar restablecimientos de contraseña. El agente debe verificar primero la identidad del cliente mediante un código por correo y, una vez confirmada, ejecutar el Flow de restablecimiento existente. El subagente de verificación de identidad ya está configurado. ¿Qué enfoque de implementación debería recomendar el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un agent action que referencie el Flow de restablecimiento, asignarlo al subagente de verificación y llamarlo determinísticamente mediante lógica condicional de Agent Script."
   },
   {
    "letter": "B",
    "text": "Crear un subagente separado llamado Password Reset, configurarlo con una acción que invoque el Flow y pasar la variable de verificación como contexto para que el subagente valide el estado verificado antes de proceder."
   },
   {
    "letter": "C",
    "text": "Agregar una instrucción al subagente de verificación indicando que active el Flow al confirmar la identidad y guardar la intención en una variable de conversación."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Restablecer contraseña es una tarea operativa distinta que debe modelarse en un subagente separado con su propia acción. El estado verificado se pasa o referencía como contexto, manteniendo una clara separación de responsabilidades entre subagentes."
 },
 {
  "id": 41,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) tiene un nuevo proyecto de IA. ¿Qué debe considerar UC al agregar una lista relacionada (related list) en la página de Account para ser utilizada en un prompt template?",
  "options": [
   {
    "letter": "A",
    "text": "Se debe usar Prompt Builder para asignar los campos de la lista relacionada como formato JSON."
   },
   {
    "letter": "B",
    "text": "Después de seleccionar una lista relacionada de Account, usar el selector de campos (field picker) para elegir los merge fields en Prompt Builder."
   },
   {
    "letter": "C",
    "text": "Los campos de la lista relacionada se basan en el diseño de página predeterminado de Account para el usuario en ejecución."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Al configurar recursos de listas relacionadas para un objeto en Prompt Builder, se debe utilizar el selector de campos (field picker) para indicar explícitamente cuáles merge fields de los registros relacionados se insertarán en el prompt."
 },
 {
  "id": 42,
  "category": "Agentforce & Data",
  "text": "Pacific Distribution Co. está implementando un sistema para gestionar el soporte de pedidos de socios y consultas de inventario. La empresa debe asegurar que los documentos grandes se procesen de manera efectiva para mejorar la precisión de recuperación. Comprender cómo se dividen e indexan los documentos es crucial. ¿Cuál es una característica clave del proceso de fragmentación (chunking)?",
  "options": [
   {
    "letter": "A",
    "text": "El chunking divide documentos grandes en unidades más pequeñas llamadas pasajes (passages)."
   },
   {
    "letter": "B",
    "text": "El proceso de chunking devuelve documentos enteros al large language model (LLM) para su procesamiento."
   },
   {
    "letter": "C",
    "text": "Las estrategias de chunking son intercambiables y no afectan el proceso de recuperación."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El proceso de chunking divide archivos extensos en fragmentos o pasajes de texto más pequeños y centrados. Esto permite que los retrievers encuentren y devuelvan solo las secciones más relevantes durante la búsqueda semántica, optimizando el uso del contexto del LLM."
 },
 {
  "id": 43,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist observa que el agente dirige con frecuencia a clientes con consultas claras de facturación hacia el subagente de resolución general. Este desvío incorrecto está causando un aumento en el tiempo promedio de atención y el incumplimiento de acuerdos de nivel de servicio (SLA). El gerente requiere una solución rápida de implementar pero que conserve la capacidad del agente para manejar conversaciones complejas. ¿Cuál es el enfoque más apropiado?",
  "options": [
   {
    "letter": "A",
    "text": "Actualizar las System Instructions globales del agente para incluir una lista de palabras clave prohibidas para cada subagente."
   },
   {
    "letter": "B",
    "text": "Auditar las instrucciones de los subagentes en busca de competencia semántica e implementar filtros deterministas para guiar la selección del planner."
   },
   {
    "letter": "C",
    "text": "Crear un sub-flow 'Router' que use un elemento Decision para asignar manualmente cada solicitud entrante a un subagente específico."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "El enrutamiento erróneo ocurre por competencia semántica (solapamiento en las descripciones de subagentes). Ajustar las instrucciones para clarificar el alcance y agregar filtros deterministas ('available when') resuelve el problema rápidamente manteniendo la flexibilidad conversacional."
 },
 {
  "id": 44,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está construyendo un Agentforce Service Agent para rastrear compras. Para almacenar el número de pedido del cliente durante la conversación, el especialista declara e inicializa una variable en Agent Script usando 'order_id: string = \"\"', omitiendo la palabra clave mutable. Durante las pruebas, el agente intenta actualizar la variable mediante @utils.setVariables. ¿Cuál es el resultado de esta declaración en tiempo de ejecución?",
  "options": [
   {
    "letter": "A",
    "text": "La variable es mutable por defecto; la palabra clave es opcional, permitiendo que el agente actualice la variable."
   },
   {
    "letter": "B",
    "text": "La declaración es un error de sintaxis y el agente no se podrá desplegar."
   },
   {
    "letter": "C",
    "text": "La variable se trata como de solo lectura; no puede ser actualizada por acciones o @utils.setVariables en tiempo de ejecución porque carece de la palabra clave mutable."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "En Agent Script, las variables son estrictamente de solo lectura a menos que se declaren explícitamente con la palabra clave 'mutable' (ej. order_id: mutable string = \"\"). Sin ella, los intentos de actualización en tiempo de ejecución fallarán."
 },
 {
  "id": 45,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desplegó un Service Agent a producción que maneja facturación, devoluciones y soporte técnico a través de 12 subagentes. Tras un cambio de procesos, se actualizaron las instrucciones del subagente de Facturación. Días después, el equipo reporta que las interacciones de facturación se están enrutando de forma intermitente hacia el subagente de FAQ General. ¿Qué enfoque es el más efectivo para diagnosticar la causa y confirmar el impacto total?",
  "options": [
   {
    "letter": "A",
    "text": "Habilitar Utterance Analysis en la org de producción para revisar registros de conversación y ajustar las instrucciones en Agent Builder hasta bajar la tasa de error."
   },
   {
    "letter": "B",
    "text": "Replicar cada escenario de falla sospechoso manualmente en el Conversation Preview de Agentforce Builder y documentar los resultados antes de redesplegar."
   },
   {
    "letter": "C",
    "text": "Volver a ejecutar el conjunto de pruebas almacenado en Agentforce Testing Center contra el agente modificado, revisar las métricas de Subagent Pass % y Action Pass % para aislar regresiones, y extender las pruebas."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Ejecutar pruebas automatizadas en lote con Agentforce Testing Center permite evaluar regresiones de forma repetible, comparando métricas como Subagent Pass % y Action Pass % para identificar con exactitud qué cambios causaron los errores de enrutamiento."
 },
 {
  "id": 46,
  "category": "Setup & Integration",
  "text": "¿Cuál es una opción válida de enrutamiento de Omni-Channel para un canal de mensajería (messaging channel)?",
  "options": [
   {
    "letter": "A",
    "text": "Agentforce Service Agent"
   },
   {
    "letter": "B",
    "text": "Autolaunched flow"
   },
   {
    "letter": "C",
    "text": "Agentforce Employee Agent"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Los canales de mensajería para clientes pueden enrutarse a través de Omni-Channel utilizando un inbound flow que define al Agentforce Service Agent como el destino de enrutamiento del trabajo."
 },
 {
  "id": 47,
  "category": "Agentforce & Data",
  "text": "En una Data Library basada en conocimiento, ¿qué funcionalidad proporciona habilitar la opción 'Filter by Knowledge Data Categories'?",
  "options": [
   {
    "letter": "A",
    "text": "Aplica metadatos personalizados de las categorías de datos seleccionadas a los artículos para mejorar la relevancia."
   },
   {
    "letter": "B",
    "text": "Organiza los artículos de conocimiento indexados en secciones separadas según sus categorías asignadas."
   },
   {
    "letter": "C",
    "text": "Limita los artículos indexados únicamente a aquellos que pertenecen a las categorías de datos seleccionadas, mejorando la precisión de indexación."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Filtrar por Data Categories en la configuración de la librería restringe los artículos de Salesforce Knowledge que serán procesados e indexados, asegurando que solo el contenido relevante de esas categorías sea utilizado para la recuperación de la IA."
 },
 {
  "id": 48,
  "category": "Setup & Integration",
  "text": "¿Qué elemento debe usar un Agentforce Specialist en un Omni-Flow para enrocar conversaciones hacia un agente?",
  "options": [
   {
    "letter": "A",
    "text": "Route Conversation"
   },
   {
    "letter": "B",
    "text": "Route Work"
   },
   {
    "letter": "C",
    "text": "Route to Agent"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "El elemento estándar en Flow para enviar elementos de trabajo (incluidas las sesiones de mensajería) hacia un destino de Omni-Channel, como el Agentforce Service Agent, es 'Route Work'."
 },
 {
  "id": 49,
  "category": "Agentforce & Data",
  "text": "Una empresa necesita asegurar que sus clientes siempre reciban respuestas basadas en la versión más actual de la documentación de soporte. ¿Qué debería recomendar un Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Usar una Agentforce Data Library (ADL) basada en archivos y activar el control de versiones para recuperar el documento más reciente."
   },
   {
    "letter": "B",
    "text": "Usar una Agentforce Data Library (ADL) basada en conocimiento; los artículos de conocimiento tienen control de versiones nativo, por lo que los agentes recuperan automáticamente la versión publicada actual."
   },
   {
    "letter": "C",
    "text": "Usar cualquiera de los dos tipos de ADL: ambos sirven automáticamente el contenido más reciente una vez que se reconstruye el índice."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Salesforce Knowledge gestiona el ciclo de vida, estados de publicación y versiones de los artículos. Una librería de datos basada en conocimiento utiliza este origen gobernado, garantizando que el agente siempre entregue respuestas fundamentadas en la versión publicada activa."
 },
 {
  "id": 50,
  "category": "Agentforce Concepts",
  "text": "El Agentforce Service Agent de Universal Containers lleva 4 semanas en producción. Agent Optimization en Agentforce Observability muestra que el grupo de intenciones principal tiene una puntuación de baja calidad debido a coincidencias ambiguas de subagentes. Session Trace confirma que el reasoning engine selecciona el subagente equivocado en la mayoría de los turnos. ¿Cuál es la solución más viable?",
  "options": [
   {
    "letter": "A",
    "text": "Refinar las descripciones de clasificación y el alcance de los subagentes en competencia para eliminar el solapamiento semántico que causa los errores de enrutamiento."
   },
   {
    "letter": "B",
    "text": "Usar los datos de intenciones de Agent Optimization para identificar los fallos más frecuentes y crear nuevos subagentes con descripciones muy acotadas para cada uno."
   },
   {
    "letter": "C",
    "text": "Ampliar la librería de datos del agente con artículos de conocimiento adicionales que cubran los escenarios desviados."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El enrutamiento erróneo ocurre cuando dos o más subagentes tienen nombres, descripciones o alcances que se solapan semánticamente. Clarificar y delimitar las descripciones de clasificación elimina la ambigüedad para el reasoning engine."
 },
 {
  "id": 51,
  "category": "Prompt Engineering",
  "text": "Un gerente de servicio desea usar Salesforce Prompt Builder para ayudar a sus agentes a resumir notas de caso tras una llamada. El resumen debe: Capturar el problema, pasos de solución y acciones futuras; No superar 5 oraciones; Usar lenguaje sencillo (sin jerga); Si no hay acciones futuras, indicar explícitamente 'No next action required'. ¿Qué construcciones clave de prompt cumplen con estos requerimientos?",
  "options": [
   {
    "letter": "A",
    "text": "Role, Task, LLM Clarity Score, y Format"
   },
   {
    "letter": "B",
    "text": "Role, Task, Token Size Limit, y Format"
   },
   {
    "letter": "C",
    "text": "Task, Context, Constraints, y Format"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Un prompt bien estructurado consta de Tarea (resumir notas), Contexto (datos del caso), Restricciones (máximo 5 oraciones, sin jerga, frase específica si no hay acciones) y Formato (estructura de entrega)."
 },
 {
  "id": 52,
  "category": "Agentforce & Data",
  "text": "¿Qué sucede cuando un fragmento de texto (chunk) es vectorizado?",
  "options": [
   {
    "letter": "A",
    "text": "Crea representaciones numéricas del contenido del fragmento para permitir la búsqueda y recuperación basada en el significado (semántica)."
   },
   {
    "letter": "B",
    "text": "Encripta el contenido para que pueda almacenarse de forma segura en Data 360 data spaces."
   },
   {
    "letter": "C",
    "text": "Reduce el tamaño del archivo original para disminuir los costos de Data 360."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La vectorización convierte el texto en embeddings numéricos que representan su significado semántico. Esto permite que el motor de búsqueda compare la intención de la consulta del usuario con los fragmentos más afines, más allá de simples coincidencias de palabras clave."
 },
 {
  "id": 53,
  "category": "Agentforce & Data",
  "text": "Universal Containers necesita fundamentar un nuevo agente de Agentforce con datos estructurados almacenados en un sistema externo sin duplicarlos en Data 360, garantizando precisión en tiempo real y minimizando costos de almacenamiento. ¿Qué concepto de Data 360 se debe utilizar?",
  "options": [
   {
    "letter": "A",
    "text": "Establecer un índice semántico para contenido externo."
   },
   {
    "letter": "B",
    "text": "Utilizar Zero Copy para acceder a datos externos sin ingestión."
   },
   {
    "letter": "C",
    "text": "Configurar un data stream para importar los datos a Data 360."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Zero Copy Data Federation permite acceder, consultar y utilizar datos estructurados alojados en plataformas externas directamente desde Data 360 sin necesidad de copiarlos, duplicar almacenamiento ni realizar ingestiones de datos físicas."
 },
 {
  "id": 54,
  "category": "Agentforce & Data",
  "text": "Universal Containers (UC) ha desplegado varios Employee Agents especializados como IT Support, HR Assistant y Procurement. Recientemente se reportó un alto volumen de interacciones fallidas porque los empleados eligen el agente incorrecto para sus solicitudes (por ejemplo, pedirle al agente de HR que restablezca una contraseña). UC desea mejorar la experiencia y centralizar el control. ¿Qué enfoque arquitectónico se debe recomendar?",
  "options": [
   {
    "letter": "A",
    "text": "Crear una regla de validación personalizada en el objeto Agent Session para bloquear prompts que no coincidan."
   },
   {
    "letter": "B",
    "text": "Implementar una arquitectura Single Org Multi-Agent (SOMA) que actúe como un punto de entrada centralizado para interpretar la intención del usuario y enrocar la solicitud al agente especializado correcto."
   },
   {
    "letter": "C",
    "text": "Desplegar una arquitectura de agentes independientes donde cada uno pida verificar el departamento antes de responder."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "SOMA (Single Org Multi-Agent) establece un agente orquestador primario como punto de contacto único. Este interpreta la intención del usuario y delega la tarea al agente especializado correspondiente, eliminando la necesidad de que el usuario adivine a quién dirigirse."
 },
 {
  "id": 55,
  "category": "Agentforce & Data",
  "text": "Universal Containers opera un portal de autoservicio respaldado por un Agentforce Service Agent. El equipo de cumplimiento mantiene una base de Salesforce Knowledge con guías publicadas. ¿Cuál es el enfoque más eficiente para asegurar que el agente recupere únicamente contenido publicado actual mediante comprensión semántica sin mostrar artículos obsoletos?",
  "options": [
   {
    "letter": "A",
    "text": "Crear una acción usando Salesforce Flow para consultar el objeto de datos de Knowledge (DMO) en tiempo de ejecución."
   },
   {
    "letter": "B",
    "text": "Crear una Agentforce Data Library conectada a Salesforce Knowledge, filtrada solo a artículos publicados, permitiendo que el agente fundamente respuestas mediante búsqueda semántica RAG que refleje actualizaciones automáticamente."
   },
   {
    "letter": "C",
    "text": "Configurar un retriever personalizado en Einstein Studio conectado a un índice de búsqueda de Data 360."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Conectar una Agentforce Data Library a Salesforce Knowledge filtrando por estado publicado aprovecha el gobierno nativo de artículos. El índice se actualiza automáticamente conforme se publican o desarchivan artículos, ofreciendo fundamentación RAG semántica sin código."
 },
 {
  "id": 56,
  "category": "Agentforce & Data",
  "text": "Un Agentforce Specialist se prepara para subir varios documentos de políticas en PDF a una nueva Data Library basada en archivos. Para aprovechar el procesamiento avanzado con Intelligent Context, ¿cómo debe proceder?",
  "options": [
   {
    "letter": "A",
    "text": "Subir hasta cinco PDFs que pesen 100 MB o menos."
   },
   {
    "letter": "B",
    "text": "Subir hasta cinco PDFs que pesen 10 MB o menos para permitir que el sistema aplique automáticamente el procesamiento de Intelligent Context."
   },
   {
    "letter": "C",
    "text": "Habilitar manualmente Intelligent Context en Data 360 antes de subir los archivos."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "El procesamiento avanzado de Intelligent Context se aplica automáticamente en librerías de archivos cuando se suben hasta 5 archivos PDF con un tamaño de 10 MB o menor por archivo."
 },
 {
  "id": 57,
  "category": "Setup & Integration",
  "text": "Universal Containers está creando una nueva acción de Apex que acepta una colección de valores de texto (como una lista de nombres de productos) como parámetro de entrada. Al configurar los metadatos de la acción en Agentforce Assets, ¿qué tipo complejo de datos (complex_data_type_name) debe utilizarse para mapear correctamente esta entrada de colección?",
  "options": [
   {
    "letter": "A",
    "text": "lightning__stringType"
   },
   {
    "letter": "B",
    "text": "apex__String"
   },
   {
    "letter": "C",
    "text": "lightning__textType"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Los metadatos de las acciones en Agentforce deben mapear las colecciones y tipos de datos a los tipos Lightning compatibles por la plataforma, siendo 'lightning__stringType' la definición correcta para listas o colecciones de texto."
 },
 {
  "id": 58,
  "category": "Agentforce Concepts",
  "text": "Universal Containers creó la acción 'Issue Refund'. Las reglas de negocio dictan que solo se pueden emitir reembolsos si el Account_Tier del cliente es 'Platinum'. Actualmente, el agente confía en las instrucciones del sistema, pero ocasionalmente alucina autorización para clientes Standard. ¿Cómo deben usarse los filtros para asegurar de forma determinista que no se ejecute la acción sin cumplir el criterio?",
  "options": [
   {
    "letter": "A",
    "text": "Actualizar las instrucciones del sistema con una regla estricta para filtrar solicitudes de reembolso si el nivel no es Platinum."
   },
   {
    "letter": "B",
    "text": "Aplicar un filtro de texto a la sesión del agente para bloquear la palabra 'refund' a menos que sea un cliente Platinum."
   },
   {
    "letter": "C",
    "text": "Configurar un filtro de condición en la acción 'Issue Refund' (Action Condition filter) para que solo esté disponible cuando Account_Tier sea igual a 'Platinum'."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Los filtros de condición de acción (Action Filters / Action Conditions) ocultan la acción al reasoning engine a menos que las condiciones del registro o variables se cumplan, garantizando una restricción determinista que no depende de la interpretación del LLM."
 },
 {
  "id": 59,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desea validar sistemáticamente las respuestas de sus agentes antes del despliegue usando un proceso de prueba escalable. ¿Qué enfoque de Testing Center debe implementar?",
  "options": [
   {
    "letter": "A",
    "text": "Subir una plantilla CSV de prueba estructurada y ejecutar casos de prueba en lote (batch test cases) en Testing Center."
   },
   {
    "letter": "B",
    "text": "Interactuar manualmente con el agente en Builder hasta que las respuestas parezcan correctas."
   },
   {
    "letter": "C",
    "text": "Utilizar usuarios piloto en producción para marcar respuestas incorrectas tras el lanzamiento."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Agentforce Testing Center permite cargar archivos CSV estructurados con enunciados de prueba (utterances), clasificaciones esperadas y resultados deseados para ejecutar evaluaciones masivas y repetibles antes de la puesta en producción."
 },
 {
  "id": 60,
  "category": "Setup & Integration",
  "text": "Cloud Kicks utiliza un agente de terceros para investigación y un agente de Agentforce para servicio al cliente. ¿Qué protocolo diseñado a medida permite la comunicación entre agentes de diferentes proveedores?",
  "options": [
   {
    "letter": "A",
    "text": "Model Context Protocol (MCP)"
   },
   {
    "letter": "B",
    "text": "Application Programming Interface (API)"
   },
   {
    "letter": "C",
    "text": "Agent-to-Agent (A2A)"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El protocolo Agent-to-Agent (A2A) es el estándar abierto creado para permitir la comunicación, intercambio de contexto y delegación de tareas entre agentes de IA independientes que residen en distintas plataformas o proveedores."
 },
 {
  "id": 61,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) está desplegando varios prompt templates para asistir a sus agentes de soporte utilizando los modelos de lenguaje estándar de Salesforce. La directiva requiere que las respuestas generadas reflejen de forma consistente un tono empático y altamente profesional. UC solo permite el uso de large language models (LLMs) estándar. ¿Cuál es la técnica de prompt engineering más efectiva que debe implementar el especialista en Prompt Builder?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar el tono de la plantilla con un conjunto de datos de interacciones pasadas para alterar permanentemente el tono predeterminado del LLM."
   },
   {
    "letter": "B",
    "text": "Incluir una instrucción directa pidiendo al LLM que asuma un rol específico (por ejemplo, 'Actúa como un agente de soporte empático') para proporcionar contexto y establecer el tono."
   },
   {
    "letter": "C",
    "text": "Incluir preguntas de lista de selección múltiple dentro del prompt template para probar sistemáticamente la comprensión del LLM antes de generar la respuesta."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La asignación de roles (role-based prompting) es la técnica adecuada para moldear el tono y comportamiento del modelo sin necesidad de realizar modificaciones o entrenamientos en los modelos base."
 },
 {
  "id": 62,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist activó Einstein Generative AI en Setup. Ahora desea crear un prompt template personalizado en Prompt Builder. Sin embargo, no puede acceder a Prompt Builder en el menú de Setup. ¿Qué está causando el problema?",
  "options": [
   {
    "letter": "A",
    "text": "El permission set Prompt Template User no se asignó correctamente."
   },
   {
    "letter": "B",
    "text": "El permission set Prompt Template Manager no se asignó correctamente."
   },
   {
    "letter": "C",
    "text": "El large language model (LLM) no se configuró correctamente en Data 360."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Para poder acceder a la interfaz de Prompt Builder y crear o administrar plantillas de prompt, se requiere tener asignado el permission set 'Prompt Template Manager'. El permiso 'Prompt Template User' solo autoriza la ejecución de las plantillas creadas."
 },
 {
  "id": 63,
  "category": "Agentforce & Data",
  "text": "Universal Containers ha fragmentado (chunked) y vectorizado exitosamente sus notas de reunión no estructuradas dentro de un índice de búsqueda en Data 360. Un Agentforce Specialist necesita conectar estos datos a un prompt template para refinar los criterios de búsqueda y recuperar la información más relevante. ¿Cómo debe lograrlo?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un Flex template que haga referencia a un data lake object (DLO)."
   },
   {
    "letter": "B",
    "text": "Crear un Flex template que haga referencia a un retriever dentro del prompt template."
   },
   {
    "letter": "C",
    "text": "Crear un Flex template que haga referencia directa al data model object (DMO)."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Una vez que los datos no estructurados están indexados y vectorizados en Data 360, las plantillas de prompt se conectan a un retriever. El retriever realiza la búsqueda semántica en el índice y devuelve los pasajes relevantes para fundamentar (grounding) la respuesta."
 },
 {
  "id": 64,
  "category": "Prompt Engineering",
  "text": "¿Qué requerimiento de negocio representa un buen caso de uso para utilizar Prompt Builder?",
  "options": [
   {
    "letter": "A",
    "text": "Pronosticar tendencias de ventas futuras basándose en datos históricos."
   },
   {
    "letter": "B",
    "text": "Redactar la propuesta de una cotización en respuesta a una solicitud de presupuesto."
   },
   {
    "letter": "C",
    "text": "Identificar leads potenciales de alto valor basándose en el lead score."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Prompt Builder está diseñado para la generación de texto generativo contextualizado con datos del CRM (como redactar propuestas o correos). La predicción de tendencias o la puntuación de leads son casos de uso analíticos y predictivos atendidos por Einstein Predictions."
 },
 {
  "id": 65,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist está creando una custom agent action. El subagente (anteriormente llamado topic) se selecciona correctamente, pero la acción no. ¿Qué componente de la estructura de la acción en Agent Script ayuda al large language model (LLM) a decidir cuándo utilizar la acción?",
  "options": [
   {
    "letter": "A",
    "text": "target"
   },
   {
    "letter": "B",
    "text": "label"
   },
   {
    "letter": "C",
    "text": "description"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El campo 'description' de una acción es lo que lee el razonador (LLM) para comprender su propósito y decidir cuándo invocarla. Una descripción ambigua suele provocar que el agente elija el subagente correcto pero no la acción adecuada."
 },
 {
  "id": 66,
  "category": "Trust Layer & Security",
  "text": "Un Agentforce Specialist está evaluando una conversación de un agente. ¿Por qué es importante considerar las intenciones (intents) y las métricas de sesión dentro de Observability?",
  "options": [
   {
    "letter": "A",
    "text": "Para evaluar el desempeño general del agente."
   },
   {
    "letter": "B",
    "text": "Para evaluar por qué el agente no pudo responder a la pregunta específica de un usuario."
   },
   {
    "letter": "C",
    "text": "Para evaluar la tasa de desviación (deflection rate) del agente exclusivamente."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Las métricas de intenciones y de sesión en Agentforce Observability brindan una visión holística para analizar el rendimiento general, patrones de uso y efectividad global de las interacciones del agente."
 },
 {
  "id": 67,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) está implementando Agentforce Service Agent en el canal de Email. UC creó una plantilla de correo y necesita conectarla al Service Agent. ¿Qué debería recomendar un Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Crear una plantilla de correo clásica (classic email template) que defina la estructura de todos los correos enviados por el agente."
   },
   {
    "letter": "B",
    "text": "Usar la acción estándar Draft Email Template."
   },
   {
    "letter": "C",
    "text": "Crear una plantilla de correo Lightning (Lightning email template) que defina la estructura de todos los correos enviados por el Agentforce Service Agent."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Agentforce Service Agent en el canal de email utiliza plantillas de correo Lightning (Lightning email templates) para estructurar el formato de las respuestas salientes que genera el agente."
 },
 {
  "id": 68,
  "category": "Agentforce Concepts",
  "text": "El agente de soporte de una empresa ejecuta de forma inconsistente una acción obligatoria de verificación de fraude antes de procesar reembolsos. En algunas conversaciones se activa, pero en otras salta directo a emitir el reembolso. El especialista recomienda colocar en las instrucciones la directiva 'run @actions.fraud_check' seguida de 'run @actions.process_refund'. ¿Cuál es el efecto de este cambio?",
  "options": [
   {
    "letter": "A",
    "text": "Se sugerirá con más fuerza la acción de verificación de fraude al LLM, pero aún podrá omitirla si la considera no relevante."
   },
   {
    "letter": "B",
    "text": "La verificación de fraude se ejecutará después de que el LLM revise si se omitió, perdiendo el tono empático."
   },
   {
    "letter": "C",
    "text": "La acción de verificación de fraude se forzará a ejecutarse antes de la acción de reembolso en cada conversación, porque las instrucciones procedimentales brindan control determinista sobre el orden de ejecución."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Usar la palabra clave 'run' dentro de las instrucciones procedimentales del Agent Script garantiza la ejecución determinista en el orden exacto especificado, eliminando la discrecionalidad del LLM sobre si llamar o no la acción."
 },
 {
  "id": 69,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está configurando su Agentforce Testing Center para evaluar un agente que gestiona quejas. La empresa desea evaluar si el agente demuestra empatía y sigue su marco propio de desescalamiento antes de ofrecer resoluciones. ¿Dónde debe utilizar el especialista un evaluador basado en LLM (LLM-as-judge)?",
  "options": [
   {
    "letter": "A",
    "text": "Ajustar los criterios fijos de la evaluación de calidad estándar de Coherence."
   },
   {
    "letter": "B",
    "text": "Habilitar la evaluación predeterminada de Instruction Adherence que utiliza LLM-as-judge de forma nativa."
   },
   {
    "letter": "C",
    "text": "Crear una evaluación personalizada (custom evaluation) con un prompt adaptado que detalle las reglas del marco propio."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Para evaluar criterios cualitativos internos o marcos corporativos específicos (como empatía o protocolos propios), se debe crear una evaluación personalizada definiendo un prompt con la rúbrica detallada para que actúe un LLM-as-judge."
 },
 {
  "id": 70,
  "category": "Agentforce Concepts",
  "text": "El agente de Universal Containers siempre debe consultar el nivel de cuenta del cliente y los casos abiertos en Salesforce antes de decidir cómo responder. Basado en el flujo de control de Agent Script, ¿qué es correcto sobre la ejecución de acciones deterministas al inicio de un subagente?",
  "options": [
   {
    "letter": "A",
    "text": "Solo se puede garantizar que las acciones se ejecuten colocándolas dentro del bloque config."
   },
   {
    "letter": "B",
    "text": "Solo before_reasoning puede garantizar que las acciones se ejecuten antes de que el LLM sea invocado."
   },
   {
    "letter": "C",
    "text": "La primera instrucción dentro de reasoning siempre se ejecuta antes de invocar al LLM."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Nota sobre el banco de preguntas: En el registro clave del examen la opción A figura como la respuesta estipulada para garantizar la configuración inicial determinista previa a la fase de razonamiento."
 },
 {
  "id": 71,
  "category": "Agentforce Concepts",
  "text": "Un especialista prueba un agente en el Testing Center. Los resultados muestran que identifica correctamente el subagente para manejar el enunciado, pero no selecciona todas las acciones necesarias dentro de ese subagente. ¿Qué métrica de evaluación identifica específicamente este fallo?",
  "options": [
   {
    "letter": "A",
    "text": "Action Assertion"
   },
   {
    "letter": "B",
    "text": "Response Evaluation"
   },
   {
    "letter": "C",
    "text": "Subagent Assertion"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La métrica Action Assertion valida si se seleccionaron e invocaron las acciones u herramientas requeridas dentro del subagente. En contraste, Subagent Assertion únicamente evalúa si el enrutamiento al subagente fue correcto."
 },
 {
  "id": 72,
  "category": "Agentforce & Data",
  "text": "Universal Containers (UC) configuró una librería de datos y quiere restringir la indexación de artículos de conocimiento a aquellos que sean públicos. UC también desea que el agente enlace las fuentes en las que fundamentó su respuesta. ¿Qué configuraciones ayudan a cumplir esto?",
  "options": [
   {
    "letter": "A",
    "text": "Usar Data Categories para categorizar los artículos públicos. Las fuentes se muestran automáticamente si están en la categoría Public."
   },
   {
    "letter": "B",
    "text": "En la ventana de configuración de la librería, en Knowledge Settings, activar Use Public Knowledge Article. No es posible mostrar fuentes."
   },
   {
    "letter": "C",
    "text": "En la ventana de configuración de la librería, bajo Knowledge Settings, activar 'Use Public Knowledge Article' y seleccionar 'Show sources'."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Dentro de la configuración de la Agentforce Data Library, en Knowledge Settings, se debe habilitar 'Use Public Knowledge Article' para filtrar el contenido e indexar solo artículos públicos, y marcar 'Show sources' para mostrar las atribuciones/citas de origen."
 },
 {
  "id": 73,
  "category": "Setup & Integration",
  "text": "El equipo de cumplimiento de Universal Containers determinó que un prompt de servicio al cliente debe procesar datos únicamente mediante un modelo seguro hospedado en Amazon Bedrock, evitando el uso de los modelos predeterminados de OpenAI. ¿Cómo debe configurar este enrutamiento el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Asignar un permission set al Agent User que restrinja el acceso de lectura a los metadatos de los LLM predeterminados."
   },
   {
    "letter": "B",
    "text": "Configurar un endpoint de Data 360 Private Connect que redirija todas las solicitudes fuera del LLM Gateway."
   },
   {
    "letter": "C",
    "text": "Registrar el modelo como un BYOLLM en AI Models (anteriormente Einstein Studio), y luego seleccionar explícitamente este modelo al configurar el prompt template."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Para utilizar modelos propios o externos alojados en proveedores como Amazon Bedrock, se registra el modelo bajo el esquema BYOLLM (Bring Your Own LLM) en AI Models y luego se selecciona de forma explícita dentro del prompt template correspondiente."
 },
 {
  "id": 74,
  "category": "Agentforce Concepts",
  "text": "Cloud Kicks quiere que su Agentforce Service Agent recupere datos fácticos actualizados de internet. ¿Qué paso debe tomar el especialista para asegurar que el agente use la capacidad de búsqueda web adecuadamente?",
  "options": [
   {
    "letter": "A",
    "text": "Habilitar la acción estándar 'Answer Questions with Knowledge' específicamente en el subagente General FAQ."
   },
   {
    "letter": "B",
    "text": "Mapear el web search retriever a un índice de búsqueda personalizado en Data 360 antes de activar el agente."
   },
   {
    "letter": "C",
    "text": "Eliminar el subagente predeterminado General FAQ y reemplazarlo por un nuevo topic de General Web Search."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Habilitar la acción estándar 'Answer Questions with Knowledge' en el subagente General FAQ permite al agente responder preguntas fácticas apoyándose en los mecanismos de búsqueda configurados."
 },
 {
  "id": 75,
  "category": "Setup & Integration",
  "text": "Universal Containers necesita conectar de forma segura sus agentes de IA a múltiples sistemas de datos empresariales y entornos de desarrollo locales sin construir lógica de integración personalizada para cada uno. El especialista recomienda usar Model Context Protocol (MCP). ¿Cuál es el propósito principal de MCP en este escenario?",
  "options": [
   {
    "letter": "A",
    "text": "Estandarizar la conexión segura y la entrega de contexto entre modelos de IA y diversas fuentes de datos locales o remotas."
   },
   {
    "letter": "B",
    "text": "Reemplazar RAG almacenando todos los datos externos dentro de los pesos del LLM."
   },
   {
    "letter": "C",
    "text": "Permitir que el agente negocie de forma autónoma la delegación de tareas con agentes de terceros."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Model Context Protocol (MCP) es un estándar abierto diseñado para conectar aplicaciones y modelos de IA con herramientas, servicios y fuentes de datos externas a través de una interfaz común y segura."
 },
 {
  "id": 76,
  "category": "Agentforce & Data",
  "text": "Legal confirmó que todas las versiones históricas de documentos de hipotecas deben permanecer en Data 360 porque cada versión sigue siendo vinculante para los clientes que firmaron bajo ella. Para evitar que el agente entregue términos desactualizados a nuevos clientes pero pueda consultar el contrato correcto, ¿qué recomendación se debe hacer?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar un retriever personalizado con un filtro dinámico sobre los metadatos de la versión de la política, poblado en tiempo de ejecución desde el registro Contract del cliente, delimitando la búsqueda antes del ranking de similitud."
   },
   {
    "letter": "B",
    "text": "Agregar la versión como campo inicial en el índice de búsqueda para que el LLM elija la versión correcta durante la respuesta."
   },
   {
    "letter": "C",
    "text": "Crear un data stream separado para cada versión y configurar al agente para consultar el UDMO correspondiente a la fecha del contrato."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Al conservar múltiples versiones indexadas, la solución óptima es usar un retriever personalizado con filtros dinámicos basados en metadatos (extraídos del contrato del cliente) para limitar el espacio de búsqueda antes de aplicar la búsqueda por similitud."
 },
 {
  "id": 77,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) desea incorporar el estado de cumplimiento de pedidos almacenado en un sistema ERP externo dentro de un prompt para el LLM. ¿Cuál es la técnica de fundamentación (data grounding) más apropiada?",
  "options": [
   {
    "letter": "A",
    "text": "External Object Record merge fields"
   },
   {
    "letter": "B",
    "text": "Apex merge fields"
   },
   {
    "letter": "C",
    "text": "External Services merge fields"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Exponer el sistema ERP externo mediante Salesforce Connect como un objeto externo (External Object) permite utilizar merge fields de registros de objetos externos dentro del prompt template para leer datos en tiempo real."
 },
 {
  "id": 78,
  "category": "Agentforce Concepts",
  "text": "Antes de activar una custom agent action, un especialista quiere evaluar múltiples enunciados reales de usuarios para verificar que la acción sea seleccionada correctamente. ¿Qué herramienta debe utilizar?",
  "options": [
   {
    "letter": "A",
    "text": "Agentforce Builder"
   },
   {
    "letter": "B",
    "text": "Testing Center"
   },
   {
    "letter": "C",
    "text": "Prompt Builder"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agentforce Testing Center permite ejecutar pruebas masivas de enunciados (utterances) para evaluar y medir si la selección de subagentes y acciones se realiza de forma adecuada antes del despliegue."
 },
 {
  "id": 79,
  "category": "Agentforce Concepts",
  "text": "Universal Containers necesita equilibrar la flexibilidad conversacional con la ejecución garantizada de pasos de verificación de identidad antes de acceder a datos de cuenta. ¿Qué afirmación describe correctamente el razonamiento híbrido en Agent Script?",
  "options": [
   {
    "letter": "A",
    "text": "El razonamiento híbrido usa múltiples LLM simultáneamente, uno para conversación y otro para lógica determinista."
   },
   {
    "letter": "B",
    "text": "El razonamiento híbrido requiere Canvas View para instrucciones declarativas y Script View para instrucciones procedimentales."
   },
   {
    "letter": "C",
    "text": "El razonamiento híbrido combina instrucciones declarativas en lenguaje natural que permiten la interpretación del LLM con instrucciones procedimentales con prefijo run que imponen un orden de ejecución garantizado."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El razonamiento híbrido combina la fluidez de las instrucciones declarativas interpretadas por el LLM con el control estricto de las instrucciones procedimentales (que usan mandatos como 'run') para garantizar la ejecución de procesos críticos."
 },
 {
  "id": 80,
  "category": "Setup & Integration",
  "text": "Universal Containers construyó un Service Agent fundamentado en una librería de datos con 200 artículos de FAQ. La creación manual de casos de prueba tomaría semanas. ¿Qué paso debe tomar el especialista para generar un conjunto de pruebas inicial sin redacción manual?",
  "options": [
   {
    "letter": "A",
    "text": "Subir casos de prueba."
   },
   {
    "letter": "B",
    "text": "Generar casos de prueba basados en el conocimiento disponible para el agente (Generate test cases based on the knowledge available to the agent)."
   },
   {
    "letter": "C",
    "text": "Generar casos de prueba basados en subagentes y acciones."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agentforce Testing Center incluye la funcionalidad de generar automáticamente conjuntos de casos de prueba sintetizados a partir del contenido del conocimiento e información cargada en las librerías de datos del agente."
 },
 {
  "id": 81,
  "category": "Prompt Engineering",
  "text": "Un especialista trabaja en la versión 4 de un prompt template. Se identifica un error en la versión 3 que requiere un hotfix inmediato en producción como una nueva versión. ¿Qué se debe hacer para no perder el trabajo de la versión 4 ni generar conflictos?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un nuevo prompt template con la corrección, actualizar referencias y eliminar la plantilla anterior."
   },
   {
    "letter": "B",
    "text": "Guardar el trabajo en la versión 4 y permitir que la plantilla se despliegue con una nueva versión 5 que contenga la corrección."
   },
   {
    "letter": "C",
    "text": "Copiar y pegar la versión 4 en un archivo de respaldo local y permitir la sobrescritura."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "El sistema de versiones de Prompt Builder permite guardar borradores o iteraciones (versión 4) mientras que los cambios o correcciones urgentes se despliegan como una versión posterior (versión 5) que puede ser activada inmediatamente sin perder el trabajo previo."
 },
 {
  "id": 82,
  "category": "Agentforce & Data",
  "text": "Cloud Kicks maneja contratos legales largos. Un agente debe recuperar cláusulas específicas anidadas en secciones amplias. El chunking estándar fragmenta el texto perdiendo el contexto completo. ¿Qué estrategia de chunking se debe utilizar para preservar la estructura del documento?",
  "options": [
   {
    "letter": "A",
    "text": "Implementar un tamaño de fragmento (chunk size) más pequeño."
   },
   {
    "letter": "B",
    "text": "Implementar un tamaño de fragmento (chunk size) más grande."
   },
   {
    "letter": "C",
    "text": "Implementar una estrategia de chunking basada en palabras clave."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Aumentar el tamaño del fragmento (chunk size) permite abarcar bloques de texto legal más extensos junto con sus secciones o definiciones circundantes, evitando que cláusulas complejas queden divididas o descontextualizadas."
 },
 {
  "id": 83,
  "category": "Agentforce & Data",
  "text": "Al configurar Salesforce Knowledge como fuente para una Data Library, se deben seleccionar 'Identifying Fields' para ayudar al agente a ubicar la información. Los artículos son extensos y detallados. ¿Qué se debe seleccionar como Identifying Fields?",
  "options": [
   {
    "letter": "A",
    "text": "El contenido principal completo del artículo para garantizar el uso del artículo más relevante."
   },
   {
    "letter": "B",
    "text": "Cualquier campo de texto o área de texto que proporcione un resumen conciso del artículo."
   },
   {
    "letter": "C",
    "text": "Campos de fórmula estándar o personalizados con claves concatenadas."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Los identifying fields deben ser campos concisos (como títulos o resúmenes) que faciliten la búsqueda y localización rápida del artículo, dejando los cuerpos de texto largos para los campos de contenido (content fields)."
 },
 {
  "id": 84,
  "category": "Agentforce & Data",
  "text": "Universal Containers creó un retriever personalizado en AI Models para fundamentar respuestas. Ahora requiere que un campo de resumen del índice se incluya en la salida para dar una visión general de cada documento recuperado. ¿Cuál es la acción recomendada?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un retriever completamente nuevo y eliminar el actual, ya que no es posible editar un retriever existente."
   },
   {
    "letter": "B",
    "text": "Editar la versión del retriever existente para agregar el campo de resumen a la lista de campos devueltos, guardar y activar la nueva versión."
   },
   {
    "letter": "C",
    "text": "Usar el retriever predeterminado que incluye automáticamente todos los campos del índice."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Los retrievers admiten gestión de versiones. Se puede modificar la configuración del retriever para agregar campos adicionales a los resultados retornados, guardando y activando la versión actualizada."
 },
 {
  "id": 85,
  "category": "Trust Layer & Security",
  "text": "Un especialista intenta solucionar un problema reportado por un usuario pero no ve la sesión en la pestaña Processed Sessions de Agentforce Observability. ¿Qué debe tomar en consideración?",
  "options": [
   {
    "letter": "A",
    "text": "El agente no se ha registrado en la app de Observability."
   },
   {
    "letter": "B",
    "text": "La sesión está en cola para procesarse y puede visualizarse en la pestaña Unprocessed Sessions."
   },
   {
    "letter": "C",
    "text": "Las sesiones se procesan en lotes de 24 horas y debe revisar al día siguiente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Las sesiones de conversación pasan por estados de procesamiento. Si una sesión reciente aún no aparece en Processed Sessions, debe revisarse en la pestaña de Unprocessed Sessions donde permanece en cola."
 },
 {
  "id": 86,
  "category": "Agentforce Concepts",
  "text": "Universal Containers diseña un agente con la variable 'is_verified' y planea restringir el acceso a un subagente usando 'available when: @variables.is_verified = true'. ¿Qué se debe hacer para asegurar que el subagente esté disponible solo tras una verificación exitosa?",
  "options": [
   {
    "letter": "A",
    "text": "Agregar la condición available when al subagente."
   },
   {
    "letter": "B",
    "text": "Declarar la variable is_verified como inmutable."
   },
   {
    "letter": "C",
    "text": "Actualizar el valor de la variable is_verified a true tras el éxito de la acción de verificación usando @utils.setVariables."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Definir la regla de disponibilidad no basta si el estado de la variable no cambia. Se debe actualizar la variable a 'true' mediante '@utils.setVariables' cuando la acción de verificación responda con éxito."
 },
 {
  "id": 87,
  "category": "Agentforce & Data",
  "text": "Universal Containers implementa RAG donde los documentos de conocimiento están en español, pero los usuarios realizarán consultas en francés e inglés. El especialista debe asegurar que el retriever encuentre artículos relevantes independientemente del idioma. ¿Qué debe hacer?",
  "options": [
   {
    "letter": "A",
    "text": "Usar el modelo de embedding multilingual e5-large solo para usuarios de francés y español."
   },
   {
    "letter": "B",
    "text": "Usar el modelo de embedding multilingual e5-large para francés e inglés."
   },
   {
    "letter": "C",
    "text": "Usar el modelo de embedding multilingual e5-large para gestionar todos los idiomas en el índice."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Un modelo de embeddings multilingüe (como e5-large) proyecta conceptos con significados similares de distintos idiomas a posiciones cercanas en el espacio vectorial, permitiendo búsquedas semánticas cruzadas entre español, francés e inglés."
 },
 {
  "id": 88,
  "category": "Agentforce Concepts",
  "text": "Universal Containers busca calificar y nutrir leads 24/7, responder preguntas de prospectos con información precisa y agendar reuniones automáticamente con prospectos calificados. ¿Qué capacidad de Agentforce debe implementar?",
  "options": [
   {
    "letter": "A",
    "text": "Marketing Agent"
   },
   {
    "letter": "B",
    "text": "Pipeline Management"
   },
   {
    "letter": "C",
    "text": "Lead Nurturing Agent"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El Lead Nurturing Agent (sucesor del SDR Agent) está diseñado para interactuar de forma autónoma con leads entrantes, responder dudas desde conocimiento aprobado y programar reuniones con prospectos calificados."
 },
 {
  "id": 89,
  "category": "Prompt Engineering",
  "text": "Universal Containers desea crear un prompt template que extraiga de forma consistente el número de modelo de producto y la cantidad desde un correo para redactar una respuesta. ¿Qué buena práctica debe implementar?",
  "options": [
   {
    "letter": "A",
    "text": "Proporcionar instrucciones claras y positivas junto con ejemplos de pocos disparos (few-shot examples)."
   },
   {
    "letter": "B",
    "text": "Incorporar preguntas abiertas para fomentar respuestas detalladas."
   },
   {
    "letter": "C",
    "text": "Usar un ajuste de temperatura alto para aumentar la creatividad."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Para la extracción precisa y estructurada de datos (como modelos y cantidades), la mejor práctica de prompt engineering es ofrecer instrucciones explícitas y positivas acompañadas de ejemplos de pocos disparos (few-shot examples)."
 },
 {
  "id": 90,
  "category": "Prompt Engineering",
  "text": "Un especialista crea un prompt template para redactar respuestas a quejas de clientes de forma empática y servicial. ¿Cuál es un elemento clave que se debe incluir en la plantilla?",
  "options": [
   {
    "letter": "A",
    "text": "Una lista de palabras clave relacionadas con quejas de clientes."
   },
   {
    "letter": "B",
    "text": "Una instrucción directa al LLM para asuma el rol de un personaje (role-play)."
   },
   {
    "letter": "C",
    "text": "El historial completo de interacciones previas del cliente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Asignar un rol claro en el prompt (por ejemplo: 'Eres un agente de soporte al cliente empático y profesional') ayuda a establecer la persona, tono y estilo de comunicación deseado en el texto generado."
 },
 {
  "id": 91,
  "category": "Trust Layer & Security",
  "text": "Un cliente desea analizar interacciones completas de un agente, desde la solicitud inicial del usuario hasta la resolución final, para comprender mejor el comportamiento del agente y la calidad de sus respuestas. ¿Qué funcionalidad de Agentforce debe recomendar un Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Agent Inspection"
   },
   {
    "letter": "B",
    "text": "Agent Insights"
   },
   {
    "letter": "C",
    "text": "Agent Optimization"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Nota del banco de preguntas: En el registro oficial de la evaluación figura 'Agent Inspection' como la respuesta clave seleccionada para la inspección paso a paso de sesiones."
 },
 {
  "id": 92,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) rastrea actividades web en Data 360 para un contacto unificado. Desea utilizar esa información en un prompt template para extraer insights. Asumiendo que el objeto Contact es uno de los objetos asociados a la plantilla de prompt, ¿cuál es una forma válida para que UC logre esto?",
  "options": [
   {
    "letter": "A",
    "text": "Llamar al prompt directamente desde Data 360 con la actividad de rastreo web incluida en la definición del prompt."
   },
   {
    "letter": "B",
    "text": "Agregar los registros de actividad como una lista relacionada de enriquecimiento (enrichment related list) al Contact, y luego pasar el Contact al espacio de trabajo del prompt template mediante fundamentación de listas relacionadas (related list grounding)."
   },
   {
    "letter": "C",
    "text": "Crear un prompt template que tome una lista de todos los registros de actividad de Data 360 como input para pasarlos al LLM."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Enriquecer el objeto Contact con los datos unificados de Data Cloud a través de una lista relacionada permite utilizar el grounding de listas relacionadas en Prompt Builder para pasar esa información de contexto al LLM."
 },
 {
  "id": 93,
  "category": "Agentforce Concepts",
  "text": "Un cliente autenticado e identificado pertenece al nivel de membresía Bronze, Silver o Gold. Dichos niveles definen qué subagentes o acciones están disponibles según los derechos correspondientes. ¿Cuál es la mejor manera de asegurar que el agente responda adecuadamente?",
  "options": [
   {
    "letter": "A",
    "text": "Usar before_reasoning para definir variables personalizadas que se utilizarán en filtros y lógica de Flow."
   },
   {
    "letter": "B",
    "text": "Usar after_reasoning para definir variables personalizadas que se utilizarán en filtros y lógica de Flow."
   },
   {
    "letter": "C",
    "text": "Usar Agent Router para definir variables personalizadas que se utilizarán en filtros y lógica de Flow."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El bloque 'before_reasoning' en Agent Script se ejecuta antes de que el razonador (LLM) evalúe la intención y visibilidad de acciones, permitiendo establecer variables de estado (como el nivel de cliente) a tiempo para alimentar las reglas 'available when'."
 },
 {
  "id": 94,
  "category": "Trust Layer & Security",
  "text": "¿Qué funcionalidad de Einstein Trust Layer ayuda a minimizar los riesgos de ataques de jailbreaking y prompt injection?",
  "options": [
   {
    "letter": "A",
    "text": "Data Masking"
   },
   {
    "letter": "B",
    "text": "Prompt Defense"
   },
   {
    "letter": "C",
    "text": "Secure Data Retrieval and Grounding"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Prompt Defense en Einstein Trust Layer es el componente diseñado específicamente para detectar, mitigar y bloquear manipulaciones Maliciosas en los prompts, tales como ataques de inyección de prompt (prompt injection) e intenciones de vulneración de políticas (jailbreaking)."
 },
 {
  "id": 95,
  "category": "Agentforce & Data",
  "text": "Un especialista en Cloud Kicks quiere crear un agente impulsado por RAG fundamentado en documentos PDF de texto. Desea un enfoque de inicio rápido que genere automáticamente todos los componentes subyacentes, incluyendo el almacén de vectores, el índice de búsqueda, el retriever y la acción estándar. ¿Qué funcionalidad debe usar?",
  "options": [
   {
    "letter": "A",
    "text": "Ensemble Retriever"
   },
   {
    "letter": "B",
    "text": "Agentforce Data Library"
   },
   {
    "letter": "C",
    "text": "Search Index"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Crear una Agentforce Data Library aprovisiona y configura automáticamente toda la canalización de RAG en segundo plano (creación del índice en Data 360, generación de vectores, retriever y la acción estándar correspondiente)."
 },
 {
  "id": 96,
  "category": "Trust Layer & Security",
  "text": "Universal Containers opera en una industria regulada y debe mantener una pista de auditoría completa giro a giro de cada interacción del agente. ¿Qué funcionalidad de Agentforce brinda visibilidad completa de las ejecuciones del reasoning engine, acciones, entradas, salidas y mensajes de error a lo largo de toda una conversación?",
  "options": [
   {
    "letter": "A",
    "text": "Agentforce Session Tracing"
   },
   {
    "letter": "B",
    "text": "Agentforce Optimization"
   },
   {
    "letter": "C",
    "text": "Utterance Analysis"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Agentforce Session Tracing proporciona un registro detallado e inspeccionable turn a turn de las ejecuciones del motor de razonamiento, las herramientas invocadas, los parámetros recibidos/devueltos y los errores producidos."
 },
 {
  "id": 97,
  "category": "Agentforce Concepts",
  "text": "El equipo de operaciones de Universal Containers nota que muchas conversaciones resultan en escalaciones inesperadas, pero no pueden identificar cuáles subagentes o acciones están teniendo un bajo rendimiento. ¿Qué funcionalidad permite agrupar patrones de interacción, identificar brechas de rendimiento entre sesiones y aplicar puntuación de calidad?",
  "options": [
   {
    "letter": "A",
    "text": "Agentforce Optimization"
   },
   {
    "letter": "B",
    "text": "Agentforce Health Monitoring"
   },
   {
    "letter": "C",
    "text": "Agentforce Session Tracing"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Agentforce Optimization analiza y agrupa patrones de sesiones masivas a lo largo del tiempo, asignando métricas y puntuaciones de calidad para identificar sistemáticamente fallas de enrutamiento o acciones deficientes."
 },
 {
  "id": 98,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) desea fundamentar un nuevo prompt template con la lista relacionada User. ¿Qué debe considerar UC?",
  "options": [
   {
    "letter": "A",
    "text": "La lista relacionada User no está soportada en los prompt templates."
   },
   {
    "letter": "B",
    "text": "La lista relacionada User debe tener acceso de View All."
   },
   {
    "letter": "C",
    "text": "La lista relacionada User debe incluirse en la página de registro."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Por motivos de privacidad, seguridad y arquitectura de metadatos, la lista relacionada del objeto User no está admitida directamente como recurso de fundamentación (grounding) en Prompt Builder."
 },
 {
  "id": 99,
  "category": "Agentforce Concepts",
  "text": "Un especialista divide un proceso de onboarding en dos subagentes y coloca la configuración del segundo paso dentro del bloque 'before_reasoning' del nuevo subagente. Durante las pruebas, al cambiar de subagente a mitad de conversación, la interacción se detiene o falla inesperadamente. ¿Qué riesgo de sincronización se debe considerar respecto a 'before_reasoning'?",
  "options": [
   {
    "letter": "A",
    "text": "El bloque before_reasoning solo se ejecuta una vez y establece variables inmutables."
   },
   {
    "letter": "B",
    "text": "El bloque before_reasoning se ejecuta al inicio del siguiente turno tras realizarse la transición."
   },
   {
    "letter": "C",
    "text": "El bloque before_reasoning solo se ejecuta en el primer turno absoluto tras iniciar el agente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "El bloque 'before_reasoning' se ejecuta en la fase inicial del ciclo del turno. Cuando se realiza una transición de subagente a mitad de camino, la lógica de 'before_reasoning' del subagente destino se procesa al arrancar el siguiente turno de conversación."
 },
 {
  "id": 100,
  "category": "Agentforce Concepts",
  "text": "Cuando un cliente en un centro de ayuda solicita mejorar su plan de servicio, un agente debe: Verificar identidad y derecho, Crear una nueva cotización, Calcular un monto prorrateado, y Escalar a un Account Executive solo si el monto supera US$25,000. ¿Qué tipo de agente debe construir el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Service Agent para resolver el caso de principio a fin y crear una oportunidad."
   },
   {
    "letter": "B",
    "text": "Employee Agent para orquestar la logística interna."
   },
   {
    "letter": "C",
    "text": "Sales Agent para gestionar la venta adicional (upsell) y la escalación de acuerdos grandes."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Las interacciones enfocadas en generación de ingresos, cotizaciones, cálculo de precios para upgrades/upsells y escalaciones hacia ejecutivos de cuenta están optimizadas para la plantilla del Sales Agent."
 },
 {
  "id": 101,
  "category": "Prompt Engineering",
  "text": "Universal Containers quiere que los usuarios completen el campo Description en Account haciendo clic en un botón en la página del registro, con la opción de previsualizar, regenerar o editar manualmente la salida antes de guardar, usando solo herramientas declarativas. ¿Qué tipo de prompt template se debe usar?",
  "options": [
   {
    "letter": "A",
    "text": "Field Generation"
   },
   {
    "letter": "B",
    "text": "Flex"
   },
   {
    "letter": "C",
    "text": "Sales Email"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Los Field Generation prompt templates están diseñados para poblar campos específicos en la interfaz de un registro de Salesforce, ofreciendo al usuario la experiencia nativa de previsualizar, regenerar y editar antes de guardar."
 },
 {
  "id": 102,
  "category": "Trust Layer & Security",
  "text": "Tras un mes de uso del agente de servicio, el gerente quiere ver métricas agregadas como tasa de escalación a agentes humanos, duración promedio de sesión y temas con menor puntuación de resolución. ¿Qué capacidad nativa se debe usar?",
  "options": [
   {
    "letter": "A",
    "text": "Agentforce Observability, aprovechando los tableros de Agent Analytics y el Session Tracing Data Model para revisar el rendimiento agregado y profundizar en interacciones deficientes."
   },
   {
    "letter": "B",
    "text": "El Audit Trail de Einstein Trust Layer exportando registros JSON crudos."
   },
   {
    "letter": "C",
    "text": "El reporte de Salesforce Optimization programando un escaneo mensual."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Agentforce Observability ofrece tableros analíticos preconstruidos (Agent Analytics) para monitorear tendencias agregadas de desviación, duración de sesión y tasas de escalación a nivel operativo."
 },
 {
  "id": 103,
  "category": "Agentforce Concepts",
  "text": "Coral Cloud Resorts quiere abarcar una amplia variedad de redacciones de usuario al probar su agente de FAQ. ¿Qué funcionalidad de Testing Center respalda esta necesidad?",
  "options": [
   {
    "letter": "A",
    "text": "Subir solo un conjunto pequeño de prompts escritos manualmente."
   },
   {
    "letter": "B",
    "text": "Enunciados de prueba sintéticos generados por IA (synthetic test utterances) basados en variaciones de lenguaje natural."
   },
   {
    "letter": "C",
    "text": "Depender de los registros de clientes en vivo tras el despliegue."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agentforce Testing Center permite generar de forma sintética múltiples variaciones y paráfrasis en lenguaje natural a partir de los casos de prueba, evaluando la robustez de clasificación del agente ante distintas formas de redactar de los usuarios."
 },
 {
  "id": 104,
  "category": "Agentforce & Data",
  "text": "Durante las pruebas de calidad de RAG, se observa que la información tabular de una canalización de ingestión en Data 360 pierde contexto porque los datos quedan divididos en múltiples fragmentos (chunks) separados. ¿Cuál es el enfoque más apropiado?",
  "options": [
   {
    "letter": "A",
    "text": "Cambiar el analizador (parser) del índice de búsqueda del predeterminado a Docling."
   },
   {
    "letter": "B",
    "text": "Usar un ensemble retriever para reensamblar dinámicamente múltiples fragmentos."
   },
   {
    "letter": "C",
    "text": "Cambiar la configuración del índice a solo puntuación de búsqueda por palabras clave."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Un ensemble retriever puede combinar e hilar fragmentos de contenido relacionados devueltos durante la recuperación para recomponer tablas o estructuras compuestas fragmentadas durante la ingestión."
 },
 {
  "id": 105,
  "category": "Agentforce Concepts",
  "text": "Universal Containers necesita restringir una acción 'Process Refund' en Agent Script para que solo sea visible cuando la variable @variables.IsActive sea verdadera. ¿Qué operador debe utilizar el especialista en la cláusula available when?",
  "options": [
   {
    "letter": "A",
    "text": "El especialista debe usar el operador =; Agent Script usa estrictamente = para comparación en condicionales."
   },
   {
    "letter": "B",
    "text": "Ambos = y == son válidos e intercambiables."
   },
   {
    "letter": "C",
    "text": "El especialista debe usar el operador ==; Agent Script usa == tanto para asignación como para comparación."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Nota del banco de preguntas: En las especificaciones del examen registradas en este descargable, se estipula la sintaxis de comparación de la cláusula condicional de disponibilidad mediante el operador '='."
 },
 {
  "id": 106,
  "category": "Agentforce Concepts",
  "text": "Un especialista necesita actualizar el estado conversacional, navegar entre diferentes subagentes y transferir conversaciones a un agente humano sin construir código backend personalizado. ¿Cómo se implementa esto?",
  "options": [
   {
    "letter": "A",
    "text": "El especialista puede usar directamente @utils.setVariables, @utils.transition y @utils.escalate."
   },
   {
    "letter": "B",
    "text": "Se pueden usar la mayoría de las utilidades directamente, pero @utils.escalate requiere una clase Apex personalizada."
   },
   {
    "letter": "C",
    "text": "Se pueden usar las utilidades estándar, pero @utils.transition requiere un Flow."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Agent Script proporciona herramientas utilitarias nativas sin necesidad de código Apex: '@utils.setVariables' para actualizar variables, '@utils.transition' para saltar a otro subagente y '@utils.escalate' para transferir a un agente humano."
 },
 {
  "id": 107,
  "category": "Setup & Integration",
  "text": "Universal Containers está auditando su arquitectura de IA y necesita restringir que sus desarrolladores utilicen únicamente modelos de lenguaje (LLM) específicamente aprobados. ¿Cómo se gestiona esto a nivel organizacional?",
  "options": [
   {
    "letter": "A",
    "text": "Aplicar una política ABAC dentro de Einstein Trust Layer para bloquear prompts."
   },
   {
    "letter": "B",
    "text": "Escribir una instrucción de sistema estricta en Agent Builder indicando 'Nunca uses modelos externos'."
   },
   {
    "letter": "C",
    "text": "Garantizar que solo los LLM aprobados estén habilitados en la sección Model Provider dentro de la configuración de Einstein (Einstein Setup)."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "La gobernanza y restricción de proveedores de modelos se controla a nivel de plataforma desde Einstein Setup en la sección 'Configure Model Providers', habilitando únicamente los modelos autorizados por la empresa."
 },
 {
  "id": 108,
  "category": "Agentforce Concepts",
  "text": "El especialista sospecha que el Service Agent clasifica sistemáticamente intenciones de disputas de facturación bajo un tema general. El administrador necesita identificar este patrón en sesiones de producción sin revisar transcripciones individuales. ¿Qué debe recomendar?",
  "options": [
   {
    "letter": "A",
    "text": "Habilitar Session Tracing y consultar el Data Model directamente."
   },
   {
    "letter": "B",
    "text": "Usar Agent Optimization en Agentforce Studio, que segmenta las sesiones de producción en momentos y genera grupos de intenciones (intent clusters) mediante análisis cruzado."
   },
   {
    "letter": "C",
    "text": "Subir enunciados al Testing Center y ejecutar pruebas en lote."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agent Optimization procesa y agrupa de forma agregada las sesiones reales de producción en 'intent clusters' y momentos de conversación, identificando de forma automática patrones repetitivos de fallos de enrutamiento."
 },
 {
  "id": 109,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desea asegurar que las respuestas de sus agentes de IA reflejen la voz de marca y estándares de calidad específicos más allá de pruebas pasa/falla simples. ¿Cómo se debe configurar el Testing Center?",
  "options": [
   {
    "letter": "A",
    "text": "Habilitar la evaluación de calidad de Coherence."
   },
   {
    "letter": "B",
    "text": "Usar la métrica predeterminada Response Evaluation."
   },
   {
    "letter": "C",
    "text": "Crear una evaluación personalizada (custom evaluation) utilizando un evaluador basado en LLM (LLM judge)."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Para evaluar criterios corporativos sutiles o específicos de la marca (voz de marca, léxico permitido, tono), se debe crear una evaluación personalizada configurando un modelo para actuar como LLM judge con una rúbrica de evaluación explícita."
 },
 {
  "id": 110,
  "category": "Setup & Integration",
  "text": "Universal Containers tiene múltiples orgs de Salesforce y necesita pasar datos de identidad del cliente verificados entre agentes de forma segura sin exponer los datos a modificaciones del LLM. ¿Cuál es la configuración más apropiada?",
  "options": [
   {
    "letter": "A",
    "text": "Usar la Agent API para iniciar la sesión del agente secundario y pasar el ID de cliente verificado como una variable de contexto de solo lectura, garantizando seguridad y evitando alteraciones por parte del LLM."
   },
   {
    "letter": "B",
    "text": "Almacenar la información en variables de sesión de mensajería creadas por el primer agente."
   },
   {
    "letter": "C",
    "text": "Implementar un objeto personalizado para almacenar temporalmente el estado y consultarlo vía SOQL."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Al transferir identificadores o datos sensibles entre agentes, el enfoque más seguro es usar Agent API pasando los valores como variables de contexto de solo lectura, protegiéndolos de manipulaciones en la capa de razonamiento del LLM."
 },
 {
  "id": 111,
  "category": "Prompt Engineering",
  "text": "El equipo de ventas de un resort desea generar un resumen sobre las preferencias de cada huésped y brindar recomendaciones en su perfil. Desean que el resumen esté disponible únicamente en la página de registro de Contact. ¿Qué capacidad de IA deben utilizar?",
  "options": [
   {
    "letter": "A",
    "text": "Prompt Builder"
   },
   {
    "letter": "B",
    "text": "Flow Builder"
   },
   {
    "letter": "C",
    "text": "Agentforce Builder"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Prompt Builder permite crear plantillas de prompt (como Record Summary o Flex) fundamentadas en los datos del registro y exponer la salida generada mediante un componente en la página de Lightning del objeto Contact."
 },
 {
  "id": 112,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desea permitir que sus agentes consulten el estado de cumplimiento de pedidos en Oracle ERP con lenguaje natural usando un Flow autolanzado existente. ¿Cómo se debe aplicar IA conversacional en este caso de uso?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un Flex prompt template en Prompt Builder."
   },
   {
    "letter": "B",
    "text": "Crear una custom agent action que invoque al Flow."
   },
   {
    "letter": "C",
    "text": "Configurar la acción estándar Integration Flow en Agentforce Builder."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Para conectar las capacidades conversacionales del agente con la lógica de negocio o integraciones existentes encapsuladas en un Flow, se crea una custom agent action configurada para llamar a dicho Flow."
 },
 {
  "id": 113,
  "category": "Prompt Engineering",
  "text": "Universal Containers necesita crear un correo de ventas con un prompt template personalizado fundamentado en: Opportunity Products, Eventos cercanos y Ejemplos de Tono y Voz. ¿Cómo debe UC obtener los elementos relacionados?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un Flex template que tome los registros en cuestión como inputs."
   },
   {
    "letter": "B",
    "text": "Utilizar una plantilla de correo estándar e insertar manualmente los campos."
   },
   {
    "letter": "C",
    "text": "Llamar a un prompt-initiated flow para extraer y fundamentar los datos requeridos."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Nota del banco de preguntas: En este ítem duplicado del examen, la clave registrada utiliza un prompt-initiated flow para consultar dinámicamente registros complejos y agregarlos mediante la instrucción 'Add Prompt Instructions'."
 },
 {
  "id": 114,
  "category": "Trust Layer & Security",
  "text": "El VP de Servicio requiere un reporte que muestre tendencias semanales de tasa de desviación (deflection rate) y volúmenes de escalación para el Service Agent durante los últimos 90 días. ¿Qué enfoque se debe recomendar?",
  "options": [
   {
    "letter": "A",
    "text": "Habilitar Agentforce Health Monitoring para configurar alertas y exportar datos a Tableau."
   },
   {
    "letter": "B",
    "text": "Usar Agent Analytics dentro de Agentforce Observability, que proporciona tableros de Tableau con métricas preconstruidas de desviación, escalación y abandono basadas en datos de Data 360."
   },
   {
    "letter": "C",
    "text": "Consultar el Session Tracing Data Model en Data 360 usando CRM Analytics para construir un tablero personalizado."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agent Analytics en Agentforce Observability integra de forma predeterminada tableros analíticos potenciados por Tableau con métricas de tasa de desviación, volúmenes de escalación y abandono."
 },
 {
  "id": 115,
  "category": "Agentforce Concepts",
  "text": "El especialista de Coral Cloud Resorts quiere crear un agente que automatice la resolución de quejas de huéspedes (ofreciendo upgrades, créditos) y escala a un humano tras interrupciones graves. ¿Qué tipo de agente debe crear?",
  "options": [
   {
    "letter": "A",
    "text": "Employee Agent con un Flex prompt template."
   },
   {
    "letter": "B",
    "text": "Sales Agent con un Flex prompt template."
   },
   {
    "letter": "C",
    "text": "Service Agent con un Flex prompt template."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Los casos de uso orientados a resolver incidencias de clientes, otorgar beneficios o compensaciones y escalar problemas a soporte pertenecen a las capacidades nativas de un Service Agent respaldado por Flex prompt templates."
 },
 {
  "id": 116,
  "category": "Agentforce Concepts",
  "text": "El agente prueba la acción 'Reset Password' restringida por 'available when @variables.isVerified = True'. En un solo turno, el LLM cambia isVerified a true pero no ejecuta 'Reset Password' inmediatamente. ¿Qué se debe considerar sobre la evaluación de disponibilidad?",
  "options": [
   {
    "letter": "A",
    "text": "La acción está disponible desde el inicio; la intención del motor invalida las reglas."
   },
   {
    "letter": "B",
    "text": "La acción se vuelve disponible inmediatamente en el mismo turno."
   },
   {
    "letter": "C",
    "text": "La acción permanece no disponible durante ese turno; las condiciones de 'available when' se evalúan antes de iniciar el ciclo de razonamiento, por lo que la acción no será ejecutable sino hasta el siguiente turno."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Las reglas 'available when' filtran las acciones visibles al reasoning engine justo antes de iniciar la fase de planificación del turno. Si una variable cambia durante el turno, la acción recién estará visible para invocarse en la iteración del siguiente turno."
 },
 {
  "id": 117,
  "category": "Agentforce Concepts",
  "text": "El equipo reporta que el agente enruta constantemente las conversaciones de reclamos hacia el subagente Policy Inquiry, incluso cuando la intención del usuario indica claramente un reclamo. ¿Qué causa probablemente este fallo?",
  "options": [
   {
    "letter": "A",
    "text": "Instrucciones procedimentales que requieren Flows de Salesforce."
   },
   {
    "letter": "B",
    "text": "Uso de instrucciones globales para definir enrutamiento."
   },
   {
    "letter": "C",
    "text": "Solapamiento en las descripciones y condiciones de entrada de los subagentes 'Claims Intake' y 'Policy Inquiry'."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El enrutamiento erróneo persistente hacia el subagente equivocado se debe a ambigüedad y solapamiento semántico en las descripciones del alcance de ambos subagentes."
 },
 {
  "id": 118,
  "category": "Agentforce & Data",
  "text": "Un agente responde preguntas usando un índice de búsqueda en Data 360 con artículos internos y portales de socios. Durante las pruebas, entrega respuestas contradictorias. ¿Qué proceso de Data 360 debe revisar el especialista para identificar el origen de la información?",
  "options": [
   {
    "letter": "A",
    "text": "El proceso de armonización de datos."
   },
   {
    "letter": "B",
    "text": "La fase de síntesis de RAG."
   },
   {
    "letter": "C",
    "text": "El proceso de la función retriever de Data 360, donde el contenido recuperado se puede filtrar basándose en metadatos de origen (como tipo de documento o autor) para refinar los resultados antes de ordenarlos."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Revisar los metadatos de origen en el proceso del retriever permite identificar el origen específico de los datos indexados, permitiendo aplicar filtros por tipo de documento o autor para aislar o priorizar las fuentes de verdad adecuadas."
 },
 {
  "id": 119,
  "category": "Agentforce Concepts",
  "text": "Un especialista construye un Service Agent que usa una custom action basada en Flow. Tras probarlo en Sandbox, se despliega a Producción mediante un change set. ¿Cuál es una consideración clave sobre el estado de activación del agente?",
  "options": [
   {
    "letter": "A",
    "text": "El agente debe activarse manualmente en producción, independientemente de su estado en Sandbox."
   },
   {
    "letter": "B",
    "text": "El agente se activará automáticamente tras el despliegue."
   },
   {
    "letter": "C",
    "text": "El agente se activará automáticamente solo si el Flow está activo."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El estado de activación de los agentes no se transfiere de forma automática entre entornos. Tras desplegar un agente a producción, este debe ser activado manualmente de forma explícita."
 },
 {
  "id": 120,
  "category": "Agentforce & Data",
  "text": "Una empresa de seguros necesita que un Service Agent fundamente sus respuestas en PDFs corporativos y en una base de conocimientos. ¿Qué tipo de retriever se debe utilizar?",
  "options": [
   {
    "letter": "A",
    "text": "Dynamic retriever"
   },
   {
    "letter": "B",
    "text": "Individual retriever"
   },
   {
    "letter": "C",
    "text": "Ensemble retriever"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Cuando se requiere combinar y realizar búsquedas sobre múltiples fuentes de datos o índices independientes (como archivos PDF e índices de Knowledge), se utiliza un ensemble retriever."
 },
 {
  "id": 121,
  "category": "Setup & Integration",
  "text": "Universal Containers usa IA generativa para poblar el campo de resumen de Competitor Analysis. Todos los usuarios tienen el mismo perfil, pero un usuario no ve el ícono habilitado para IA generativa. ¿Cuál es la causa más probable?",
  "options": [
   {
    "letter": "A",
    "text": "El prompt template no está activado para ese usuario."
   },
   {
    "letter": "B",
    "text": "El usuario no tiene asignado el permission set Prompt Template User."
   },
   {
    "letter": "C",
    "text": "El usuario no tiene asignado el permission set Generative AI User."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El acceso a las funciones generativas e íconos interactivos de IA en la interfaz requiere que los usuarios tengan asignado el permission set 'Generative AI User'."
 },
 {
  "id": 122,
  "category": "Prompt Engineering",
  "text": "¿Cuál es el proceso correcto para aprovechar Prompt Builder en una org de Salesforce?",
  "options": [
   {
    "letter": "A",
    "text": "Seleccionar el tipo de prompt template apropiado, desarrollar el prompt en el workspace, seleccionar recursos para insertar datos de fundamentación del CRM, elegir el modelo a usar, y probar/validar las respuestas generadas."
   },
   {
    "letter": "B",
    "text": "Habilitar el objeto objetivo, desarrollar el prompt, seleccionar registros para hacer fine-tuning, habilitar Trust Layer y asociar a una acción."
   },
   {
    "letter": "C",
    "text": "Seleccionar el tipo de plantilla, seleccionar un prompt estándar, determinar el objeto y asociar a una acción."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El flujo de trabajo estándar en Prompt Builder es: 1. Elegir tipo de plantilla, 2. Escribir el prompt en el espacio de trabajo, 3. Agregar recursos de grounding (campos, Flows, Apex), 4. Seleccionar el LLM y 5. Probar y validar contra registros de muestra."
 },
 {
  "id": 123,
  "category": "Setup & Integration",
  "text": "Un administrador desplegó un Service Agent de Sandbox a Producción vía change set. El agente usa un prompt template que invoca un Flow. En producción, la interacción falla con error cada vez que se requiere ejecutar el Flow. El Flow se incluyó en el paquete. ¿Cuál es la causa más probable?",
  "options": [
   {
    "letter": "A",
    "text": "El usuario en producción no tiene permiso para ejecutar el Flow."
   },
   {
    "letter": "B",
    "text": "El change set no incluyó las clases Apex dependientes."
   },
   {
    "letter": "C",
    "text": "El Flow no se activó manualmente en la org de producción tras el despliegue."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Los Flows desplegados a través de change sets llegan inactivos al entorno de destino de forma predeterminada. Deben activarse manualmente en producción para que el prompt template o el agente puedan invocarlos."
 }
];