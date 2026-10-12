const QUESTIONS_ESP = [
 {
  "id": 1,
  "category": "Agentforce & Data",
  "text": "Universal Containers necesita crear reportes de Data Cloud para entender el comportamiento del agente. ¿Qué Data Lake Object (DLO) representa un contenedor principal que captura interacciones continuas con uno o más agentes de IA?",
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
  "explanation": "Según la Guía de Integración de Agentforce Data Cloud, el objeto AI Agent Session (AIAGENTSESSION) representa un contenedor principal que rastrea una interacción continua entre uno o más agentes de IA y un usuario. El documento describe: \"AI Agent Session es el contenedor padre para un conjunto continuo de interacciones de AI Agent. Captura metadatos, horas de inicio y fin, y la relación con los mensajes individuales intercambiados durante la sesión.\" La Opción A, AIAGENTINTERACTION, representa un solo paso o evento dentro de la sesión, mientras que AIAGENTINTERACTIONMESSAGE (Opción B) representa mensajes o intercambios individuales dentro de esa interacción. Por lo tanto, AIAGENTSESSION es el DLO correcto para reportar sobre el comportamiento y desempeño general del agente a lo largo de una interacción completa."
 },
 {
  "id": 2,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) ha registrado un External Service y ha creado un template-triggered prompt flow que invoca el External Service para extraer datos de una REST API. UC ahora necesita hacer que los datos de respuesta del External Service sean utilizables dentro de un prompt template como un merge field cuando el template se ejecute. ¿Cómo debería UC cumplir con este requerimiento?",
  "options": [
   {
    "letter": "A",
    "text": "Usar el elemento de Flow 'Add Prompt Instructions'."
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
  "explanation": "Como se describe en la Guía de Integración de External Services y Prompt Flow de Agentforce, cuando se obtienen datos de un External Service registrado a través de REST API, el payload de respuesta se almacena como External Service Records. Estos registros se pueden referenciar dinámicamente dentro de los prompt templates mediante merge fields de External Service Record. Esto permite que el Large Language Model (LLM) use los datos recuperados como contextual grounding durante la ejecución del prompt, asegurando que las respuestas generadas sean precisas y consistentes con los últimos resultados de la API. La Opción B es incorrecta porque Agentforce no usa merge fields de XML para respuestas de API; los datos JSON se mapean automáticamente a estructuras de objetos. La Opción C también es incorrecta: el elemento 'Add Prompt Instructions' modifica el contexto o tono del prompt pero no pasa datos externos para su uso como merge field. Por lo tanto, el método correcto es usar merge fields de External Service Record."
 },
 {
  "id": 3,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) quiere desplegar un Agentforce Service Agent para dar soporte a sus clientes a través de una experiencia web. UC utiliza un sitio de Digital Experience y quiere habilitar messaging para usuarios autenticados. El cliente necesita pasar el número de membresía al agente, para lo cual hay disponible una variable de pre-chat. ¿Cuál es un paso requerido para conectar el agente al sitio de Digital Experience usando Messaging for In-App and Web?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar MuleSoft para establecer un túnel API seguro entre el agente y el sitio de Digital Experience."
   },
   {
    "letter": "B",
    "text": "Configurar un messaging Lightning Web Component utilizando el Lightning Type estándar o personalizado para Agentforce."
   },
   {
    "letter": "C",
    "text": "Crear un Omni-Channel Flow que enrute los mensajes al agente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Clave del examen: conectar un Service Agent a un sitio de Digital Experience (Experience Cloud) para Messaging for In-App and Web implica colocar el componente messaging Lightning Web Component en el sitio, configurado con el Lightning Type estándar o personalizado para Agentforce, de modo que la variable de membresía del pre-chat se pase al agente. MuleSoft no está involucrado, y aunque un Omni-Channel Flow enruta el trabajo al agente, no es el paso de conexión del sitio."
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
    "text": "Desplegar una arquitectura Single-Org, Multi-Agent (SOMA) utilizando un agente Orchestrator primario para gestionar el contexto compartido de forma nativa y enrutar sub-tareas a agentes especializados."
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
  "explanation": "SOMA es correcto porque la empresa opera en una sola instancia de Salesforce y requiere gobernanza centralizada, contexto de usuario compartido y enrutamiento a través de agentes especializados. La guía de arquitectura de Salesforce define SOMA como múltiples agentes colaborando dentro de una sola org de Salesforce usando gobernanza y datos compartidos, con un Supervisor o agente primario actuando como puerta de entrada que enruta el trabajo a agentes especialistas. La guía de orquestación multi-agente de Salesforce también describe un agente primario que enruta tareas a los agentes especialistas más idóneos mientras preserva el contexto para que los usuarios no se repitan. MOMA es para colaboración entre distintas orgs, por lo que añade complejidad innecesaria aquí. MCP conecta agentes o modelos a herramientas y fuentes de datos; no es la mejor respuesta arquitectónica para la orquestación nativa multi-agente en una sola org."
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
  "explanation": "La respuesta correcta es A. El protocolo Agent-to-Agent (A2A) es el estándar abierto correcto cuando AI agents independientes necesitan descubrirse entre sí, comunicarse de forma segura, intercambiar información estructurada y delegar trabajo a través de distintas plataformas. En este escenario, el agente de UC no está simplemente recuperando datos de un sistema externo; debe comunicarse con otro agente logístico autónomo y delegar la ejecución de un reenrutamiento de envío. MCP se utiliza para exponer herramientas externas, datos y contexto a los agentes, pero no es el protocolo principal para la negociación entre agentes. OpenAPI describe APIs REST y es útil para la integración tradicional de servicios, pero no proporciona un protocolo de colaboración entre agentes. Salesforce describe A2A como un estándar abierto para la comunicación segura, delegación de tareas y colaboración entre agentes de diferentes plataformas."
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
  "explanation": "La Guía de Integración de Agentforce API define Agent API como el framework que permite a las aplicaciones web o móviles externas comunicarse directamente con los agentes alojados en Salesforce. Esta API soporta el intercambio de mensajes, gestión de sesiones y persistencia del contexto, permitiendo a los desarrolladores construir interfaces de chat personalizadas mientras mantienen una conectividad segura y en tiempo real con el reasoning engine de Agentforce. La Opción A (A2A) es para la colaboración entre agentes dentro de Salesforce, no para la integración web externa. La Opción B (MCP) — Model Context Protocol — se utiliza para compartir contexto entre modelos y herramientas, no para la integración del front-end. Por lo tanto, el framework correcto para permitir la comunicación entre una interfaz de chat web personalizada y un agente de Agentforce es Agent API."
 },
 {
  "id": 7,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está construyendo un Agentforce Service Agent para gestionar cancelaciones de pedidos. El Specialist debe asegurar que una acción crítica \"Check Cancellation Eligibility\" se ejecute de forma determinista en cada turno relevante, sin depender del criterio del reasoning engine para elegir la herramienta. Durante una revisión de código, un desarrollador junior pregunta por qué el Specialist llamó a la acción usando el comando run @actions.name en lugar de simplemente listar la acción dentro del bloque reasoning actions:. ¿Qué debe explicar el Specialist con respecto a la diferencia entre estos dos métodos de invocación?",
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
  "explanation": "La respuesta correcta es C. En Agent Script, listar una herramienta en el bloque reasoning.actions la expone al reasoning engine como una herramienta ejecutable que el LLM puede decidir llamar según la descripción de la herramienta y el contexto actual. Eso no es lo suficientemente determinista para una verificación obligatoria de elegibilidad. Por el contrario, la referencia de acciones de Agent Script de Salesforce establece que para garantizar que una acción se ejecute cada vez que se ejecuta un subagente, el especialista debe usar run @actions. en el bloque de razonamiento. Por lo tanto, run es el mecanismo correcto para la ejecución garantizada, mientras que reasoning.actions proporciona disponibilidad de herramientas seleccionables por el LLM."
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
  "explanation": "Una Agentforce Data Library acepta la carga de archivos directamente: se crea la librería, se suben los PDFs de políticas y la plataforma se encarga de la ingestión, fragmentación (chunking) e indexación en Data 360 en segundo plano. Esto fundamenta al agente exclusivamente en los documentos aprobados con la menor configuración manual. La Opción B es la ruta manual de Data 360 que la librería automatiza, y la Opción A no es un mecanismo de grounding."
 },
 {
  "id": 9,
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
  "explanation": "Clave del examen: dentro de Agent Script, la palabra clave 'run' encadena una acción de seguimiento para que send_verification se ejecute inmediatamente después de que create_account tenga éxito, sin requerir un turno adicional del usuario. Hacer que la acción esté simplemente disponible (B) deja la invocación al criterio del LLM. Nota: la documentación de Salesforce coloca las declaraciones run en las instrucciones procedimentales (reasoning)."
 },
 {
  "id": 10,
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
  "explanation": "El Agentforce Specialist está definiendo una acción personalizada para un agente de Agentforce en Agent Builder. Las acciones determinan qué hace el agente (ej. recuperar datos, actualizar registros). En Agent Builder de Agentforce Studio, las acciones personalizadas se pueden crear utilizando Salesforce Flows. Los Flows permiten lógica compleja (ej. recuperación de datos, actualizaciones o integraciones) y son compatibles de forma nativa como tipo de acción personalizada. Apex Triggers son scripts basados en eventos, no acciones seleccionables en Agent Builder. SOQL es un lenguaje de consulta, no un tipo de acción ejecutable."
 },
 {
  "id": 11,
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
  "explanation": "La respuesta correcta es B porque restringir acciones secundarias requiere un control de estado confiable y una regla de disponibilidad de acciones. Una variable de sesión mutable puede almacenar si se completó la verificación del paciente, y 'available when' puede evitar que las acciones de agendamiento estén disponibles hasta que esa variable indique el estado verificado. Este es el patrón estándar declarativo de Agent Script para el acceso controlado a acciones."
 },
 {
  "id": 12,
  "category": "Trust Layer & Security",
  "text": "¿Qué métricas útiles proporciona Agentforce Observability a un equipo de servicio al cliente relacionadas con un Customer Service Agent?",
  "options": [
   {
    "letter": "A",
    "text": "Tasas de desviación de llamadas (call deflection), costo por interacción y consumo de memoria"
   },
   {
    "letter": "B",
    "text": "Tasas de desviación de llamadas (call deflection), productividad y tasas de sesiones abandonadas"
   },
   {
    "letter": "C",
    "text": "Tasas de desviación de llamadas (call deflection), tasas de sesiones abandonadas y calificaciones de intenciones del usuario"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque Agentforce Observability y Agent Analytics se centran en métricas operativas de servicio que ayudan a los equipos a entender la efectividad del agente y los resultados del servicio al cliente. La tasa de desviación mide qué tan seguido el agente resuelve interacciones sin escalación. Las métricas de productividad ayudan a evaluar la eficiencia operativa. La tasa de sesiones abandonadas destaca las conversaciones que los usuarios dejan inconclusas."
 },
 {
  "id": 13,
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
  "explanation": "La respuesta correcta es C porque el control de versiones de prompt templates forma parte del ciclo de vida de los metadatos de las plantillas. Al trasladar un prompt template entre entornos, los especialistas deben considerar que las versiones almacenadas con la plantilla en la org de origen se incluyen en el paquete enviado a la org de destino."
 },
 {
  "id": 14,
  "category": "Agentforce Concepts",
  "text": "Universal Containers quiere asignar agentes para mejorar la eficiencia departamental. ¿Qué configuración asegura que las tareas correctas sean gestionadas por los agentes adecuados?",
  "options": [
   {
    "letter": "A",
    "text": "Sales Coach Agent para leads y Service Agent para solicitudes de RRHH, y tickets de soporte para asegurar que los casos estén disponibles"
   },
   {
    "letter": "B",
    "text": "Lead Nurturing Agent para calificación de leads, Service Agent para tickets de soporte, Employee Agent para solicitudes de RRHH"
   },
   {
    "letter": "C",
    "text": "Un solo Service Agent para gestionar eficientemente cada uno de estos escenarios, lo cual reduce el número de tipos de agente necesarios para soporte"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Según la Guía de Descripción General y Despliegue de Agentforce, Salesforce recomienda utilizar agentes diseñados a la medida para maximizar la eficiencia entre departamentos: Lead Nurturing Agent (SDR Agent) para desarrollo de ventas y calificación de leads, Service Agent para servicio al cliente y casos de soporte, y Employee Agent para tareas internas de empleados (RRHH, IT y productividad)."
 },
 {
  "id": 15,
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
  "explanation": "El usuario Einstein Service Agent ejecuta el Flow bajo sus propios permisos, por lo que bajo un OWD Privado no ve nada. El principio de menor privilegio exige otorgar a ese usuario exactamente lo que necesita: permisos de objeto en su permission set junto con sharing rules apropiadas para las oportunidades relevantes. Ejecutar el Flow en modo sistema sin compartir (B) o cambiar el OWD a público (C) expone muchos más datos de los necesarios."
 },
 {
  "id": 16,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) está utilizando merge fields de listas relacionadas (related lists) en un prompt template asociado al objeto Account en Prompt Builder. ¿Qué debe considerar UC?",
  "options": [
   {
    "letter": "A",
    "text": "La generación del prompt no devolverá respuesta cuando no haya una lista relacionada asociada a la Cuenta en tiempo de ejecución."
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
  "explanation": "Al usar merge fields de listas relacionadas en un prompt template asociado al objeto Account en Prompt Builder, la lista relacionada Activities no está soportada debido a que se trata de un campo polimórfico. Los campos polimórficos pueden hacer referencia a múltiples tipos de objetos diferentes, lo que los hace incompatibles con algunas operaciones de merge fields en la generación de prompts."
 },
 {
  "id": 17,
  "category": "Trust Layer & Security",
  "text": "¿Qué parte de la arquitectura de Einstein Trust Layer aprovecha los datos propios de la organización dentro de un prompt para un Large Language Model (LLM) con el fin de retornar respuestas relevantes y precisas con confianza?",
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
  "explanation": "Dynamic Grounding en la arquitectura de Einstein Trust Layer asegura que los prompts enviados al Large Language Model (LLM) se enriquezcan con datos específicos de la organización (ej. registros de Salesforce, artículos de Knowledge) para generar respuestas precisas y relevantes. Al inyectar dinámicamente datos de contexto en los prompts, reduce alucinaciones y alinea los resultados con datos empresariales confiables."
 },
 {
  "id": 18,
  "category": "Agentforce Concepts",
  "text": "Universal Containers ha configurado un agente para gestionar solicitudes de devolución de clientes. Cuando un cliente inicia una devolución, el agente debe calcular un cargo por reabastecimiento específico. El agente necesita cotizar este monto exacto al cliente y luego reutilizar ese mismo valor al resumir el reembolso final. El Agentforce Specialist debe asegurar que el agente use lógica determinista para calcular la tarifa y reutilice de forma consistente exactamente el mismo valor sin adivinar ni alucinar. ¿Cómo debería configurar el agente para lograr este comportamiento?",
  "options": [
   {
    "letter": "A",
    "text": "Ejecutar un Flow como agent action para calcular la tarifa y poner la salida del Flow a disposición directa de la respuesta del agente. El agente podrá continuar usando este valor desde la memoria."
   },
   {
    "letter": "B",
    "text": "Definir una variable de contexto para la tarifa. Ejecutar un Flow como agent action para calcular la tarifa, asignar la salida del Flow a esa variable de contexto y hacer que el agente referencie esa variable en sus respuestas."
   },
   {
    "letter": "C",
    "text": "Proporcionar la fórmula matemática para el cargo por reabastecimiento en las instrucciones del sistema del agente e instruirle que recuerde el resultado para su reutilización."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque el cálculo determinista y la reutilización de tarifas requieren gestión de estado, no memoria conversacional. La tarifa debe ser calculada por una acción de Flow y guardada en una variable de contexto para que el mismo valor validado sea referenciado posteriormente en la conversación. Esto evita que el LLM vuelva a calcular, redondee diferente o alucine un nuevo valor durante el resumen del reembolso."
 },
 {
  "id": 19,
  "category": "Agentforce & Data",
  "text": "Al configurar una Data Library basada en carga de archivos, ¿cuáles son los tamaños máximos de archivo permitidos para archivos de texto/HTML y archivos PDF, respectivamente?",
  "options": [
   {
    "letter": "A",
    "text": "Hasta 100 MB para archivos de texto/HTML y hasta 4 MB para archivos PDF"
   },
   {
    "letter": "B",
    "text": "Hasta 50 MB tanto para archivos de texto/HTML como para archivos PDF"
   },
   {
    "letter": "C",
    "text": "Hasta 4 MB para archivos de texto/HTML y hasta 100 MB para archivos PDF"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es C porque Salesforce aplica diferentes límites de carga según el tipo de archivo para las Agentforce Data Libraries basadas en archivos. Los archivos de texto e HTML tienen un límite máximo de 4 MB, mientras que los archivos PDF permiten hasta 100 MB."
 },
 {
  "id": 20,
  "category": "Setup & Integration",
  "text": "Cloud Kicks (CK) recientemente finalizó el desarrollo de un nuevo prompt template que utiliza su propio Large Language Model (LLM). Al intentar desplegar el change set, CK recibe un error relacionado con el LLM utilizado en la plantilla. ¿Qué debería considerar el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "El prompt debe especificar que es un LLM personalizado."
   },
   {
    "letter": "B",
    "text": "El API Name del LLM debe coincidir en Sandbox y Producción."
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
  "explanation": "Los prompt templates referencian al modelo por su API Name; si el API Name del LLM personalizado en producción no coincide con el utilizado en el Sandbox, el despliegue del change set fallará. Marcar el prompt como personalizado o desactivar la plantilla no resuelve la referencia."
 },
 {
  "id": 21,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está implementando un proceso de verificación de clientes para su Service Agent donde la información sensible de la cuenta solo se puede consultar después de que el cliente pasa la verificación de identidad. El Agentforce Specialist necesita asegurar que esta regla de seguridad se aplique de manera determinista, evitando que el Large Language Model (LLM) omita el requerimiento de verificación para ejecutar la acción de búsqueda de cuenta. ¿Qué debería configurar el especialista para gestionar este comportamiento determinista?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar una política de Prompt Defense en Einstein Trust Layer para enmascarar los datos sensibles de la cuenta del reasoning engine hasta que el usuario complete exitosamente el proceso de verificación."
   },
   {
    "letter": "B",
    "text": "Almacenar el estado de verificación del usuario en una variable personalizada y aplicar una condición de filtro 'available when' a la acción de búsqueda de la cuenta, haciéndola invisible para el reasoning engine hasta que la variable se evalúe como true."
   },
   {
    "letter": "C",
    "text": "Agregar instrucciones explícitas en lenguaje natural dentro de la definición del subagente instruyendo al Large Language Model (LLM) a priorizar siempre la acción de verificación de clientes antes de proceder a la búsqueda de la cuenta."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque la búsqueda de cuentas sensibles debe restringirse determinísticamente. Una variable personalizada puede almacenar el estado de verificación, y un filtro 'available when' puede mantener la acción de búsqueda invisible hasta que ese estado sea verdadero. Esto evita que el LLM vea o seleccione la acción protegida antes de que la verificación tenga éxito."
 },
 {
  "id": 22,
  "category": "Agentforce Concepts",
  "text": "Cloud Kicks (CK) está lanzando un nuevo portal de socios en Experience Cloud. CK quiere proporcionar a los socios un agente que pueda responder preguntas sobre especificaciones de productos desde la base de conocimiento y permitirles enviar un nuevo Lead para un cliente potencial que hayan identificado. El agente debe ser accesible únicamente para usuarios socios autenticados en el portal. ¿Qué tipo de agente se requiere para cumplir con este requerimiento?",
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
  "explanation": "El tipo de agente requerido es Service Agent. La función principal descrita —responder preguntas desde la base de conocimiento— es la tarea principal de un Service Agent, diseñado para soporte en autoservicio y recuperación de artículos de conocimiento. Además, el Service Agent está destinado a desplegarse en sitios externos de Experience Cloud para brindar soporte a usuarios externos autenticados, como socios."
 },
 {
  "id": 23,
  "category": "Setup & Integration",
  "text": "Una empresa creó una acción personalizada en Apex invocada por un Employee Agent para obtener datos de una API externa. El método de callout usa el Session ID de Salesforce del usuario actual para autenticar la llamada. El callout externo funciona perfectamente en la interfaz de usuario (UI), pero falla silenciosamente cuando el agente lo activa. ¿Cuál es la mejor práctica de arquitectura para solucionar esto?",
  "options": [
   {
    "letter": "A",
    "text": "Extender explícitamente la seguridad de la clase Apex al perfil del usuario con sesión iniciada."
   },
   {
    "letter": "B",
    "text": "Asegurar que el Employee Agent tenga asignado el AgentforceServiceAgentUserPsg."
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
  "explanation": "La respuesta correcta es C porque la autenticación de API externa no debe depender del Session ID de la interfaz de usuario del usuario actual. Los contextos de ejecución de agentes difieren de los contextos interactivos de UI, por lo que la autenticación basada en sesión es frágil. Un Named Credential centraliza la URL del endpoint y los parámetros de autenticación, permitiendo a Salesforce gestionar de forma segura y constante la autenticación de llamadas."
 },
 {
  "id": 24,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist en Universal Containers (UC) está construyendo únicamente con herramientas no-code. Tienen muchas cuentas pequeñas que el equipo de ventas especializado solo toca periódicamente, y UC quiere maximizar el tiempo del equipo de operaciones de ventas. UC quiere ayudar a preparar al equipo de ventas para las llamadas mediante: Resumir compras pasadas, Mostrar productos en los que el contacto ha mostrado interés (con datos capturados vía Data 360), y Proporcionar un resumen de conversaciones previas por correo y teléfono que tengan transcripciones. ¿Qué enfoque debería recomendar el Agentforce Specialist para lograr este objetivo?",
  "options": [
   {
    "letter": "A",
    "text": "Usar un prompt template fundamentado en datos de CRM y Data 360 utilizando modelos de lenguaje estándar."
   },
   {
    "letter": "B",
    "text": "Ajustar (fine-tuning) el modelo estándar debido a la complejidad de los datos."
   },
   {
    "letter": "C",
    "text": "Desplegar el modelo fundacional personalizado de UC sobre estos datos primero."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La Guía de Builder No-Code y Prompt Templates de Agentforce especifica que cuando se utilizan los modelos de lenguaje estándar de Salesforce, los usuarios pueden fundamentar prompts en datos de CRM y Data Cloud sin requerir fine-tuning o despliegue de modelos. Este enfoque permite resumir datos del cliente (compras, intereses y comunicaciones) sin necesidad de personalización de modelos."
 },
 {
  "id": 25,
  "category": "Agentforce Concepts",
  "text": "Universal Containers (UC) necesita asegurar que su agente pueda procesar inmediatamente devoluciones de clientes validando la elegibilidad del pedido antes de proceder con el proceso de devolución. UC desea mantener un flujo conversacional natural para los clientes mientras garantiza que el paso de validación del pedido se cumpla estrictamente. ¿Qué debe hacer el Agentforce Specialist para lograr el resultado deseado?",
  "options": [
   {
    "letter": "A",
    "text": "Usar Salesforce Flow para guiar al Large Language Model (LLM) en la validación del pedido y el proceso de devolución."
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
  "explanation": "La respuesta correcta es C porque el requerimiento combina conversación natural con una secuencia estricta de procesos. Las instrucciones procedimentales de Agent Script están destinadas exactamente a este patrón híbrido: el agente puede conversar naturalmente, pero los pasos obligatorios (como la validación de elegibilidad) se pueden forzar antes de continuar."
 },
 {
  "id": 26,
  "category": "Agentforce Concepts",
  "text": "Universal Containers ha desarrollado un agente para flujos de trabajo de originación de préstamos que debe manejar tanto la no-determinación como requerimientos estrictos de cumplimiento normativo. El agente necesita asegurar que los pasos de verificación de identidad y consulta de crédito se ejecuten en una secuencia precisa sin desviaciones. ¿Qué afirmación diferencia correctamente estos dos patrones de instrucciones en el enfoque de razonamiento híbrido de Agent Script?",
  "options": [
   {
    "letter": "A",
    "text": "Las instrucciones declarativas requieren la ejecución de Flow para la lógica de negocio, mientras que las instrucciones procedimentales son nativas de Agent Script pero no pueden acceder a sistemas externos o APIs."
   },
   {
    "letter": "B",
    "text": "Las instrucciones declarativas proporcionan flexibilidad conversacional mediante la interpretación del Large Language Model (LLM), mientras que las instrucciones procedimentales usan el prefijo '->' para forzar un orden de ejecución garantizado con run, if y transiciones."
   },
   {
    "letter": "C",
    "text": "Las instrucciones declarativas solo funcionan en Canvas View para edición visual, mientras que las instrucciones procedimentales requieren Script View y no pueden representarse en la interfaz visual."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque Agent Script está construido para razonamiento híbrido: conversación flexible guiada por LLM más control procedimental determinista. Las instrucciones declarativas brindan guía conversacional pero no garantizan el orden de los pasos. Las instrucciones procedimentales se usan cuando la lógica de negocio crítica debe ejecutarse de forma garantizada."
 },
 {
  "id": 27,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) cuenta con un Flex prompt template que se ha utilizado durante los últimos 3 meses para responder preguntas basadas en entradas del usuario. Ahora, UC quiere dar un PDF como segundo input. ¿Cuál es el mejor enfoque para que el Agentforce Specialist cumpla con este requerimiento?",
  "options": [
   {
    "letter": "A",
    "text": "Reindexar para agregar un nuevo recurso a una plantilla existente."
   },
   {
    "letter": "B",
    "text": "Agregar un Resource en cualquier momento navegando a la sección Resources y configurando las entradas."
   },
   {
    "letter": "C",
    "text": "Descartar la plantilla Flex actual y crear una nueva con un recurso."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B. Los Flex prompt templates están diseñados para patrones de entrada personalizados, y Salesforce Prompt Builder permite a los especialistas definir recursos para la plantilla. Cuando el negocio desea agregar un PDF como entrada adicional, la acción declarativa correcta es agregar una entrada de archivo/recurso en la configuración de la plantilla y usarlo en el cuerpo del prompt."
 },
 {
  "id": 28,
  "category": "Trust Layer & Security",
  "text": "Un Agentforce Specialist desplegó un Service Agent en un sitio de Experience Cloud y habilitó Credential-Based User Verification. El especialista nota que todas las actualizaciones de registros (DML) muestran en el campo 'LastModifiedUser' al usuario comunitario autenticado (Community User) en lugar del usuario del agente (Agent User). ¿Qué debería explicar sobre el efecto en los campos de auditoría?",
  "options": [
   {
    "letter": "A",
    "text": "Se ha habilitado Credential-Based User Verification, lo que a su vez respeta todas las reglas de compartición y seguridad a nivel de campo."
   },
   {
    "letter": "B",
    "text": "El modo de ejecución del Flow para el agente está configurado como System Context Without Sharing."
   },
   {
    "letter": "C",
    "text": "Se ha habilitado Token-Based User Verification, lo que a su vez respeta todas las reglas de compartición y seguridad a nivel de campo."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es A. Credential-Based User Verification vincula la interacción del servicio al usuario autenticado de Experience Cloud, por lo que el acceso y cambios en registros se evalúan mediante el contexto de seguridad de ese usuario verificado. Eso explica por qué los campos de auditoría como Last Modified By muestran al usuario de la comunidad."
 },
 {
  "id": 29,
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
  "explanation": "La respuesta correcta es B. Los agentes internos orientados a empleados operan dentro del modelo de acceso del usuario autenticado de Salesforce. Un Service Agent orientado al cliente desplegado en Experience Cloud se configura alrededor de una identidad de ejecución dedicada (Einstein Service Agent User) con su propio conjunto de permisos."
 },
 {
  "id": 30,
  "disabled": true,
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
  "explanation": "El cálculo determinista y la reutilización precisa de tarifas requieren gestión de estado mediante variables de contexto. La tarifa debe ser calculada por una acción de Flow y guardada en una variable de contexto para que el mismo valor validado sea referenciado posteriormente sin recalcular ni alucinar."
 },
 {
  "id": 31,
  "category": "Prompt Engineering",
  "text": "El equipo de soporte de Coral Cloud Resorts necesita crear un Flex prompt template que resuma historiales de casos complejos para transferencias entre agentes. El objetivo es asegurar que los resúmenes sean concisos y sigan una estructura específica de tres partes: Issue, Steps Taken, y Next Action. ¿Qué debería recomendar un Agentforce Specialist para garantizar un formato de salida consistente?",
  "options": [
   {
    "letter": "A",
    "text": "Usar razonamiento en cadena de pensamientos (chain-of-thought reasoning)."
   },
   {
    "letter": "B",
    "text": "Definir la estructura de salida deseada con encabezados explícitos en la instrucción."
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
  "explanation": "La respuesta correcta es B porque el requerimiento se refiere a controlar la estructura del texto generado. En Prompt Builder, la forma más limpia de obtener una estructura constante es definir el formato deseado directamente en las instrucciones del prompt, incluyendo los encabezados exactos de sección."
 },
 {
  "id": 32,
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
  "explanation": "La respuesta correcta es A porque la respuesta está mal formada para la conversación humana. Coherence evalúa si la respuesta generada es comprensible, organizada lógicamente y presentada en formato de lenguaje natural. El JSON sin formato falla como respuesta conversacional cara al cliente."
 },
 {
  "id": 33,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist quiere solucionar un problema en un agente que está alucinando enlaces web (weblinks). El agente tiene una acción que utiliza un prompt template, el cual usa un knowledge retriever para generar el texto de salida. ¿Cuál es un paso apropiado para encontrar la causa raíz del comportamiento de alucinación?",
  "options": [
   {
    "letter": "A",
    "text": "Examinar el nombre del subagente (anteriormente conocido como topic) y la descripción de clasificación en busca de guardrails contra alucinaciones."
   },
   {
    "letter": "B",
    "text": "Examinar las instrucciones del prompt y el contenido de los fragmentos (chunks) mostrados en la salida resuelta del prompt."
   },
   {
    "letter": "C",
    "text": "Examinar las instrucciones del subagente (anteriormente conocido como topic instructions) y asegurar que la palabra \"ALWAYS\" se utilice en los guardrails contra alucinaciones."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Según la Guía de Solución de Problemas y Optimización de Agentforce, las alucinaciones ocurren a menudo debido a problemas en la construcción del prompt o en el grounding del contenido recuperado. El proceso de diagnóstico recomendado implica inspeccionar las instrucciones del prompt template y revisar los fragmentos (chunks) de conocimiento recuperados."
 },
 {
  "id": 34,
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
  "explanation": "Para que los Field Generation prompt templates muestren el ícono del destello (Sparkle), el campo objetivo debe asociarse explícitamente con el prompt template dentro del diseño de página (Lightning page layout)."
 },
 {
  "id": 35,
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
  "explanation": "En una Data Library basada en conocimiento, los campos de identificación (ej. Título, Número de Artículo) se utilizan para buscar y localizar el artículo relevante. Los campos de contenido (ej. Cuerpo del artículo) proporcionan los datos sustanciales que la IA utiliza para generar respuestas detalladas."
 },
 {
  "id": 36,
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
  "explanation": "La respuesta correcta es A porque Retriever Playground es la herramienta no-code adecuada para validar el comportamiento de recuperación antes del despliegue en producción. Permite probar retrievers individuales, ejecutar consultas representativas e inspeccionar los chunks recuperados."
 },
 {
  "id": 37,
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
  "explanation": "La respuesta correcta es C porque el protocolo Agent-to-Agent está diseñado para la interoperabilidad entre agentes a través de diferentes plataformas o proveedores. Permite a los agentes comunicarse, coordinar tareas y delegar trabajo de forma autónoma."
 },
 {
  "id": 38,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está construyendo un Agentforce Service Agent para gestionar restablecimientos de contraseña. El agente debe verificar primero la identidad del cliente mediante un código por correo y, una vez confirmada la identidad, ejecutar el Flow de restablecimiento de contraseña existente. El subagente de verificación de identidad ya está configurado. ¿Qué enfoque de implementación debería recomendar el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un agent action que referencie el Flow de restablecimiento de contraseña, asignarlo al subagente de verificación de identidad y llamarlo determinísticamente mediante lógica condicional de Agent Script."
   },
   {
    "letter": "B",
    "text": "Crear un subagente separado llamado Password Reset, configurarlo con una acción que invoque el Flow y pasar la variable de verificación de identidad como contexto para que las instrucciones del subagente validen el estado verificado antes de proceder."
   },
   {
    "letter": "C",
    "text": "Agregar una instrucción al subagente de verificación de identidad indicando al agente activar el Flow de restablecimiento al confirmar la identidad y guardar la intención en una variable de conversación."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque el restablecimiento de contraseña es una tarea distinta y debe modelarse como un subagente separado con su propia acción. El subagente de verificación de identidad establece el estado verificado y lo pasa como contexto."
 },
 {
  "id": 39,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) tiene un nuevo proyecto de IA. ¿Qué debe considerar UC al agregar una lista relacionada (related list) en la página de Account para ser utilizada en el prompt template?",
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
  "explanation": "Clave del examen: después de elegir un recurso de lista relacionada para la Cuenta, se utiliza el selector de campos (field picker) en Prompt Builder para seleccionar los merge fields deseados en el prompt."
 },
 {
  "id": 40,
  "category": "Agentforce & Data",
  "text": "Pacific Distribution Co. está implementando un sistema para gestionar el soporte de pedidos de socios y consultas de inventario. La empresa debe asegurar que los documentos grandes se procesen de manera efectiva para mejorar la precisión de recuperación cuando los agentes responden a las consultas. Comprender cómo se dividen e indexan los documentos es crucial. ¿Cuál es una característica clave del proceso de fragmentación (chunking)?",
  "options": [
   {
    "letter": "A",
    "text": "El chunking divide documentos grandes en unidades más pequeñas llamadas pasajes (passages)."
   },
   {
    "letter": "B",
    "text": "El proceso de chunking devuelve documentos enteros al Large Language Model (LLM) para su procesamiento."
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
  "explanation": "La respuesta correcta es A porque el chunking divide documentos grandes en unidades más pequeñas llamadas pasajes o chunks. Esto es fundamental para RAG porque el retriever debe devolver solo las secciones más relevantes en lugar de documentos enteros."
 },
 {
  "id": 41,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist en Universal Containers observa que el agente dirige con frecuencia a clientes con consultas claras de facturación hacia el subagente de resolución general (anteriormente conocido como topic). Este enrutamiento erróneo está causando un aumento en el tiempo promedio de atención e incumplimiento de SLAs. El gerente requiere una solución rápida de implementar pero que conserve la capacidad del agente para manejar conversaciones complejas. ¿Cuál es el enfoque más apropiado?",
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
  "explanation": "El enrutamiento erróneo entre subagentes suele ser competencia semántica (solapamiento en descripciones). Ajustar las instrucciones para clarificar el alcance y agregar filtros deterministas ('available when') resuelve el problema rápidamente manteniendo la flexibilidad conversacional."
 },
 {
  "id": 42,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está construyendo un Agentforce Service Agent para ayudar a los clientes a rastrear sus compras. Para almacenar el número de pedido del cliente durante la conversación, el especialista declara e inicializa una variable en Agent Script usando 'order_id: string = \"\"', omitiendo la palabra clave mutable. Durante las pruebas, el agente intenta actualizar la variable mediante @utils.setVariables. ¿Cuál es el resultado de esta declaración en tiempo de ejecución?",
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
  "explanation": "Las variables de Agent Script son de solo lectura a menos que se declaren explícitamente con la palabra clave mutable (ej. order_id: mutable string = \"\"). Sin ella, los intentos de actualización en tiempo de ejecución fallarán."
 },
 {
  "id": 43,
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
  "id": 44,
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
  "id": 45,
  "category": "Agentforce & Data",
  "text": "En una Data Library basada en conocimiento, ¿qué funcionalidad proporciona habilitar la opción 'Filter by Knowledge Data Categories'?",
  "options": [
   {
    "letter": "A",
    "text": "Aplica metadatos personalizados de las categorías de datos seleccionadas a los artículos para mejorar la relevancia de búsqueda."
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
  "id": 46,
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
  "id": 47,
  "category": "Agentforce & Data",
  "text": "Una empresa necesita asegurar que sus clientes siempre reciban respuestas basadas en la versión más actual de la documentación de soporte. ¿Qué debería recomendar un Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Usar una Agentforce Data Library (ADL) basada en archivos y activar la configuración de gestión de versiones para recuperar el documento más reciente."
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
  "id": 48,
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
  "id": 49,
  "category": "Prompt Engineering",
  "text": "Un gerente de servicio desea usar Salesforce Prompt Builder para ayudar a sus agentes a resumir notas de caso tras una llamada. El resumen debe: + Capturar el problema, pasos de solución y acciones futuras. + No superar 5 oraciones. + Usar lenguaje sencillo (sin jerga). + Si no hay acciones futuras, indicar explícitamente \"No next action required.\" ¿Qué construcciones clave de prompt cumplen con estos requerimientos?",
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
  "id": 50,
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
  "id": 51,
  "category": "Agentforce & Data",
  "text": "Universal Containers necesita fundamentar un nuevo agente de Agentforce con datos estructurados almacenados en un sistema externo sin duplicarlos en Data 360. Este enfoque es necesario para garantizar la precisión de los datos en tiempo real y minimizar los costos de almacenamiento. ¿Qué concepto de Data 360 debería usar el equipo para lograr esto?",
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
  "explanation": "La respuesta correcta es B porque Zero Copy Data Federation está diseñado para acceder a datos externos sin copiarlos o ingerirlos físicamente en Data 360. La Opción A no resuelve el requerimiento de evitar la duplicación de datos estructurados externos. La Opción C importa datos a Data 360, lo cual contradice la exigencia de no duplicar y minimizar costos de almacenamiento."
 },
 {
  "id": 52,
  "category": "Agentforce Concepts",
  "text": "Universal Containers (UC) ha desplegado varios Employee Agents especializados como IT Support, HR Assistant y Procurement para asistir en tareas internas. Recientemente, el centro de soporte de UC reportó un alto volumen de interacciones fallidas porque los empleados eligen con frecuencia el agente incorrecto para sus solicitudes (por ejemplo, pedirle al agente HR Assistant que restablezca una contraseña de red). UC desea mejorar la experiencia del usuario, escalar el despliegue y centralizar el control sin requerir que los empleados adivinen qué agente usar. ¿Qué enfoque arquitectónico debería recomendar el Agentforce Specialist para resolver este problema?",
  "options": [
   {
    "letter": "A",
    "text": "Crear una regla de validación personalizada en el objeto Agent Session para evitar que los usuarios envíen prompts que no coincidan con las instrucciones del sistema del agente seleccionado."
   },
   {
    "letter": "B",
    "text": "Implementar una arquitectura Single Org Multi-Agent (SOMA) para que actúe como un punto de entrada centralizado y unificado que interprete la intención del usuario y enrute la solicitud a las capacidades especializadas correspondientes."
   },
   {
    "letter": "C",
    "text": "Desplegar una arquitectura Multi-Agent independiente donde cada agente especializado le pida al usuario verificar su departamento y rol específicos antes de proceder con la conversación."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque el problema es que se está obligando a los usuarios a elegir ellos mismos el agente especializado. Una arquitectura Single Org Multi-Agent proporciona un punto de entrada centralizado que interpreta la intención del usuario y enruta la solicitud al agente o capacidad especializada correspondiente."
 },
 {
  "id": 53,
  "category": "Agentforce & Data",
  "text": "Universal Containers opera un portal de autoservicio para clientes respaldado por un Agentforce Service Agent. El equipo de cumplimiento normativo mantiene una base de conocimiento en Salesforce Knowledge con directrices publicadas de cumplimiento de productos, términos de servicio y procedimientos regulatorios, actualizada regularmente por expertos. ¿Cuál es el enfoque más eficiente para asegurar que el agente recupere únicamente contenido publicado actual mediante comprensión semántica de las preguntas de los clientes, y que los artículos obsoletos nunca se muestren?",
  "options": [
   {
    "letter": "A",
    "text": "Construir una acción de subagente usando un Salesforce Flow para consultar el Data Model Object (DMO) de artículos de Knowledge en tiempo de ejecución y retornar contenido coincidente al agente."
   },
   {
    "letter": "B",
    "text": "Crear una Agentforce Data Library conectada a la base de conocimiento de Salesforce Knowledge, filtrada solo a artículos publicados, permitiendo que el agente fundamenté sus respuestas usando recuperación semántica impulsada por Retrieval-Augmented Generation (RAG) que refleje automáticamente las actualizaciones de Knowledge sin requerir reconfiguración del agente."
   },
   {
    "letter": "C",
    "text": "Configurar un retriever personalizado en Einstein Studio conectado a un índice de búsqueda de Data 360, aplicando filtros para restringir."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Una Agentforce Data Library conectada a Salesforce Knowledge y filtrada solo a artículos publicados es la forma gestionada de fundamentar a un Service Agent: Knowledge administra el ciclo de vida del artículo, y la librería indexa el contenido aprobado para respuestas RAG sin código personalizado."
 },
 {
  "id": 54,
  "category": "Agentforce & Data",
  "text": "Un Agentforce Specialist se prepara para subir varios documentos de políticas en PDF a una nueva Agentforce Data Library basada en archivos. Para aprovechar el procesamiento avanzado con Intelligent Context, ¿cómo debe proceder el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Subir hasta cinco PDFs que pesen 100 MB o menos para permitir que el sistema evalúe la configuración óptima de indexación."
   },
   {
    "letter": "B",
    "text": "Subir hasta cinco PDFs que pesen 10 MB o menos para permitir que el sistema evalúe la configuración óptima de indexación."
   },
   {
    "letter": "C",
    "text": "Habilitar manualmente Intelligent Context en Data 360 antes de subir los archivos PDF."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque las herramientas de procesamiento avanzado de Intelligent Context se aplican automáticamente a librerías de datos de Agentforce basadas en archivos cuando se suben PDFs de 10 MB o menos (con un límite de hasta 5 archivos)."
 },
 {
  "id": 55,
  "category": "Setup & Integration",
  "text": "Universal Containers está construyendo un agente personalizado y creando una nueva acción de Apex que acepta una colección de valores de texto (como una lista de nombres de productos) como parámetro de entrada. El Agentforce Specialist está configurando los metadatos de la acción en Agentforce Assets y necesita mapear esta entrada correctamente para que el reasoning engine pueda pasar la lista de strings de forma adecuada. Al definir esta entrada, ¿qué complex_data_type_name debería utilizar el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "lightning__stringType"
   },
   {
    "letter": "B",
    "text": "apex_String"
   },
   {
    "letter": "C",
    "text": "lightning_textType"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es A porque los metadatos de acciones en Agentforce deben utilizar tipos de datos Lightning soportados al definir entradas y salidas. Una colección de valores de texto debe exponerse mediante un tipo Lightning soportado como 'lightning__stringType'."
 },
 {
  "id": 56,
  "category": "Agentforce Concepts",
  "text": "Universal Containers ha estado construyendo un agente utilizando Canvas. Creó una acción \"Issue Refund\". Las reglas de negocio dictan que los reembolsos solo se pueden emitir si el Account_Tier del cliente es \"Platinum\". Actualmente, el agente confía en las instrucciones del sistema para verificar el nivel, pero ocasionalmente alucina autorización e intenta llamar a la acción de reembolso para clientes Standard, lo que resulta en errores de backend. ¿Cómo debería utilizar los filtros el Agentforce Specialist para asegurar de forma determinista que el agente no pueda procesar la acción \"Issue Refund\" a menos que el cliente cumpla con el criterio?",
  "options": [
   {
    "letter": "A",
    "text": "Actualizar las instrucciones del sistema del agente con una regla estricta para filtrar manualmente cualquier solicitud de reembolso si el nivel de cuenta del cliente no es Platinum."
   },
   {
    "letter": "B",
    "text": "Aplicar un filtro de texto a la Agent Session que bloquee automáticamente la palabra \"refund\" del prompt del usuario a menos que sea un cliente Platinum."
   },
   {
    "letter": "C",
    "text": "Configurar un filtro Action Condition en la acción \"Issue Refund\" para que solo esté disponible para el agente cuando Account_Tier sea igual a \"Platinum\"."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es C porque esta restricción debe aplicarse de forma determinista en la capa de disponibilidad de la acción. Un filtro de condición en la acción oculta \"Issue Refund\" al reasoning engine a menos que se cumpla el criterio de nivel de cuenta."
 },
 {
  "id": 57,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desea validar sistemáticamente las respuestas del agente antes del despliegue utilizando un proceso de prueba escalable. ¿Qué enfoque de Testing Center debería implementar la empresa?",
  "options": [
   {
    "letter": "A",
    "text": "Subir un archivo de prueba CSV estructurado y ejecutar casos de prueba en lote (batch test cases) en Testing Center."
   },
   {
    "letter": "B",
    "text": "Interactuar manualmente con el agente en Builder hasta que las respuestas parezcan correctas."
   },
   {
    "letter": "C",
    "text": "Usar usuarios piloto en producción para marcar respuestas incorrectas tras el lanzamiento."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La prueba en lote (batch testing) en Testing Center permite cargar plantillas de prueba CSV con enunciados reales de usuarios, clasificaciones esperadas y resultados deseados para ejecutar evaluaciones masivas y repetibles antes de la activación."
 },
 {
  "id": 58,
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
  "explanation": "La respuesta correcta es C porque Agent-to-Agent (A2A) es el protocolo diseñado específicamente para la comunicación e interoperabilidad entre agentes de IA independientes alojados en plataformas o proveedores distintos."
 },
 {
  "id": 59,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) está desplegando varios prompt templates para asistir a sus agentes de soporte utilizando los modelos de lenguaje estándar de Salesforce. La directiva requiere que las respuestas generadas reflejen de forma consistente un tono empático y altamente profesional. UC solo permite el uso de Large Language Models (LLMs) estándar. ¿Cuál es la técnica de prompt engineering más efectiva que debe implementar el Agentforce Specialist en Prompt Builder para cumplir con este requerimiento?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar el tono de la plantilla con un conjunto de datos de interacciones pasadas utilizando diferentes estilos de escritura, intensificadores y puntuación para alterar permanentemente el tono predeterminado del LLM."
   },
   {
    "letter": "B",
    "text": "Incluir una instrucción directa pidiendo al LLM que asuma un rol de personaje específico (por ejemplo, \"Actúa como un agente empático de soporte al cliente\") para proporcionar contexto y establecer el tono."
   },
   {
    "letter": "C",
    "text": "Incluir preguntas de lista de selección múltiple dentro del prompt template para probar y corregir sistemáticamente la comprensión del LLM sobre el contexto deseado antes de generar la respuesta."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es B porque la asignación de roles (role-based prompting) es la técnica adecuada para moldear el tono y comportamiento sin modificar o reentrenar el modelo fundacional subyacente."
 },
 {
  "id": 60,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist activó Einstein Generative AI en Setup. Ahora, desea crear prompt templates personalizados en Prompt Builder. Sin embargo, no puede acceder a Prompt Builder en el menú de Setup. ¿Qué está causando el problema?",
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
    "text": "El Large Language Model (LLM) no se configuró correctamente en Data 360."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Para acceder y crear plantillas de prompt personalizadas en Prompt Builder, el usuario debe tener asignado el permission set 'Prompt Template Manager'. El permiso 'Prompt Template User' solo autoriza la ejecución de las plantillas creadas."
 },
 {
  "id": 61,
  "category": "Agentforce & Data",
  "text": "Universal Containers ha fragmentado (chunked) y vectorizado exitosamente sus notas de reunión no estructuradas dentro de un índice de búsqueda en Data 360. Un Agentforce Specialist necesita conectar estos datos a un prompt template para refinar dinámicamente los criterios de búsqueda y recuperar la información más relevante. ¿Cómo debe lograrlo el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un Flex template que haga referencia a un Data Lake Object (DLO)."
   },
   {
    "letter": "B",
    "text": "Crear un Flex template que haga referencia a un retriever dentro del prompt template."
   },
   {
    "letter": "C",
    "text": "Crear un Flex template que haga referencia al Data Model Object (DMO)."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Una vez que el contenido no estructurado ha sido fragmentado, vectorizado e indexado en Data 360, la plantilla de prompt debe utilizar un retriever para buscar en ese índice y retornar los pasajes más relevantes para el grounding."
 },
 {
  "id": 62,
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
  "explanation": "Prompt Builder está diseñado para la generación de texto contextualizado con datos del CRM (como redactar respuestas de propuesta). El pronóstico de tendencias y la puntuación de leads son casos de uso predictivos atendidos por Einstein Predictions."
 },
 {
  "id": 63,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist está creando una custom agent action. El subagente (anteriormente conocido como topic) se selecciona correctamente, pero la acción no. ¿Qué componente de la estructura de la acción en Agent Script ayuda al Large Language Model (LLM) a decidir cuándo utilizar la acción?",
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
  "explanation": "En Agent Script, la propiedad 'description' de una acción es lo que el LLM lee para entender el propósito de la herramienta y decidir cuándo invocarla. Una descripción vaga u omnicomprensiva es la causa habitual de fallas en la selección de acciones."
 },
 {
  "id": 64,
  "category": "Trust Layer & Security",
  "text": "Un Agentforce Specialist está evaluando una conversación de un agente. ¿Por qué es importante considerar las intenciones (intents) y las métricas de sesión dentro de Observability?",
  "options": [
   {
    "letter": "A",
    "text": "Para evaluar el desempeño general del agente"
   },
   {
    "letter": "B",
    "text": "Para evaluar por qué el agente no pudo responder a la pregunta específica de un usuario"
   },
   {
    "letter": "C",
    "text": "Para evaluar la tasa de desviación (deflection rate) del agente exclusivamente"
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Las métricas de intenciones y sesiones en Agentforce Observability son indicadores operacionales amplios que sirven para analizar el desempeño y efectividad global del agente."
 },
 {
  "id": 65,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) está implementando Agentforce Service Agent en el canal de Email. UC creó una plantilla de correo y necesita conectarla a un Service Agent. ¿Qué debería recomendar un Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Crear una plantilla de correo clásica (classic email template) que defina la estructura de todos los correos enviados por el Agentforce Service Agent."
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
  "explanation": "Agentforce Service Agent en el canal de Email envía sus respuestas a través de una plantilla de correo Lightning (Lightning email template) que define la estructura del correo saliente."
 },
 {
  "id": 66,
  "category": "Agentforce Concepts",
  "text": "El agente de soporte de una empresa ejecuta de forma inconsistente una acción obligatoria de verificación de fraude antes de procesar reembolsos. En algunas conversaciones la verificación se activa, pero en otras salta directamente a emitir el reembolso. Tras revisar el caso, un Agentforce Specialist recomienda colocar la instrucción con 'run @actions.fraud_check' seguida de 'run @actions.process_refund'. ¿Cuál es el efecto de este cambio de configuración?",
  "options": [
   {
    "letter": "A",
    "text": "Se sugerirá con más fuerza la acción de verificación de fraude al LLM, pero aún se podrá omitir si el LLM determina que no es relevante."
   },
   {
    "letter": "B",
    "text": "La verificación de fraude se ejecutará después de la revisión del LLM si se omitió, pero el agente perderá su capacidad de usar un tono empático."
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
  "explanation": "Colocar 'run @actions.fraud_check' antes de 'run @actions.process_refund' en las instrucciones procedimentales hace que la secuencia sea determinista: el mandato 'run' ejecuta la acción en cuanto se alcanza la ruta de código, eliminando el criterio discrecional del LLM."
 },
 {
  "id": 67,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está configurando su Agentforce Testing Center para evaluar un agente que gestiona quejas de clientes. La empresa desea evaluar si el agente demuestra empatía y sigue un marco propio de desescalamiento (\"De-escalation Framework\") antes de ofrecer una resolución. ¿Dónde debe utilizar el Agentforce Specialist un evaluador basado en LLM (LLM-as-judge) para lograr una evaluación adecuada?",
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
  "explanation": "Para evaluar un marco corporativo propio o estándar de empatía específico, se debe crear una evaluación personalizada con un prompt detallado para que un modelo juez (LLM-as-judge) analice las respuestas del agente frente a esa rúbrica."
 },
 {
  "id": 68,
  "category": "Agentforce Concepts",
  "text": "El agente de Universal Containers siempre debe consultar el nivel de cuenta del cliente y los casos abiertos en Salesforce antes de decidir cómo responder. Basado en el flujo de control de Agent Script, ¿qué es correcto sobre la ejecución de acciones deterministas al inicio de un subagente?",
  "options": [
   {
    "letter": "A",
    "text": "Solo se puede garantizar que las acciones se ejecuten colocándolas en el bloque config."
   },
   {
    "letter": "B",
    "text": "Solo before_reasoning puede garantizar que se invoque al LLM antes de ejecutar una acción."
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
  "explanation": "Clave del examen: Opción A (de acuerdo a los registros de la clave oficial de respuestas de la evaluación)."
 },
 {
  "id": 69,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist está probando un agente con Testing Center. Los resultados muestran que el agente identifica correctamente el subagente para manejar el enunciado, pero no selecciona todas las acciones necesarias dentro de ese subagente. ¿Qué métrica de evaluación identifica específicamente este fallo?",
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
  "explanation": "Action Assertion es la métrica correcta porque la falla no ocurrió en el enrutamiento al subagente (Subagent Assertion), sino en la selección de herramientas/acciones requeridas dentro del subagente alcanzado."
 },
 {
  "id": 70,
  "category": "Agentforce & Data",
  "text": "Universal Containers (UC) configuró una librería de datos y quiere restringir la indexación de artículos de conocimiento únicamente a aquellos que sean públicos. UC también desea que el agente enlace las fuentes en las que fundamentó su respuesta. ¿Qué configuraciones ayudan a cumplir con esto?",
  "options": [
   {
    "letter": "A",
    "text": "Usar Data Categories para categorizar los artículos públicos a indexar. Las fuentes se muestran automáticamente cuando los artículos se categorizan como Public."
   },
   {
    "letter": "B",
    "text": "En la ventana de configuración de la librería, en Knowledge Settings, activar 'Use Public Knowledge Article'. No es posible mostrar fuentes."
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
  "explanation": "Dentro de la configuración de la Agentforce Data Library, bajo Knowledge Settings, habilitar 'Use Public Knowledge Article' restringe la indexación a contenido público, y marcar 'Show sources' permite mostrar las citas/fuentes utilizadas en las respuestas."
 },
 {
  "id": 71,
  "category": "Setup & Integration",
  "text": "El equipo de cumplimiento de Universal Containers determinó que un prompt de servicio al cliente debe procesar datos únicamente mediante un modelo seguro hospedado en Amazon Bedrock, evitando el uso de los modelos predeterminados de OpenAI. ¿Cómo debe configurar este enrutamiento el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Asignar un permission set al Agent User dedicado que restrinja el acceso de lectura a los registros de metadatos de los LLM predeterminados."
   },
   {
    "letter": "B",
    "text": "Configurar un endpoint de Data 360 Private Connect que redirija todas las solicitudes fuera del LLM Gateway predeterminado."
   },
   {
    "letter": "C",
    "text": "Registrar el modelo como un BYOLLM en Einstein Studio, y luego seleccionar explícitamente este modelo al configurar el prompt template."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Salesforce admite la integración Bring Your Own Large Language Model (BYOLLM) a través de AI Models (anteriormente Einstein Studio), lo que permite registrar un modelo en Amazon Bedrock y seleccionarlo explícitamente en el prompt template."
 },
 {
  "id": 72,
  "category": "Agentforce Concepts",
  "text": "Cloud Kicks quiere que su Agentforce Service Agent recupere datos fácticos actualizados de internet. ¿Qué paso debe tomar el Agentforce Specialist para asegurar que el agente use la capacidad de búsqueda web adecuadamente?",
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
    "text": "Eliminar el subagente predeterminado General FAQ y reemplazar su función por un nuevo topic General Web Search."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Clave del examen: habilitar la acción estándar 'Answer Questions with Knowledge' en el subagente General FAQ, que es la acción mediante la cual el agente responde preguntas sobre hechos y se puede configurar para apoyarse en resultados de búsqueda web."
 },
 {
  "id": 73,
  "category": "Setup & Integration",
  "text": "Universal Containers (UC) está escalando su despliegue de Agentforce y necesita conectar sus agentes de IA de forma segura a un número creciente de sistemas de datos empresariales externos y entornos de desarrollo locales. En lugar de construir lógica de integración personalizada para cada nueva fuente, el especialista recomienda aprovechar el Model Context Protocol (MCP). ¿Cuál es el propósito principal de usar un estándar abierto como MCP en este escenario?",
  "options": [
   {
    "letter": "A",
    "text": "Estandarizar la conexión segura y la entrega de contexto entre modelos de IA y diversas fuentes de datos locales o remotas."
   },
   {
    "letter": "B",
    "text": "Reemplazar RAG almacenando todos los datos externos de forma nativa dentro de los pesos del LLM."
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
  "explanation": "MCP es un estándar abierto para conectar aplicaciones y agentes de IA a herramientas, servicios y fuentes de datos externas mediante un protocolo común, evitando integraciones personalizadas punto a punto."
 },
 {
  "id": 74,
  "category": "Agentforce & Data",
  "text": "Un Agentforce Specialist en Universal Containers recomendó previamente eliminar documentos obsoletos de políticas hipotecarias ingeridos en Data 360 para evitar recuperar términos desactualizados. Legal confirmó que todas las versiones históricas deben permanecer, ya que cada versión sigue siendo contractualmente vinculante para los clientes que firmaron bajo ella. ¿Qué recomendación revisada debería hacer el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Configurar un retriever personalizado con un filtro dinámico sobre los metadatos de la versión de la política, poblado en tiempo de ejecución desde el registro Contract del cliente, delimitando la búsqueda a la versión correcta antes del ranking de similitud."
   },
   {
    "letter": "B",
    "text": "Agregar el identificador de versión como un campo inicial en el índice de búsqueda para que el LLM elija la versión correcta durante la generación de respuestas."
   },
   {
    "letter": "C",
    "text": "Crear un data stream separado para cada versión y configurar al agente para consultar el UDMO correspondiente a la fecha de contrato del cliente."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Puesto que todas las versiones deben permanecer indexadas, la solución consiste en acotar la recuperación mediante un retriever personalizado con filtro dinámico sobre metadatos de versión alimentados desde el registro del contrato."
 },
 {
  "id": 75,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) desea incorporar el estado actual de cumplimiento de pedidos almacenado en un sistema ERP externo dentro de un prompt para el LLM. ¿Cuál es la técnica de fundamentación (data grounding) más apropiada?",
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
  "explanation": "Exponer los datos del ERP mediante Salesforce Connect como objetos externos (External Objects) permite utilizar merge fields de registros de objetos externos dentro del prompt template para leer el estado en tiempo de ejecución."
 },
 {
  "id": 76,
  "category": "Agentforce Concepts",
  "text": "Antes de activar una custom agent action, un Agentforce Specialist desea evaluar múltiples enunciados reales de usuarios para asegurar que la acción sea seleccionada adecuadamente. ¿Qué herramienta debería recomendar?",
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
  "explanation": "Agentforce Testing Center ejecuta pruebas masivas en lote de enunciados reales contra el agente e informa qué subagente y qué acción se seleccionaron para cada uno antes de la activación."
 },
 {
  "id": 77,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desplegó Agentforce para gestionar el rastreo de pedidos, devoluciones y soporte de lealtad. El agente necesita equilibrar la flexibilidad conversacional con la ejecución garantizada de pasos de verificación de identidad antes de acceder a la información de la cuenta. ¿Qué afirmación describe correctamente el razonamiento híbrido en Agent Script?",
  "options": [
   {
    "letter": "A",
    "text": "El razonamiento híbrido usa múltiples LLM simultáneamente, uno para la conversación y otro para la lógica determinista a través de integración con Flow."
   },
   {
    "letter": "B",
    "text": "El razonamiento híbrido requiere Canvas View para instrucciones declarativas y Script View para instrucciones procedimentales."
   },
   {
    "letter": "C",
    "text": "El razonamiento híbrido combina instrucciones declarativas en lenguaje natural que permiten la interpretación del LLM con instrucciones procedimentales que usan el prefijo run e imponen un orden de ejecución garantizado."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El razonamiento híbrido en Agent Script combina instrucciones declarativas en lenguaje natural (interpretadas de forma flexible por el LLM) con instrucciones procedimentales con prefijo 'run' (que se ejecutan determinísticamente en orden)."
 },
 {
  "id": 78,
  "category": "Setup & Integration",
  "text": "Universal Containers construyó un Service Agent fundamentado en una librería de datos de conocimiento con 200 artículos de FAQ. El equipo calcula que crear manualmente casos de prueba tomaría 3 semanas. ¿Qué paso debe tomar el especialista para generar un conjunto de pruebas inicial sin redacción manual?",
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
  "explanation": "Agentforce Testing Center puede generar automáticamente conjuntos de datos de prueba a partir del conocimiento disponible para el agente (los 200 artículos de FAQ de la librería de datos)."
 },
 {
  "id": 79,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist trabaja declarativamente en la versión 4 de un prompt template. Se identifica un error en la versión 3 que requiere un hotfix para ser desplegado a producción inmediatamente. El equipo desplegará este cambio como una nueva versión. ¿Qué debería hacer el especialista para asegurar que su trabajo en la versión 4 no se pierda y no entre en conflicto con la nueva versión?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un nuevo prompt template con la corrección del error, actualizar todas las referencias y eliminar la plantilla anterior."
   },
   {
    "letter": "B",
    "text": "Guardar su trabajo en la versión 4 y permitir que la plantilla se despliegue con una nueva versión 5 que contenga la corrección."
   },
   {
    "letter": "C",
    "text": "Copiar y pegar la versión 4 en un archivo de respaldo y permitir que el otro equipo sobrescriba la versión 4."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "El control de versiones de plantillas está diseñado para preservar borradores de trabajo. El especialista guarda la versión 4 y la corrección se despliega como versión 5 sin sobrescribir ni perder el borrador anterior."
 },
 {
  "id": 80,
  "category": "Agentforce & Data",
  "text": "Cloud Kicks maneja contratos legales largos y complejos. Un agente debe recuperar cláusulas específicas anidadas dentro de secciones más grandes. El chunking estándar falla en capturar el contexto completo. ¿Qué estrategia de chunking debería utilizarse para preservar la estructura del documento?",
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
  "explanation": "Un tamaño de fragmento (chunk size) más grande mantiene junta una mayor cantidad de texto legal circundante, reduciendo el riesgo de fragmentar cláusulas y separarlas de sus definiciones o condiciones."
 },
 {
  "id": 81,
  "category": "Agentforce & Data",
  "text": "Un Agentforce Specialist está configurando Salesforce Knowledge como fuente para una Data Library y debe seleccionar \"Identifying Fields\" para ayudar a Agentforce a ubicar la información correcta. Los contenidos de los artículos son extensos y detallados. ¿Qué debería usar el especialista como Identifying Fields?",
  "options": [
   {
    "letter": "A",
    "text": "El contenido principal completo del artículo para garantizar el uso del artículo más relevante"
   },
   {
    "letter": "B",
    "text": "Cualquier campo de texto o área de texto que proporcione un resumen conciso del artículo"
   },
   {
    "letter": "C",
    "text": "Cualquier campo de fórmula estándar o personalizado que contenga una clave concatenada adecuada"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Los Identifying Fields deben ser campos de texto concisos que resuman el artículo para localizarlo eficientemente. Los cuerpos de texto largos deben ser 'Content Fields' para brindar el grounding detallado."
 },
 {
  "id": 82,
  "category": "Agentforce & Data",
  "text": "Universal Containers (UC) construyó un retriever personalizado en AI Models (anteriormente Einstein Studio) para fundamentar respuestas de IA con documentación técnica. UC ahora requiere que se incluya un campo de resumen del índice de búsqueda en la salida para dar una visión general de cada documento recuperado. ¿Cuál es la acción recomendada para UC?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un retriever personalizado completamente nuevo con una configuración revisada y eliminar el actual. No es posible editar un retriever existente."
   },
   {
    "letter": "B",
    "text": "Editar la versión del retriever existente para agregar el campo de resumen a la lista de campos devueltos, guardar los cambios y activar la nueva versión para que los prompt templates usen la configuración actualizada."
   },
   {
    "letter": "C",
    "text": "Usar solo el retriever predeterminado, el cual incluirá automáticamente todos los campos disponibles del índice de búsqueda."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Los retrievers admiten control de versiones. La solución es editar la configuración de la versión existente para incluir el nuevo campo devuelto, guardar y activar la nueva versión."
 },
 {
  "id": 83,
  "category": "Trust Layer & Security",
  "text": "Un Agentforce Specialist intenta solucionar un problema reportado por un usuario pero no ve la sesión en la pestaña Processed Sessions de Agentforce Observability. ¿Qué debe tomar en consideración el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "El agente no se ha registrado en la aplicación de Observability, por lo que no se procesan sesiones."
   },
   {
    "letter": "B",
    "text": "La sesión está en cola para ser procesada y puede visualizarse en la pestaña Unprocessed Sessions."
   },
   {
    "letter": "C",
    "text": "Las sesiones se procesan en lotes de 24 horas y los registros deben revisarse al día siguiente."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Si una sesión no aparece en Processed Sessions, la causa primaria a revisar es que aún esté en procesamiento en la cola visible en la pestaña Unprocessed Sessions."
 },
 {
  "id": 84,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está diseñando un agente para asistir con la gestión de pedidos y automatización de soporte a distribuidores. El agente debe verificar las credenciales del distribuidor antes de dar acceso a los detalles del pedido. El equipo ya declaró la variable is_verified, configuró la acción de verificación y planea restringir el acceso al subagente de detalles de pedido mediante 'available when'. ¿Qué debe hacer el equipo para asegurar que el subagente esté disponible solo tras una verificación exitosa?",
  "options": [
   {
    "letter": "A",
    "text": "Agregar una condición available when: @variables.is_verified = true al subagente de detalles de pedido."
   },
   {
    "letter": "B",
    "text": "Declarar la variable is_verified como inmutable para que no se pueda modificar durante la sesión."
   },
   {
    "letter": "C",
    "text": "Actualizar la variable is_verified a true después de que la acción de verificación responda con éxito utilizando @utils.setVariables."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Definir la regla de guardián no sirve si no se actualiza el estado de la variable. La variable debe cambiar a 'true' mediante @utils.setVariables cuando la acción de verificación responda con éxito."
 },
 {
  "id": 85,
  "category": "Agentforce & Data",
  "text": "Universal Containers está implementando una solución de Retrieval Augmented Generation (RAG) donde la base de conocimiento contiene artículos en español, pero los usuarios realizarán consultas en francés e inglés. El Agentforce Specialist necesita asegurar que el retriever pueda encontrar artículos relevantes con precisión a pesar de las diferencias de idioma. ¿Qué debe hacer el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Usar el modelo de embeddings multilingüe e5-large para usuarios de francés y español."
   },
   {
    "letter": "B",
    "text": "Usar el modelo de embeddings multilingüe e5-large para usuarios de francés e inglés."
   },
   {
    "letter": "C",
    "text": "Usar el modelo de embeddings multilingüe e5-large para gestionar todos los idiomas."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Seleccionar el modelo de embeddings multilingüe e5-large de forma general para el índice de búsqueda permite representar conceptos semánticamente similares entre español, francés e inglés en el mismo espacio vectorial."
 },
 {
  "id": 86,
  "category": "Agentforce Concepts",
  "text": "Universal Containers (UC) asistió a una feria comercial y recibió miles de nuevos leads. Liderazgo quiere: Calificar y nutrir leads 24/7, Responder preguntas precisas a prospectos, Agendar reuniones automáticamente con prospectos calificados, y Liberar a los representantes de ventas para cerrar acuerdos. ¿Qué capacidad de Agentforce debe implementar UC?",
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
  "explanation": "El Lead Nurturing Agent (sucesor del SDR Agent) interactúa de forma autónoma con leads entrantes las 24 horas, responde dudas desde contenido aprobado y programa reuniones con prospectos calificados."
 },
 {
  "id": 87,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) desea crear un prompt template que extraiga de forma consistente el número de modelo de producto y la cantidad desde una consulta por correo para redactar una respuesta. ¿Qué buena práctica debe implementar UC?",
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
    "text": "Usar un ajuste de temperatura alto para aumentar la creatividad de salida."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "Para extracción de información estructurada, la mejor práctica de prompt engineering es proporcionar instrucciones claras y directas acompañadas de ejemplos de pocos disparos (few-shot examples) que ilustren el formato esperado."
 },
 {
  "id": 88,
  "category": "Prompt Engineering",
  "text": "Un Agentforce Specialist está creando un prompt template para asistir a representantes de servicio en la redacción de respuestas a quejas de clientes. Para asegurar que las respuestas sean empáticas y serviciales, ¿cuál es un elemento clave a incluir en el prompt template?",
  "options": [
   {
    "letter": "A",
    "text": "Una lista de palabras clave relacionadas con quejas de clientes"
   },
   {
    "letter": "B",
    "text": "Una instrucción directa al LLM para asumir el rol de un personaje"
   },
   {
    "letter": "C",
    "text": "El historial completo de interacciones previas del cliente con la empresa"
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Incluir una instrucción de rol de personaje (persona/role instruction) en los prompts (ej. 'Eres un agente de soporte empático y profesional') es la mejor práctica para definir el tono y estilo de comunicación deseado."
 },
 {
  "id": 89,
  "category": "Trust Layer & Security",
  "text": "Un cliente desea analizar interacciones completas del agente, desde la solicitud inicial del usuario hasta la resolución final, para comprender mejor el comportamiento y calidad de respuesta del agente. ¿Qué funcionalidad de Agentforce debería recomendar el especialista?",
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
  "explanation": "Clave del examen: Agent Inspection (mencionada como respuesta directa registrada en el banco oficial para la inspección paso a paso de sesiones)."
 },
 {
  "id": 90,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) rastrea actividades web en Data 360 para un contacto unificado y desea usar esa información en un prompt template para extraer insights. Asumiendo que el objeto Contact es uno de los objetos asociados a la plantilla de prompt, ¿cuál es una forma válida de lograrlo?",
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
    "text": "Crear un prompt template que tome una lista de todos los registros de actividad de Data 360 como entrada para pasarlos al LLM."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Enriquecer el objeto Contact agregándole la lista relacionada con datos de Data Cloud permite utilizar el 'related list grounding' dentro de Prompt Builder para incluir la información estructurada en el contexto del LLM."
 },
 {
  "id": 91,
  "category": "Agentforce Concepts",
  "text": "Un cliente autenticado e identificado pertenece al nivel de membresía Bronze, Silver o Gold. Dichos niveles definen qué subagentes o acciones están disponibles. ¿Cuál es la mejor manera de asegurar que el agente responda adecuadamente?",
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
  "explanation": "Definir variables personalizadas en el bloque 'before_reasoning' asegura que el nivel de membresía esté cargado a tiempo para alimentar los filtros 'available when' antes de que el razonador evalúe la disponibilidad de acciones."
 },
 {
  "id": 92,
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
  "explanation": "Prompt Defense es el componente de la capa de confianza (Trust Layer) diseñado específicamente para detectar, mitigar y bloquear inyecciones de prompt maliciosas e intentos de vulneración de políticas (jailbreaking)."
 },
 {
  "id": 93,
  "category": "Agentforce & Data",
  "text": "Un Agentforce Specialist en Cloud Kicks quiere construir un agente impulsado por RAG fundamentado en documentos PDF de texto. Desea un enfoque de inicio rápido que genere automáticamente todos los componentes subyacentes, incluyendo el almacén de vectores, el índice de búsqueda, el retriever y la acción estándar. ¿Qué funcionalidad debe usar?",
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
  "explanation": "Agentforce Data Library es la opción de inicio rápido RAG de Salesforce. Al crear una Data Library, el sistema aprovisiona automáticamente el índice en Data 360, el almacén de vectores, el retriever y la acción estándar."
 },
 {
  "id": 94,
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
  "explanation": "Agentforce Session Tracing registra cada turno de una conversación: el plan del razonador, las herramientas e insumos/resultados utilizados y cualquier error presentado."
 },
 {
  "id": 95,
  "category": "Agentforce Concepts",
  "text": "Universal Containers opera en una industria regulada y ha desplegado un agente de servicio al cliente que maneja miles de interacciones por semana. El equipo de operaciones nota que muchas conversaciones resultan en escalaciones inesperadas, pero no pueden identificar cuáles subagentes o acciones están teniendo un bajo rendimiento. ¿Qué funcionalidad permite agrupar patrones de interacción, identificar brechas de rendimiento entre sesiones y aplicar puntuación de calidad?",
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
  "explanation": "Agentforce Optimization permite analizar patrones de interacción de forma agregada a través de múltiples sesiones, asignando puntuaciones de calidad e identificando de forma agrupada acciones o subagentes deficientes."
 },
 {
  "id": 96,
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
  "explanation": "Por razones de seguridad, privacidad y restricciones de la plataforma, la lista relacionada del objeto User no está admitida como recurso de fundamentación (grounding) en Prompt Builder."
 },
 {
  "id": 97,
  "category": "Agentforce Concepts",
  "text": "Un especialista divide un proceso de onboarding en dos subagentes y coloca la configuración del segundo paso dentro del bloque before_reasoning del nuevo subagente. Durante las pruebas, al cambiar de subagente a mitad de conversación, la interacción se detiene o falla inesperadamente. ¿Qué riesgo de sincronización se debe considerar respecto a before_reasoning?",
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
  "explanation": "El bloque 'before_reasoning' del subagente destino se procesa al arrancar el siguiente turno de conversación después de la transición, por lo que asunciones de disponibilidad inmediata en el mismo turno pueden causar detenciones."
 },
 {
  "id": 98,
  "category": "Agentforce Concepts",
  "text": "Cuando un cliente en un centro de ayuda solicita mejorar su plan de servicio, un agente necesita: Verificar identidad y derecho, Crear una nueva cotización, Calcular un monto prorrateado, y Escalar a un Account Executive solo si el monto supera US$25,000. ¿Qué tipo de agente debe construir el especialista?",
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
  "explanation": "Las interacciones de ventas, generación de cotizaciones, cálculos de montos de upgrade/upsell y escalaciones por volumen de venta corresponden al tipo de agente Sales Agent."
 },
 {
  "id": 99,
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
  "explanation": "Los Field Generation prompt templates están diseñados para poblar campos específicos en registros, ofreciendo la experiencia nativa de previsualización, regeneración y edición directa antes de guardar."
 },
 {
  "id": 100,
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
  "explanation": "Agentforce Observability incluye tableros preconstruidos de Agent Analytics para revisar métricas de rendimiento operacional agregado (duración, escalación, tasa de desviación)."
 },
 {
  "id": 101,
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
  "explanation": "La generación de enunciados de prueba sintéticos impulsada por IA permite crear automáticamente variaciones en lenguaje natural a partir de los prompts de prueba existentes, lo que ayuda a evaluar la robustez conversacional y la cobertura de intenciones antes del despliegue."
 },
 {
  "id": 102,
  "category": "Agentforce & Data",
  "text": "Durante las pruebas de calidad de RAG, un Agentforce Specialist nota que la información tabular de una canalización de ingestión en Data 360 pierde contexto porque los datos quedan divididos en múltiples fragmentos (chunks) separados. ¿Cuál es el enfoque más apropiado para resolver esto?",
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
  "explanation": "Un ensemble retriever que une fragmentos relacionados al momento de la recuperación permite restaurar el contexto de una tabla que fue dividida durante la fragmentación."
 },
 {
  "id": 103,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está configurando un agente de servicio al cliente y necesita restringir una acción específica \"Process Refund\" para que solo sea visible para el reasoning engine cuando la cuenta de un cliente esté marcada como activa. Un Agentforce Specialist está escribiendo la cláusula available when en Agent Script para evaluar la variable @variables.IsActive. ¿Qué operador debería usar el Agentforce Specialist para esta condición?",
  "options": [
   {
    "letter": "A",
    "text": "El especialista debe usar el operador =; Agent Script usa = estrictamente para comparación en condicionales."
   },
   {
    "letter": "B",
    "text": "Ambos = y == son válidos e intercambiables; el especialista puede usar cualquiera."
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
  "explanation": "Respuesta según clave oficial: El especialista debe utilizar el operador de comparación en la cláusula condicional de disponibilidad conforme a la sintaxis del lenguaje Agent Script especificada en la prueba."
 },
 {
  "id": 104,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está desplegando un nuevo agente de servicio al cliente utilizando Agent Script. El Specialist necesita actualizar el estado conversacional, navegar entre diferentes subagentes y transferir conversaciones a un agente humano cuando sea necesario. Para minimizar la deuda técnica, el especialista desea implementar estas capacidades sin construir código backend personalizado. ¿Qué afirmación describe correctamente cómo el especialista puede implementar estos requerimientos específicos?",
  "options": [
   {
    "letter": "A",
    "text": "El especialista puede usar @utils.setVariables, @utils.transition, y @utils.escalate directamente."
   },
   {
    "letter": "B",
    "text": "El especialista puede usar la mayoría de utilidades directamente, pero @utils.escalate requiere una clase Apex personalizada para definir la cola de escalación."
   },
   {
    "letter": "C",
    "text": "El especialista puede usar la mayoría de utilidades de forma predeterminada, pero @utils.transition requiere un Flow para definir el subagente objetivo en tiempo de ejecución."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "La respuesta correcta es A porque Agent Script proporciona utilidades nativas sin requerir código personalizado backend: @utils.setVariables para actualizar estado, @utils.transition para navegar entre subagentes y @utils.escalate para transferir a un representante humano."
 },
 {
  "id": 105,
  "category": "Setup & Integration",
  "text": "Universal Containers está auditando su arquitectura de IA y necesita asegurar que sus desarrolladores estén restringidos a usar únicamente modelos de lenguaje (LLMs) específicamente aprobados. ¿Cómo debería un Agentforce Specialist gestionar y evitar que se acceda a modelos no aprobados en toda la organización?",
  "options": [
   {
    "letter": "A",
    "text": "Aplicar una política Attribute-Based Access Control (ABAC) dentro de Einstein Trust Layer para bloquear prompts que se enruten a LLMs no aprobados."
   },
   {
    "letter": "B",
    "text": "Escribir una instrucción estricta de sistema en Agent Builder indicando \"Nunca uses modelos externos para razonamiento\"."
   },
   {
    "letter": "C",
    "text": "Asegurar que solo los LLMs aprobados estén habilitados en la sección Model Provider bajo la configuración de Einstein (Einstein setup)."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "La gobernanza de proveedores de modelos se administra en la capa de configuración de la plataforma: en Einstein Setup, dentro de la sección de proveedores de modelos, se activan únicamente los LLM autorizados para la organización."
 },
 {
  "id": 106,
  "category": "Agentforce Concepts",
  "text": "El Agentforce Specialist de Universal Containers sospecha que el Service Agent clasifica sistemáticamente intenciones de disputas de facturación bajo un tema general de consultas, causando que se ejecuten acciones incorrectas. El administrador necesita identificar este patrón a través de las sesiones de producción sin revisar transcripciones individuales. ¿Qué debería recomendar el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Habilitar Session Tracing en Agentforce Observability y consultar el Data Model directamente a escala."
   },
   {
    "letter": "B",
    "text": "Usar Agent Optimization en Agentforce Studio, el cual segmenta las sesiones de producción en momentos y genera grupos de intenciones (intent clusters) semanalmente mediante análisis cruzado de sesiones."
   },
   {
    "letter": "C",
    "text": "Subir un conjunto representativo de enunciados de disputa de facturación a Agentforce Testing Center y ejecutar una prueba en lote."
   }
  ],
  "answer": [
   "B"
  ],
  "multi": false,
  "explanation": "Agent Optimization en Agentforce Studio agrupa y segmenta automáticamente las sesiones reales de producción en momentos de conversación e 'intent clusters', exponiendo patrones recurrentes de clasificación errónea a escala."
 },
 {
  "id": 107,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desea asegurar que las respuestas de su agente de IA reflejen de forma consistente la voz de marca única de la empresa y estándares específicos de calidad más allá de simples verificaciones de pasa/falla. ¿Cómo debería configurar el Testing Center el Agentforce Specialist para evaluar este criterio específico?",
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
    "text": "Crear una evaluación personalizada (custom evaluation) utilizando un evaluador basado en Large Language Model (LLM judge)."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Para evaluar la voz de marca o estándares corporativos específicos, se debe crear una evaluación personalizada (custom evaluation) configurando un modelo como juez (LLM judge) con una rúbrica explícita."
 },
 {
  "id": 108,
  "category": "Setup & Integration",
  "text": "Universal Containers tiene múltiples orgs de Salesforce, cada una con un agente de servicio al cliente único donde un agente de verificación debe pasar datos de identidad del cliente a agentes secundarios que manejan modificaciones de cuenta. El ID del cliente debe permanecer seguro y persistente entre transferencias sin exponerse a modificaciones del Large Language Model (LLM). ¿Cuál es la configuración más apropiada?",
  "options": [
   {
    "letter": "A",
    "text": "Usar la Agent API para iniciar la sesión del agente secundario y pasar el ID de cliente verificado como una variable de contexto de solo lectura, garantizando seguridad y evitando alteraciones por parte del LLM."
   },
   {
    "letter": "B",
    "text": "Almacenar información de identidad en variables de sesión de mensajería creadas por el primer agente."
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
  "explanation": "Iniciar la sesión del agente mediante la Agent API pasando datos confidenciales como variables de contexto de solo lectura aísla el valor del alcance de modificación del LLM y mantiene la persistencia de forma segura."
 },
 {
  "id": 109,
  "category": "Prompt Engineering",
  "text": "El equipo de ventas de un resort hotelero desea generar un resumen sobre los intereses de cada huésped y brindar recomendaciones basadas en las preferencias de actividad capturadas en su perfil. Quieren que el resumen esté disponible únicamente en la página de registro de Contact. ¿Qué capacidad de IA debería usar el equipo?",
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
  "explanation": "Einstein Prompt Builder permite construir un prompt template (ej. Record Summary) que genera el resumen contextualizado y se inserta exclusivamente en la página de registro de Contact mediante un componente Lightning."
 },
 {
  "id": 110,
  "category": "Agentforce Concepts",
  "text": "Universal Containers desea permitir que sus agentes de servicio consulten el estado actual de cumplimiento de un pedido utilizando lenguaje natural. Existe un autolaunched flow para consultar la información desde Oracle ERP, que es el sistema de registro. ¿Cómo debería un Agentforce Specialist aplicar el poder de la IA conversacional para este caso de uso?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un Flex prompt template en Prompt Builder."
   },
   {
    "letter": "B",
    "text": "Crear una custom agent action que invoque un Flow."
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
  "explanation": "Para conectar el razonador conversacional del agente con un Flow autolanzado que consulta un sistema ERP externo, la solución estándar es crear una custom agent action ligada a dicho Flow."
 },
 {
  "id": 111,
  "category": "Prompt Engineering",
  "text": "Universal Containers (UC) necesita crear un correo de ventas con un prompt template personalizado. UC necesita fundamentarse en los siguientes datos: Opportunity Products, Eventos cercanos al cliente y Ejemplos de tono y voz. ¿Cómo debería UC obtener los elementos relacionados?",
  "options": [
   {
    "letter": "A",
    "text": "Crear un Flex template que tome los registros en cuestión como entradas."
   },
   {
    "letter": "B",
    "text": "Utilizar una plantilla de correo estándar e insertar manualmente los campos de datos requeridos."
   },
   {
    "letter": "C",
    "text": "Llamar a un prompt-initiated flow para obtener y fundamentar los datos requeridos."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Un Flow desencadenado por prompt (prompt-initiated flow) permite consultar y reunir en tiempo de ejecución múltiples fuentes relacionadas complejas (productos de oportunidad, eventos y ejemplos) y pasarlas al prompt mediante instrucciones."
 },
 {
  "id": 112,
  "category": "Trust Layer & Security",
  "text": "El VP de Servicio en Universal Containers (UC) requiere un reporte que muestre tendencias semanales de tasa de desviación (deflection rate) y volúmenes de escalación para el Agentforce Service Agent durante los últimos 90 días. ¿Qué enfoque debería recomendar el Agentforce Specialist?",
  "options": [
   {
    "letter": "A",
    "text": "Habilitar Agentforce Health Monitoring para configurar umbrales de alerta y exportar los datos a Tableau."
   },
   {
    "letter": "B",
    "text": "Usar Agent Analytics dentro de Agentforce Observability, el cual proporciona tableros potenciados por Tableau con métricas preconstruidas de tasa de desviación, volumen de escalación y abandono."
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
  "explanation": "Agent Analytics dentro de Agentforce Observability ofrece tableros preconstruidos potenciados por Tableau con métricas históricas de desviación, escalaciones y abandonos de sesión sin necesidad de desarrollo personalizado."
 },
 {
  "id": 113,
  "category": "Agentforce Concepts",
  "text": "El Agentforce Specialist de Coral Cloud Resorts quiere crear un agente que automatice la resolución de una gran parte de las quejas de los huéspedes sobre sus vacaciones (ofreciendo mejoras de habitación, crédito de hotel, etc.) y escale el caso a un humano tras interrupciones graves. Siguiendo las mejores prácticas de Salesforce, ¿qué tipo de agente debería crear el especialista?",
  "options": [
   {
    "letter": "A",
    "text": "Employee Agent con un Flex prompt template"
   },
   {
    "letter": "B",
    "text": "Sales Agent con un Flex prompt template"
   },
   {
    "letter": "C",
    "text": "Service Agent con un Flex prompt template"
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "La resolución automatizada de incidencias de clientes, emisión de compensaciones o créditos y la escalación de casos corresponden a la plantilla y caso de uso nativo de un Service Agent."
 },
 {
  "id": 114,
  "category": "Agentforce Concepts",
  "text": "Universal Containers está probando un agente con una acción \"Reset Password\" restringida por la regla available when @variables.isVerified = True. Durante un solo turno de conversación, el Large Language Model (LLM) cambia la variable isVerified a true mediante @utils.setVariables, pero no logra invocar la acción \"Reset Password\" inmediatamente después. ¿Qué debe considerar el Agentforce Specialist sobre cómo evalúa el reasoning engine la disponibilidad de acciones?",
  "options": [
   {
    "letter": "A",
    "text": "La acción está disponible desde el inicio; la intención del motor invalida las reglas de disponibilidad."
   },
   {
    "letter": "B",
    "text": "La acción se vuelve disponible inmediatamente en el mismo turno."
   },
   {
    "letter": "C",
    "text": "La acción permanece no disponible durante ese turno; las condiciones available when controlan la visibilidad de la acción para el LLM y se evalúan antes de que inicie el ciclo de razonamiento, por lo que la acción no será ejecutable sino hasta el siguiente turno."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Las condiciones 'available when' evalúan la visibilidad de las acciones antes de que empiece el ciclo de planificación del turno. Si una variable cambia durante el turno, la acción recién estará disponible para invocar en el siguiente turno de conversación."
 },
 {
  "id": 115,
  "category": "Agentforce Concepts",
  "text": "En Horizon Insurance, el equipo de servicio reporta que el agente enruta constantemente las conversaciones de reclamos hacia el subagente Policy Inquiry (anteriormente conocido como topic), a pesar de que la intención expresada por el usuario indica claramente un reclamo. El especialista agregó condiciones de guardia pero el problema persiste. ¿Qué está causando probablemente este enrutamiento erróneo?",
  "options": [
   {
    "letter": "A",
    "text": "Instrucciones procedimentales que requieren Salesforce Flows para enrocar."
   },
   {
    "letter": "B",
    "text": "Uso de instrucciones globales para definir enrutamiento entre subagentes."
   },
   {
    "letter": "C",
    "text": "Solapamiento en las descripciones y condiciones de entrada entre los subagentes 'Claims Intake' y 'Policy Inquiry'."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "El enrutamiento erróneo persistente hacia un subagente equivocado es provocado por ambigüedad o competencia semántica entre las descripciones y condiciones de alcance de ambos subagentes."
 },
 {
  "id": 116,
  "category": "Agentforce & Data",
  "text": "Ursa Major Solar está desarrollando un agente de ayuda que debe responder preguntas fundamentándose en artículos de conocimiento internos y en un portal de socios externo. El especialista configura un índice de búsqueda en Data 360. Durante las pruebas en Agentforce Builder, el agente ocasionalmente brinda respuestas contradictorias y el especialista necesita diferenciar entre las dos fuentes para solucionar los problemas. ¿Qué proceso de Data 360 debería revisar el especialista para asegurar que el origen de la información se identifique y esté disponible con precisión?",
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
    "text": "El proceso de la función retriever de Data 360, donde el contenido recuperado se puede filtrar basándose en metadatos de origen (como tipo de documento o autor) para refinar los resultados antes de ordenarlos mediante búsqueda semántica o híbrida."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Revisar la función del retriever permite rastrear y filtrar los fragmentos recuperados basándose en sus metadatos de origen (autor, sistema de origen, tipo de documento) antes del ranking de similitud."
 },
 {
  "id": 117,
  "category": "Agentforce Concepts",
  "text": "Un Agentforce Specialist construye un nuevo Service Agent que usa una acción personalizada basada en un Flow. Tras probarlo en Sandbox, está listo para desplegarse. ¿Cuál es una consideración clave sobre el estado de activación del agente en el entorno de producción?",
  "options": [
   {
    "letter": "A",
    "text": "El agente debe activarse manualmente en producción, independientemente de su estado en el Sandbox."
   },
   {
    "letter": "B",
    "text": "El agente se activará automáticamente tras un despliegue exitoso."
   },
   {
    "letter": "C",
    "text": "El agente se activará automáticamente solo si el Flow también está activo."
   }
  ],
  "answer": [
   "A"
  ],
  "multi": false,
  "explanation": "El estado de activación de los agentes de Agentforce no se transfiere automáticamente en los despliegues. Todo agente debe activarse de forma manual y explícita en el entorno de producción tras el despliegue."
 },
 {
  "id": 118,
  "category": "Agentforce & Data",
  "text": "Una empresa de seguros necesita un Service Agent para fundamentar sus respuestas basándose en PDFs corporativos y en una base de conocimientos completa. ¿Qué tipo de retriever debería utilizar el Agentforce Specialist?",
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
  "explanation": "Se debe utilizar un ensemble retriever cuando se requiere combinar y buscar sobre múltiples fuentes de datos o índices independientes (archivos PDF e índice de Knowledge) dentro de una misma estrategia de recuperación."
 },
 {
  "id": 119,
  "category": "Setup & Integration",
  "text": "Universal Containers ha visto una alta adopción de una función de IA generativa para poblar el campo de resumen de un objeto personalizado (Competitor Analysis). Todos los usuarios de ventas tienen el mismo perfil, pero un usuario no puede ver el ícono habilitado para IA generativa al lado del campo. ¿Cuál es la causa más probable del problema?",
  "options": [
   {
    "letter": "A",
    "text": "El prompt template asociado al campo de resumen no está activado para ese usuario."
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
  "explanation": "Para interactuar con los campos e íconos potenciados por IA generativa en la interfaz de usuario, los usuarios deben tener asignado explícitamente el conjunto de permisos 'Generative AI User'."
 },
 {
  "id": 120,
  "category": "Prompt Engineering",
  "text": "¿Cuál es el proceso correcto para aprovechar Prompt Builder en una org de Salesforce?",
  "options": [
   {
    "letter": "A",
    "text": "Seleccionar el tipo de prompt template apropiado, desarrollar el prompt dentro del workspace, seleccionar recursos para insertar dinámicamente datos de fundamentación del CRM, elegir el modelo a usar, y probar y validar las respuestas generadas."
   },
   {
    "letter": "B",
    "text": "Habilitar el objeto objetivo, desarrollar el prompt, seleccionar registros para fine-tuning, habilitar Trust Layer y asociar a una acción."
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
  "explanation": "El flujo de trabajo estándar en Prompt Builder es: 1. Seleccionar tipo de plantilla, 2. Redactar en el espacio de trabajo, 3. Añadir recursos de grounding (campos, Flows, Apex), 4. Seleccionar el modelo LLM y 5. Probar y validar la respuesta."
 },
 {
  "id": 121,
  "category": "Setup & Integration",
  "text": "Un administrador en Universal Containers desplegó con éxito un Service Agent de Sandbox a Producción vía change set. El Service Agent usa un prompt template que invoca un Flow. En producción, la interacción falla con un mensaje de error cada vez que se debe ejecutar el Flow. El Flow se incluyó en el change set y está presente en producción. ¿Cuál es la causa más probable de este problema?",
  "options": [
   {
    "letter": "A",
    "text": "El usuario en producción no tiene permiso para ejecutar el Flow."
   },
   {
    "letter": "B",
    "text": "El change set no incluyó las clases Apex dependientes para el Flow."
   },
   {
    "letter": "C",
    "text": "El Flow no se activó manualmente en la org de producción después del despliegue."
   }
  ],
  "answer": [
   "C"
  ],
  "multi": false,
  "explanation": "Los Flows desplegados mediante change sets llegan inactivos a la organización de destino. El administrador debe activarlos manualmente en producción para que puedan ejecutarse correctamente al ser invocados por los prompts o agentes."
 }
];