const QUESTIONS_ESP = [{
    "id": 1,
    "category": "AI Agents",
    "question": "Universal Containers desea enrutar mensajes de texto SMS a un representante de servicio desde un Agentforce Service Agent. ¿Qué Service Channel debe utilizar la empresa en el Flow para garantizar que se enruten correctamente?",
    "choices": ["Messaging", "Route Work Action", "Live Agent"],
    "correctAnswerText": "Messaging",
    "explanation": "UC quiere enrutar mensajes de texto SMS desde un Agentforce Service Agent a un representante de servicio mediante un Flow. Identifiquemos el Service Channel correcto. Opción A: Messaging. En Salesforce, el Service Channel \"Messaging\" (parte de Messaging for In-App and Web o SMS) maneja interacciones basadas en texto, incluyendo SMS. Cuando se integra con Omni-Channel Flow, la acción \"Route Work\" utiliza este canal para enrutar mensajes SMS a los agentes. Esto se alinea con el requisito de UC para el enrutamiento de SMS, lo que la convierte en la respuesta correcta. Opción B: Route Work Action. \"Route Work\" es una acción en Omni-Channel Flow, no un Service Channel. Utiliza un canal (por ejemplo, Messaging) para enrutar el trabajo, por lo que es un componente, no el canal en sí, lo que la hace incorrecta. Opción C: Live Agent. \"Live Agent\" se refiere a una función de chat más antigua, no al marco de trabajo actual de Messaging para SMS. Está desactualizado y no tiene relación con el enrutamiento de SMS, lo que la hace incorrecta. Opción D: SMS Channel. No existe un \"SMS Channel\" independiente en los Service Channels de Salesforce; SMS está incluido dentro del canal \"Messaging\". Esto es un nombre erróneo, lo que la hace incorrecta. Por qué la Opción A es correcta: El Service Channel \"Messaging\" admite el enrutamiento de SMS en Omni-Channel Flow, garantizando una transferencia adecuada desde el Agentforce Service Agent a un representante, según la documentación de Salesforce. Referencia: Salesforce Help: Service Channels – Enumera Messaging para enrutamiento basado en texto."
}, {
    "id": 2,
    "category": "Data 360 Fundamentals",
    "question": "Un Agentforce Specialist está configurando Salesforce Knowledge como fuente de datos para una Data Library y debe seleccionar \"Identifying Fields\" para ayudar a Agentforce a localizar la información correcta. El contenido del artículo de Knowledge es rico, detallado y bastante largo. ¿Qué debería utilizar el Agentforce Specialist como Identifying Fields?",
    "choices": ["El contenido principal del artículo para garantizar que se utilice el artículo más relevante.", "Cualquier campo de texto o área de texto que proporcione un resumen conciso del artículo.", "Cualquier campo de fórmula estándar o personalizado que contenga una clave concatenada adecuada. ##"],
    "correctAnswerText": "Cualquier campo de texto o área de texto que proporcione un resumen conciso del artículo.",
    "explanation": "La respuesta correcta es B. Los Identifying Fields deben ayudar a Agentforce a localizar el artículo de Knowledge correcto de manera eficiente, por lo que los campos de texto o área de texto concisos que resumen el artículo son la mejor opción. Los cuerpos largos de los artículos se tratan mejor como campos de contenido porque proporcionan el material detallado de fundamentación (grounding) después de encontrar el artículo correcto. La opción A es incorrecta porque usar todo el contenido principal como campo de identificación puede diluir la precisión de la búsqueda y hacer que la recuperación sea ruidosa. La opción C es incorrecta porque una clave concatenada basada en fórmulas suele estar optimizada para la lógica del sistema, no para la detección semántica de artículos. La guía de grounding de Knowledge de Salesforce distingue los campos de identificación, que ayudan a encontrar artículos relevantes, de los campos de contenido, que proporcionan la información detallada utilizada en las respuestas."
}, {
    "id": 3,
    "category": "Prompt Engineering",
    "question": "Universal Containers ha configurado un agente para gestionar las solicitudes de devolución de los clientes. Cuando un cliente inicia una devolución, el agente debe calcular una tarifa de reposición específica. El agente debe cotizar esta tarifa exacta al cliente y luego reutilizar ese mismo monto al resumir el reembolso final. El Agentforce Specialist debe asegurarse de que el agente utilice una lógica determinista para calcular la tarifa y reutilice de manera consistente el mismo valor exacto sin adivinar ni alucinar. ¿Cómo debería configurar el agente el especialista para lograr este comportamiento?",
    "choices": ["Ejecutar un Flow como una acción del agente para calcular la tarifa y hacer que la salida del Flow esté directamente disponible para la respuesta del agente. El agente podrá continuar usando este valor desde la memoria.", "Definir una variable de contexto para la tarifa. Ejecutar un Flow como una acción del agente para calcular la tarifa, asignar la salida del Flow a esa variable de contexto y hacer que el agente haga referencia a esa variable en sus respuestas.", "Proporcionar la fórmula matemática para la tarifa de reposición en las instrucciones del sistema del agente e instruirle que recuerde el resultado para su reutilización."],
    "correctAnswerText": "Definir una variable de contexto para la tarifa. Ejecutar un Flow como una acción del agente para calcular la tarifa, asignar la salida del Flow a esa variable de contexto y hacer que el agente haga referencia a esa variable en sus respuestas.",
    "explanation": "La respuesta correcta es B porque el cálculo determinista de tarifas y su reutilización requieren gestión de estado, no memoria conversacional. La tarifa debe ser calculada por una acción de Flow y luego almacenarse en una variable de contexto para que se pueda hacer referencia al mismo valor validado más adelante en la conversación. Esto evita que el modelo de lenguaje de gran tamaño (LLM) vuelva a calcular, redondee de manera diferente o alucine un nuevo valor durante el resumen del reembolso. La opción A es incompleta porque exponer la salida de un Flow una sola vez no garantiza una reutilización estable durante toda la sesión. La opción C no es segura porque las instrucciones del sistema no garantizan la precisión del cálculo ni la persistencia. La guía de Salesforce establece que las variables se pueden usar en filtros, instrucciones y entradas de acciones, y Agent Script admite lógica determinista, configuración de variables y ejecución de acciones."
}, {
    "id": 4,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea utilizar la funcionalidad de Generative AI de Salesforce para reducir el tiempo de gestión de los Service Agents proporcionando respuestas recomendadas basadas en los artículos de Knowledge existentes. ¿En qué capacidad de IA debería UC capacitar a los Service Agents?",
    "choices": ["Service Replies", "Case Replies", "Knowledge Replies"],
    "correctAnswerText": "Service Replies",
    "explanation": "Service Replies (específicamente Einstein Service Replies) es la funcionalidad de Generative AI de Salesforce diseñada para redactar automáticamente respuestas para los agentes de servicio en tiempo real, basándose en información contextual, incluidos los artículos de Knowledge existentes. Esto responde directamente a la necesidad de Universal Containers de reducir el tiempo de gestión proporcionando respuestas recomendadas fundamentadas en su base de conocimiento."
}, {
    "id": 5,
    "category": "AI Agents",
    "question": "Universal Containers (UC) está ampliando sus capacidades de Agentforce for Service para incluir la gestión de casos. Por motivos de seguridad, UC desea que el agente verifique la identidad del cliente antes de proporcionar cualquier información relacionada con el caso. La verificación debe ser determinista, garantizando que no se compartan detalles del caso a menos que la verificación de identidad se haya completado con éxito. ¿Qué enfoque satisface mejor este requisito?",
    "choices": ["Utilizar palabras clave como \"Always\" y \"Never\" para escribir una lógica clara en las Topic Instructions para verificar la identidad del usuario antes de proporcionar información del caso.", "Crear una variable para almacenar el estado de verificación, configurarla como salida de una acción “Verify Identity” y aplicar un filtro para que las acciones relacionadas con el caso solo se ejecuten cuando la variable confirme la verificación.", "Almacenar el estado de verificación en una variable personalizada y establecer una instrucción global para que el agente verifique esta variable antes de compartir información del caso."],
    "correctAnswerText": "Crear una variable para almacenar el estado de verificación, configurarla como salida de una acción “Verify Identity” y aplicar un filtro para que las acciones relacionadas con el caso solo se ejecuten cuando la variable confirme la verificación.",
    "explanation": "La guía de implementación de Agentforce for Service describe claramente que cuando un agente debe verificar la identidad antes de realizar operaciones relacionadas con casos, el método correcto es utilizar un flujo de control basado en variables. La documentación especifica: “Para mantener un comportamiento determinista y seguro, defina una variable (por ejemplo, ‘isVerified’) que almacene el resultado de un paso de verificación de identidad. Utilice esta variable como un filtro condicional en el flujo de temas para garantizar que las acciones relacionadas con el caso se ejecuten solo cuando la variable sea igual a ‘true’.” Esto garantiza que no se compartan datos confidenciales o específicos del caso a menos que la verificación se confirme explícitamente. Proporciona una salvaguarda determinista, ya que el sistema solo avanza con las acciones de datos del caso después de que la variable de verificación confirme la finalización. La Opción A se basa en instrucciones en lenguaje natural, que no son deterministas y pueden ser malinterpretadas por el modelo. La Opción C agrega complejidad innecesaria y carece del filtrado a nivel de control que garantiza la lógica de flujo segura. Por lo tanto, la Opción B implementa correctamente el patrón de mejores prácticas de Salesforce para la ejecución condicional mediante variables y filtros en Agentforce."
}, {
    "id": 6,
    "category": "Prompt Engineering",
    "question": "Al utilizar una plantilla de prompt (prompt template), ¿qué debe considerar un Agentforce Specialist con respecto a sus datos de grounding y el modelo elegido?",
    "choices": ["Revisar el límite de tokens en la Einstein Trust Layer.", "Asegurarse de que las consultas utilizadas para grounding empleen desfasamiento (offset) para no superar los límites de tokens de los modelos.", "Revisar la limitación del modelo en Prompt Builder en comparación con el tamaño de los datos de grounding."],
    "correctAnswerText": "Revisar la limitación del modelo en Prompt Builder en comparación con el tamaño de los datos de grounding.",
    "explanation": "La consideración técnica más crítica al emparejar los datos de grounding de una plantilla de prompt con un modelo de lenguaje de gran tamaño (LLM) elegido es la relación entre ambos. La acción correcta es revisar la limitación del modelo en Prompt Builder en comparación con el tamaño de los datos de grounding (C). Cada LLM tiene un límite fijo en la ventana de contexto, típicamente expresado en tokens. Si el tamaño combinado del prompt y los datos dinámicos para un registro específico excede el límite de tokens del LLM, la solicitud de IA generativa fallará con un error de \"límite de tokens excedido\". El Agentforce Specialist debe diseñar proactivamente la plantilla para limitar la cantidad de datos recuperados (por ejemplo, usando Flow para resumir listas relacionadas o consultando solo campos esenciales) para garantizar que se mantenga dentro de la capacidad del modelo elegido."
}, {
    "id": 7,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist en Universal Containers (UC) está construyendo herramientas utilizando exclusivamente herramientas sin código (no-code). Tienen muchas cuentas pequeñas que solo son atendidas periódicamente por un equipo de ventas especializado, y UC desea maximizar el tiempo del equipo de operaciones de ventas ayudándoles a prepararse para las llamadas mediante: \\* El resumen de compras pasadas \\* La visualización de productos en los que el contacto ha mostrado interés (con datos capturados a través de Data Cloud) \\* Un resumen de conversaciones pasadas por correo electrónico y teléfono que tengan transcripciones. ¿Qué enfoque debería recomendar el Agentforce Specialist para lograr este objetivo?",
    "choices": ["Desplegar primero el propio modelo fundacional personalizado de UC sobre estos datos.", "Ajustar (fine-tune) el modelo fundacional estándar debido a la complejidad de los datos.", "Utilizar una plantilla de prompt fundamentada en datos de CRM y Data Cloud utilizando modelos fundacionales estándar."],
    "correctAnswerText": "Utilizar una plantilla de prompt fundamentada en datos de CRM y Data Cloud utilizando modelos fundacionales estándar.",
    "explanation": "La guía de Prompt Templates y No-Code Builder de Agentforce especifica que al utilizar los modelos fundacionales estándar de Salesforce, los usuarios pueden fundamentar prompts en datos de CRM y Data Cloud sin requerir ajustes finos (fine-tuning) ni despliegue de modelos. Los usuarios no-code pueden aprovechar los modelos fundacionales estándar con plantillas de prompt fundamentadas en datos de Salesforce, incluidos CRM y Data Cloud, para resumir registros, resaltar información clave y preparar a los agentes para las interacciones con los clientes. La Opción A requiere experiencia en ciencia de datos no disponible en una configuración sin código. La Opción B no es necesaria porque los modelos estándar con grounding están optimizados para el uso de datos contextuales. Por lo tanto, la Opción C se alinea con la configuración recomendada por Salesforce para asistencia de IA contextual con poco/sin código."
}, {
    "id": 8,
    "category": "Governance & Observability",
    "question": "Universal Containers opera en una industria regulada y ha desplegado un agente de servicio al cliente Agentforce que maneja miles de interacciones por semana. El equipo de operaciones nota que un número significativo de conversaciones resultan en escalaciones inesperadas, pero no pueden identificar qué subagentes del agente (anteriormente conocidos como temas o topics) o acciones tienen un rendimiento inferior o están mal configurados de manera constante. ¿Qué función de Agentforce permite al equipo agrupar patrones de interacción, identificar brechas de rendimiento entre sesiones y aplicar puntuaciones de calidad para precisar dónde necesita mejoras la configuración del agente?",
    "choices": ["Agentforce Optimization", "Agentforce Health Monitoring", "Agentforce Session Tracing"],
    "correctAnswerText": "Agentforce Optimization",
    "explanation": "Agentforce Optimization es la función correcta porque el requisito no es solo inspeccionar una conversación fallida, sino analizar patrones de rendimiento a través de muchas sesiones. Salesforce describe Agent Optimization como una capacidad utilizada para profundizar en las sesiones, analizar puntuaciones de calidad e identificar patrones que mejoran el rendimiento del agente. Esto coincide directamente con la necesidad de encontrar patrones recurrentes de escalación, subagentes débiles y acciones mal configuradas. Agentforce Session Tracing es útil para investigaciones profundas paso a paso de una interacción individual, pero no es la mejor opción para agrupar brechas de rendimiento en miles de conversaciones."
}, {
    "id": 9,
    "category": "Testing, Deployment, & Maintenance",
    "question": "¿Qué debería considerar Universal Containers al desplegar un Agentforce Service Agent con múltiples temas (topics) y Agent Actions en producción?",
    "choices": ["Desplegar los componentes del agente sin una ejecución de prueba en staging, confiando en los datos de producción para obtener resultados confiables. La configuración de Sandbox por sí sola garantiza un despliegue sin problemas en producción.", "Asegurarse de incluir todas las dependencias, que las clases Apex cumplan con el 75% de cobertura de prueba y que las configuraciones estén alineadas con producción. Planificar la gestión de versiones y la activación posterior al despliegue.", "Desplegar Flows o Apex después de los agentes, temas y Agent Actions para evitar fallos de despliegue y posibles problemas en el agente de producción que requieran un redaspliegue completo."],
    "correctAnswerText": "Asegurarse de incluir todas las dependencias, que las clases Apex cumplan con el 75% de cobertura de prueba y que las configuraciones estén alineadas con producción. Planificar la gestión de versiones y la activación posterior al despliegue.",
    "explanation": "UC está desplegando un Agentforce Service Agent con múltiples temas y acciones en producción. La Opción A es incorrecta porque omitir las pruebas en staging es riesgoso y va en contra de las mejores prácticas. La Opción B es un enfoque integral: se deben desplegar las dependencias (por ejemplo, Flows, Apex), Apex requiere un 75% de cobertura y la configuración de producción debe alinearse. La gestión de versiones rastrea los cambios y la activación posterior al despliegue garantiza un lanzamiento controlado. Esto se alinea con las mejores prácticas de despliegue de Salesforce para Agentforce, lo que la convierte en la respuesta correcta. La Opción C es incorrecta porque desplegar componentes por separado corre el riesgo de fallos por dependencias faltantes."
}, {
    "id": 10,
    "category": "AI Agents",
    "question": "Universal Containers (UC) busca mejorar su eficiencia operativa. UC ha adoptado recientemente Salesforce y está considerando implementar Agent para mejorar sus procesos. ¿Cuál es una razón clave para implementar Agent?",
    "choices": ["Mejorar la entrada de datos y la limpieza de datos", "Permitir que la IA realice tareas sin interacción del usuario", "Optimizar los flujos de trabajo y automatizar tareas repetitivas"],
    "correctAnswerText": "Optimizar los flujos de trabajo y automatizar tareas repetitivas",
    "explanation": "La razón clave para implementar Agent es su capacidad para optimizar los flujos de trabajo y automatizar tareas repetitivas. Al aprovechar la IA, Agent puede ayudar a los usuarios a gestionar procesos cotidianos y repetitivos, como generar información automáticamente, completar acciones y guiar a los usuarios a través de procesos complejos, todo lo cual mejora significativamente la eficiencia operativa. La Opción A no es el propósito principal de Agent. La Opción B no describe con precisión el rol de Agent, el cual opera de manera interactiva para ayudar a los usuarios en tiempo real."
}, {
    "id": 11,
    "category": "Data 360 Fundamentals",
    "question": "Los agentes de soporte en Universal Containers están utilizando Agentforce para encontrar información sobre resolución de problemas. Han informado que el agente proporciona con frecuencia artículos de Knowledge desactualizados, incluso cuando hay versiones más nuevas de los artículos disponibles. El administrador ha confirmado que todos los artículos están correctamente fragmentados (chunked) e indexados. ¿Qué cambio de configuración en el índice de búsqueda híbrido de Data Cloud soluciona mejor este problema?",
    "choices": ["Desactivar el índice de palabras clave para basarse únicamente en el índice vectorial.", "Cambiar la estrategia de fragmentación (chunking) de reconocedora de secciones a tamaño fijo.", "Agregar un factor de clasificación (ranking) por reciente basado en el campo LastModifiedDate."],
    "correctAnswerText": "Agregar un factor de clasificación (ranking) por reciente basado en el campo LastModifiedDate.",
    "explanation": "La guía de recuperación y clasificación de Agentforce Data Cloud destaca que cuando los artículos de Knowledge desactualizados aparecen antes que los más nuevos, los administradores deben configurar factores de clasificación que prioricen el contenido en función de la antigüedad. La documentación especifica: “Agregar un factor de clasificación por recencia utilizando los campos LastModifiedDate o LastPublishedDate garantiza que la recuperación priorice los documentos más actualizados, mejorando la relevancia de la respuesta.” La opción A eliminaría la precisión en la recuperación. La opción B afecta a la segmentación de datos, no al orden de clasificación. Por lo tanto, la Opción C es la forma correcta de garantizar que se prioricen los artículos actualizados."
}, {
    "id": 12,
    "category": "AI Agents",
    "question": "El Agentforce Specialist de Coral Cloud Resorts desea crear un agente que automatice la resolución de una gran parte de las quejas de los huéspedes relacionadas con sus experiencias de vacaciones. El agente podrá ofrecer mejoras de categoría, crédito de hotel y otras opciones de cortesía. El agente también estará a cargo de escalar el caso a un humano cuando un huésped haya sufrido una interrupción grave (como una cancelación). Siguiendo las mejores prácticas de Salesforce, ¿qué tipo de agente debería crear el Agentforce Specialist?",
    "choices": ["Sales Agent con una plantilla Flex prompt", "Custom Agent con una plantilla Flex prompt", "Service Agent con una plantilla Flex prompt"],
    "correctAnswerText": "Service Agent con una plantilla Flex prompt",
    "explanation": "La guía de implementación de Agentforce for Service confirma que al automatizar el servicio al cliente y la resolución de quejas, la solución correcta es un Service Agent. La documentación establece: “Los Service Agents gestionan las consultas de los clientes, las quejas y los flujos de trabajo de resolución de problemas. Pueden automatizar acciones como ofrecer créditos, aplicar mejoras y escalar casos graves al soporte humano.” Se recomiendan las plantillas Flex prompt para estos escenarios, ya que permiten el control contextual y la personalización basada en los detalles de la queja. Por lo tanto, la Opción C se alinea con el modelo de mejores prácticas de Salesforce."
}, {
    "id": 13,
    "category": "AI Agents",
    "question": "Un Agentforce Specialist en Universal Containers observa que el agente dirige con frecuencia a clientes con consultas claras de facturación al subagente general de resolución de problemas. Este enrutamiento incorrecto está causando un aumento en el tiempo promedio de gestión y el incumplimiento de los objetivos del acuerdo de nivel de servicio. El gerente del centro de contacto requiere una solución rápida de implementar pero que conserve la capacidad del agente para manejar conversaciones complejas y no lineales. ¿Cuál es el enfoque más adecuado para resolver esto?",
    "choices": ["Actualizar las System Instructions globales del agente para incluir una lista de palabras clave prohibidas para cada subagente.", "Auditar las instrucciones de los subagentes en busca de competencia semántica e implementar filtros deterministas para guiar la selección del planificador.", "Crear un subflujo Router que utilice un elemento Decision para asignar manualmente cada solicitud entrante a un subagente específico."],
    "correctAnswerText": "Auditar las instrucciones de los subagentes en busca de competencia semántica e implementar filtros deterministas para guiar la selección del planificador.",
    "explanation": "La respuesta correcta es B porque el problema es la clasificación errónea de subagentes causada por instrucciones superpuestas o límites de enrutamiento poco claros. El enrutamiento de Agentforce depende de que el agente comprenda el propósito, el alcance y la disponibilidad de cada subagente. Si los subagentes de facturación y solución de problemas compiten semánticamente, la solución correcta es precisar sus descripciones, eliminar superposiciones y usar filtros donde se requiera un acceso determinista. La Opción A es una estrategia débil y se romperá con las variaciones del lenguaje natural. La Opción C crea un enrutamiento rígido de árbol de decisión que socava el comportamiento flexible no lineal esperado."
}, {
    "id": 14,
    "category": "Data 360 Fundamentals",
    "question": "Pacific Distribution Co. está implementando un sistema para gestionar el soporte de pedidos de socios y consultas de inventario. La empresa debe asegurarse de que los documentos grandes se procesen de manera efectiva para mejorar la precisión de la recuperación cuando los agentes responden a las consultas de los socios. Comprender cómo se desglosan e indexan los documentos es crucial para esta implementación. ¿Cuál es una característica clave del proceso de fragmentación (chunking)?",
    "choices": ["La fragmentación divide documentos grandes en unidades más pequeñas llamadas pasajes.", "El proceso de fragmentación devuelve documentos enteros al modelo de lenguaje de gran tamaño para su procesamiento.", "Las estrategias de fragmentación son intercambiables y no afectan el proceso de recuperación."],
    "correctAnswerText": "La fragmentación divide documentos grandes en unidades más pequeñas llamadas pasajes.",
    "explanation": "La respuesta correcta es A porque la fragmentación (chunking) divide los documentos de origen grandes en unidades recuperables más pequeñas, a menudo descritas como pasajes o chunks. Esto es fundamental para la generación aumentada por recuperación (RAG) porque el recuperador debe devolver solo las piezas de contenido más relevantes, no documentos completos. La opción B es incorrecta porque enviar documentos enteros al modelo es ineficiente y reduce la precisión. La opción C es incorrecta porque la estrategia de fragmentación afecta directamente la calidad de la recuperación."
}, {
    "id": 15,
    "category": "AI Agents",
    "question": "Universal Containers (UC) tiene una org de Salesforce madura con muchos datos en casos y artículos de Knowledge. A UC le preocupa que haya muchos campos heredados con datos que tal vez no sean aplicables para que Einstein AI redacte respuestas de correo electrónico precisas. ¿Qué solución debería utilizar UC para garantizar que Einstein AI pueda redactar respuestas desde una fuente de datos definida?",
    "choices": ["Service AI Grounding", "Work Summaries", "Service Replies"],
    "correctAnswerText": "Service AI Grounding",
    "explanation": "Service AI Grounding es la solución que Universal Containers debe utilizar para garantizar que Einstein AI redacte respuestas basadas en una fuente de datos bien definida. Service AI Grounding permite anclar el modelo de IA en fuentes de datos específicas y relevantes, asegurando que cualquier respuesta generada por IA (por ejemplo, respuestas por correo electrónico) sea precisa, relevante y extraída de información actualizada, como artículos de Knowledge o casos. Dado que UC tiene campos heredados y datos desactualizados, Service AI Grounding garantiza que Einstein AI solo utilice datos válidos y aplicables."
}, {
    "id": 16,
    "category": "Prompt Engineering",
    "question": "Un especialista en IA tiene la tarea de crear una plantilla de prompt para un equipo de ventas. La plantilla debe generar un resumen de todas las oportunidades relacionadas para una Cuenta dada. ¿Qué técnica de grounding debería utilizar el especialista en IA para incluir datos de la lista relacionada de oportunidades en la plantilla de prompt?",
    "choices": ["Utilizar campos de combinación (merge fields) para hacer referencia a una lista relacionada personalizada de oportunidades.", "Utilizar campos de combinación (merge fields) para hacer referencia a la lista relacionada predeterminada de oportunidades.", "Utilizar campos de fórmula para hacer referencia a la lista relacionada de oportunidades de Einstein."],
    "correctAnswerText": "Utilizar campos de combinación (merge fields) para hacer referencia a la lista relacionada predeterminada de oportunidades.",
    "explanation": "En Salesforce, al crear una plantilla de prompt para el equipo de ventas, puede incluir datos de objetos relacionados, como Oportunidades que están vinculadas a una Cuenta. El mejor método para fundamentar el modelo de IA y proporcionar información relevante de registros relacionados es utilizar campos de combinación (merge fields). Los campos de combinación en Salesforce le permiten hacer referencia de forma dinámica a datos de un registro o registros relacionados, como las Oportunidades para una Cuenta dada. La respuesta estándar y directa es usar campos de combinación vinculados a la lista relacionada predeterminada de oportunidades."
}, {
    "id": 17,
    "category": "AI Agents",
    "question": "Universal Containers está implementando un proceso de verificación de clientes para su Service Agent donde solo se puede acceder a la información confidencial de la cuenta después de que el cliente pasa la verificación de identidad. El Agentforce Specialist debe asegurarse de que esta regla de seguridad se aplique de manera determinista, evitando que el modelo de lenguaje de gran tamaño eluda el requisito de verificación para ejecutar la acción de búsqueda de cuenta. ¿Qué debería configurar el especialista para gestionar este comportamiento determinista?",
    "choices": ["Configurar una política de Prompt Defense en la Einstein Trust Layer para enmascarar los datos confidenciales de la cuenta frente al motor de razonamiento hasta que el usuario complete con éxito el proceso de verificación.", "Almacenar el estado de verificación del usuario en una variable personalizada y aplicar una condición de filtro \"available when\" a la acción de búsqueda de cuenta, haciendo que la acción sea invisible para el motor de razonamiento hasta que la variable se evalúe como verdadera.", "Agregar instrucciones explícitas en lenguaje natural dentro de la definición del subagente instruyendo al modelo de lenguaje de gran tamaño a priorizar siempre la acción de verificación del cliente antes de proceder a la acción de búsqueda de cuenta."],
    "correctAnswerText": "Almacenar el estado de verificación del usuario en una variable personalizada y aplicar una condición de filtro \"available when\" a la acción de búsqueda de cuenta, haciendo que la acción sea invisible para el motor de razonamiento hasta que la variable se evalúe como verdadera.",
    "explanation": "La respuesta correcta es B porque la búsqueda de cuentas confidenciales debe controlarse de forma determinista. Una variable personalizada puede almacenar el estado de verificación y un filtro \"available when\" puede hacer que la acción de búsqueda sea invisible hasta que ese estado sea verdadero. Esto evita que el LLM vea o seleccione la acción protegida antes de que la verificación tenga éxito. La opción A da un uso incorrecto a Prompt Defense. La opción C no es confiable porque las instrucciones en lenguaje natural son interpretadas por el modelo y no fuerzan el control de ejecución."
}, {
    "id": 18,
    "category": "Data 360 Fundamentals",
    "question": "¿Qué se crea automáticamente cuando se crea un índice de búsqueda personalizado en Data Cloud?",
    "choices": ["Un recuperador (retriever) que comparte el nombre del índice de búsqueda personalizado.", "Un recuperador dinámico para permitir la selección en tiempo de ejecución de los parámetros del recuperador sin configuración manual.", "Una clase de recuperador Apex predefinida que un desarrollador puede editar para satisfacer necesidades específicas."],
    "correctAnswerText": "Un recuperador (retriever) que comparte el nombre del índice de búsqueda personalizado.",
    "explanation": "Cuando se crea un índice de búsqueda personalizado en Data Cloud, se genera automáticamente un recuperador (retriever) correspondiente con el mismo nombre que el índice. Este recuperador aprovecha el índice para realizar búsquedas contextuales (por ejemplo, búsquedas basadas en vectores) y obtener datos relevantes para aplicaciones de IA, como las plantillas de prompt de Agentforce. El recuperador está vinculado a los datos indexados y está listo para usarse sin configuración adicional, lo que coincide con el enfoque simplificado de Data Cloud para la integración de IA."
}, {
    "id": 19,
    "category": "AI Agents",
    "question": "Cuando un cliente verificado en un centro de ayuda dice: \"Quiero actualizar mi plan de servicio\", un agente de IA necesita completar las siguientes tareas: Verificar identidad y derecho (entitlement). Crear una nueva cotización (quote). Calcular un monto de actualización prorrateado. Escalar a un Ejecutivo de Cuentas (AE) solo si el nuevo pedido supera los USD 25,000. ¿Qué tipo de agente debería construir un Agentforce Specialist para respaldar este caso de uso?",
    "choices": ["Service Agent para resolver el caso de extremo a extremo y crear una nueva oportunidad para el equipo de ventas", "Sales Agent para gestionar la venta ascendente (upsell) y la escalación de grandes ofertas", "Employee Agent para orquestar la logística interna y las finanzas"],
    "correctAnswerText": "Sales Agent para gestionar la venta ascendente (upsell) y la escalación de grandes ofertas",
    "explanation": "De acuerdo con la Guía de implementación de Agentforce, este escenario representa una interacción generadora de ingresos donde el agente de IA maneja directamente un proceso de venta ascendente (upsell). Las tareas incluyen verificar los derechos del cliente, generar una nueva cotización y calcular un monto prorrateado, todo lo cual se alinea con el tipo de configuración de Sales Agent en Agentforce. El Sales Agent está diseñado específicamente para gestionar la conversión de clientes potenciales, cotizaciones, ventas ascendentes, renovaciones y lógica de escalación para oportunidades de mayor valor."
}, {
    "id": 20,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea ofrecer experiencias de servicio personalizadas y reducir el tiempo de gestión de los agentes con respuestas de correo electrónico generadas por IA, fundamentadas en la base de conocimiento (Knowledge base). ¿Qué capacidad de IA debería utilizar UC?",
    "choices": ["Einstein Email Replies", "Einstein Service Replies for Email", "Einstein Generative Service Replies for Email"],
    "correctAnswerText": "Einstein Service Replies for Email",
    "explanation": "Para que Universal Containers (UC) ofrezca experiencias de servicio personalizadas y reduzca el tiempo de gestión de los agentes mediante respuestas generadas por IA fundamentadas en la base de conocimiento, la mejor solución es Einstein Service Replies for Email. Esta función aprovecha la IA para generar automáticamente respuestas a correos electrónicos relacionados con el servicio en función de datos históricos y la base de conocimiento."
}, {
    "id": 21,
    "category": "AI Agents",
    "question": "Un Agentforce Service Agent, que ha estado ayudando con éxito a los clientes con solicitudes de servicio en Salesforce, ahora no puede ayudar a los clientes con problemas relacionados con un nuevo proceso de reemplazo de productos. La empresa implementó recientemente un objeto personalizado Product Replacement en Salesforce para realizar un seguimiento y gestionar estos reemplazos. ¿Qué cambio en el usuario del agente de Agentforce (Agent User) debe implementarse para solucionar este problema?",
    "choices": ["El grupo de conjuntos de permisos asignado al Agent User debe otorgar acceso al Flow de Product Replacement.", "El conjunto de permisos (permission set) asignado al Agent User necesita acceso de lectura (Read) al objeto personalizado Product Replacement.", "El perfil asignado al Agentforce Agent User necesita permiso de entrenamiento de IA para el objeto personalizado Product Replacement."],
    "correctAnswerText": "El conjunto de permisos (permission set) asignado al Agent User necesita acceso de lectura (Read) al objeto personalizado Product Replacement.",
    "explanation": "Si un Agentforce Service Agent no puede ayudar a los clientes con el nuevo proceso de reemplazo de productos, es probable que se deba a permisos de objeto faltantes. Los objetos personalizados requieren acceso mediante conjuntos de permisos (permission sets). El nuevo objeto personalizado Product Replacement debe asignarse explícitamente al conjunto de permisos del agente. Sin acceso de lectura (Read), el agente no puede ver ni interactuar con el objeto."
}, {
    "id": 22,
    "category": "AI Agents",
    "question": "Un especialista en IA tiene la tarea de configurar un modelo generativo para crear correos electrónicos de ventas personalizados utilizando datos de clientes almacenados en Salesforce. El especialista en IA ya ajustó (fine-tuned) un modelo de lenguaje de gran tamaño (LLM) en la plataforma OpenAI. La seguridad y la privacidad de los datos son preocupaciones críticas para el cliente. ¿Cómo debería integrar el Agentforce Specialist el LLM personalizado en Salesforce?",
    "choices": ["Crear una aplicación del LLM personalizado e incrustarla en Sales Cloud a través de un iFrame.", "Agregar el LLM ajustado en Einstein Studio Model Builder.", "Habilitar el punto de enlace (endpoint) del modelo en OpenAI y realizar llamadas externas (callouts) al modelo para generar correos electrónicos."],
    "correctAnswerText": "Agregar el LLM ajustado en Einstein Studio Model Builder.",
    "explanation": "Dado que la seguridad y la privacidad de los datos son críticas, la mejor opción para el Agentforce Specialist es integrar el LLM ajustado en Salesforce agregándolo a Einstein Studio Model Builder. Einstein Studio permite a las organizaciones traer su propio modelo de IA (BYOM), garantizando que el modelo se gestione de forma segura dentro del entorno de Salesforce, adhiriéndose a los estándares de privacidad de datos."
}, {
    "id": 23,
    "category": "Prompt Engineering",
    "question": "El equipo de servicio de Universal Containers desea personalizar la respuesta estándar de resumen de caso de Agentforce. ¿Qué debería hacer el Agentforce Specialist para lograr esto?",
    "choices": ["Crear una plantilla de prompt Record Summary personalizada para el objeto Case.", "Resumir el Case con una acción estándar de agente.", "Personalizar la plantilla estándar Record Summary para el objeto Case."],
    "correctAnswerText": "Crear una plantilla de prompt Record Summary personalizada para el objeto Case.",
    "explanation": "En Prompt Builder, la plantilla de prompt estándar Record Summary genera resúmenes para objetos como Case. Para personalizarla, el Agentforce Specialist puede crear una nueva plantilla de prompt personalizada, especificando el objeto Case como fuente y ajustando las instrucciones (por ejemplo, tono, campos incluidos) para satisfacer las necesidades de UC. Las plantillas de prompt estándar en Prompt Builder son de solo lectura y no se pueden editar directamente."
}, {
    "id": 24,
    "category": "AI Agents",
    "question": "Un Agentforce Specialist desplegó un Service Agent en un sitio de Experience Cloud y habilitó Credential-Based User Verification. El especialista nota que todas las actualizaciones de registros mediante Lenguaje de Manipulación de Datos (DML) muestran el usuario \"Last Modified By\" como el usuario autenticado de la comunidad (Community User) en lugar del Agent User. ¿Qué debería explicar el especialista a la empresa sobre el efecto en los campos de auditoría?",
    "choices": ["Se ha habilitado Credential-Based User Verification, lo que a su vez respeta todos los aspectos de uso compartido y seguridad a nivel de campo.", "El modo de ejecución del Flow para el agente está configurado en System Context Without Sharing.", "Se ha habilitado Token-Based User Verification, lo que a su vez respeta todos los aspectos de uso compartido y seguridad a nivel de campo."],
    "correctAnswerText": "Se ha habilitado Credential-Based User Verification, lo que a su vez respeta todos los aspectos de uso compartido y seguridad a nivel de campo.",
    "explanation": "Credential-Based User Verification vincula la interacción de servicio al usuario autenticado de Experience Cloud, por lo que el acceso a los registros y los cambios en los mismos se evalúan a través del contexto de seguridad de ese usuario verificado. Esto explica por qué los campos de auditoría como Last Modified By muestran al usuario de la comunidad en lugar del usuario agente genérico. Este es el resultado de gobernanza esperado cuando el agente opera con una identidad de usuario verificada."
}, {
    "id": 25,
    "category": "Multi-Agent Orchestration",
    "question": "Global Finance Corp (GFC) está ampliando su despliegue de Agentforce desde un agente básico de servicio al cliente a un conjunto de agentes especializados que manejan Detección de Fraudes, Originación de Préstamos y Facturación. GFC opera completamente dentro de una única instancia global de Salesforce. El CIO desea garantizar que, a medida que escala el número de agentes especializados, la empresa mantenga un control estricto y centralizado sobre las barreras de seguridad (guardrails) y el contexto del usuario, garantizando que los clientes no tengan que repetirse cuando su solicitud abarque varios departamentos. ¿Cuál es un enfoque arquitectónico razonable para lograr este nivel de escalabilidad y control?",
    "choices": ["Utilizar el Model Context Protocol (MCP) para federar múltiples agentes externos de terceros directamente en la consola de servicio de Agentforce existente.", "Implementar una arquitectura Multi-Org, Multi-Agent (MOMA) conectada a través del protocolo Agent-to-Agent (A2A) para aislar de forma segura el agente de cada departamento.", "Desplegar una arquitectura Single-Org, Multi-Agent (SOMA) utilizando un agente Orquestador principal para gestionar el contexto compartido de forma nativa y enrutar subtareas a los agentes especializados."],
    "correctAnswerText": "Desplegar una arquitectura Single-Org, Multi-Agent (SOMA) utilizando un agente Orquestador principal para gestionar el contexto compartido de forma nativa y enrutar subtareas a los agentes especializados.",
    "explanation": "SOMA es correcto porque la empresa opera en una sola instancia de Salesforce y necesita una gobernanza centralizada, contexto de usuario compartido y enrutamiento entre agentes especializados. La guía de arquitectura de Salesforce define SOMA como múltiples agentes que colaboran dentro de una org de Salesforce utilizando gobernanza y datos compartidos, con un Supervisor o agente principal actuando como puerta de entrada que enruta el trabajo a agentes especialistas."
}, {
    "id": 26,
    "category": "AI Agents",
    "question": "Universal Containers (UC) necesita ahorrar tiempo a los agentes con resúmenes de casos generados por IA. UC ha implementado la función Work Summary. ¿Qué considera Einstein al generar un resumen?",
    "choices": ["La generación se fundamenta con el contexto de la conversación, los artículos de Knowledge y los casos.", "La generación se fundamenta únicamente con el contexto de la conversación existente.", "La generación se fundamenta con el contexto de la conversación y los artículos de Knowledge."],
    "correctAnswerText": "La generación se fundamenta con el contexto de la conversación, los artículos de Knowledge y los casos.",
    "explanation": "Al generar un Work Summary, Einstein aprovecha múltiples fuentes de información para proporcionar un resumen de caso completo y preciso para los agentes: el contexto de la conversación (detalles de la interacción como chats o correos), artículos de Knowledge vinculados o consultados, y datos de casos históricos o relacionados para ofrecer el contexto adecuado."
}, {
    "id": 27,
    "category": "AI Agents",
    "question": "El agente de soporte de una empresa ejecuta de manera inconsistente una acción obligatoria de verificación de fraude antes de procesar reembolsos. En algunas conversaciones la verificación de fraude se activa, pero en otras el agente se salta directamente a emitir el reembolso. Tras la revisión, un Agentforce Specialist recomienda colocar la directriz de instrucción con run @actions.fraud_check seguido de run @actions.process_refund. ¿Cuál es el efecto de este cambio de configuración?",
    "choices": ["La acción de verificación de fraude se sugerirá con mayor fuerza al modelo de lenguaje de gran tamaño (LLM), pero aun así se puede omitir si el LLM determina que no es relevante para la conversación.", "La acción de verificación de fraude se ejecutará después de la comprobación del modelo de lenguaje de gran tamaño (LLM) si la omitió en la ejecución del paso del proceso, pero el agente perderá su capacidad de usar un tono empático.", "La acción de verificación de fraude se forzará a ejecutarse antes de la acción de reembolso en cada conversación, porque las instrucciones de procedimiento proporcionan un control determinista sobre el orden de ejecución."],
    "correctAnswerText": "La acción de verificación de fraude se forzará a ejecutarse antes de la acción de reembolso en cada conversación, porque las instrucciones de procedimiento proporcionan un control determinista sobre el orden de ejecución.",
    "explanation": "En Agent Script, el uso explicito de comandos de ejecución procedimentales (`run @actions...`) impone un orden estricto de ejecución antes de que el motor de razonamiento del LLM tome decisiones conversacionales. Esto proporciona un control determinista que garantiza que la acción requerida no pueda ser omitida por la interpretación fluida del modelo."
}, {
    "id": 28,
    "category": "Data 360 Fundamentals",
    "question": "Los usuarios de Universal Containers (UC) se quejan de que las respuestas del agente no son satisfactorias. El agente está utilizando archivos PDF como fuente de conocimiento. ¿Cómo debería UC solucionar este problema?",
    "choices": ["Analizar el mapeo de datos entre los campos de origen y los campos del objeto de Data Cloud.", "Verificar que el agente tenga acceso de permiso al campo del archivo PDF para la biblioteca de datos.", "Verificar los criterios de filtro del recuperador (retriever) y la conexión de la fuente de datos."],
    "correctAnswerText": "Verificar los criterios de filtro del recuperador (retriever) y la conexión de la fuente de datos.",
    "explanation": "Si las respuestas del agente no son satisfactorias al utilizar archivos PDF como fuente de conocimiento, es probable que el problema se deba a una configuración errónea del recuperador (retriever). Si los filtros son demasiado amplios o restrictivos, la IA puede no encontrar la información relevante. Verificar la lógica de los filtros y el alcance de la recuperación ayuda a mejorar la precisión, al igual que garantizar la correcta conexión con el almacenamiento de los archivos."
}, {
    "id": 29,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está desplegando varias plantillas de prompt para ayudar a sus agentes de soporte utilizando los modelos fundacionales estándar de Salesforce. La dirección requiere que las respuestas generadas reflejen de manera constante un tono empático y altamente profesional. UC solo permite el uso de modelos de lenguaje de gran tamaño (LLMs) fundacionales estándar. ¿Cuál es la técnica de ingeniería de prompts más efectiva que el Agentforce Specialist debería implementar en Prompt Builder para cumplir con este requisito?",
    "choices": ["Configurar el tono de la plantilla de prompt con un conjunto de datos de interacciones pasadas utilizando diferentes estilos de escritura, intensificadores y puntuación para alterar permanentemente el tono predeterminado del LLM.", "Incluir una instrucción directa pidiendo al LLM que adopte el rol de un personaje específico, por ejemplo, \"Actúa como un agente de soporte al cliente empático\", para proporcionar contexto y establecer el tono.", "Incluir preguntas de opción múltiple tipo picklist dentro de la plantilla de prompt para probar y corregir sistemáticamente la comprensión del LLM sobre el contexto deseado antes de generar la salida."],
    "correctAnswerText": "Incluir una instrucción directa pidiendo al LLM que adopte el rol de un personaje específico, por ejemplo, \"Actúa como un agente de soporte al cliente empático\", para proporcionar contexto y establecer el tono.",
    "explanation": "La respuesta correcta es B porque la técnica basada en roles (role-based prompting) es la adecuada para moldear el tono y el comportamiento sin modificar el modelo fundacional subyacente. Una instrucción como “Actúa como un agente de soporte al cliente empático” otorga al LLM un rol, audiencia, estilo de comunicación y contexto de negocio, manteniendo la consistencia deseada dentro de las restricciones de usar modelos estándar."
}, {
    "id": 30,
    "category": "Prompt Engineering",
    "question": "Universal Containers desplegó el nuevo Agentforce Sales Development Representative (SDR) en producción, pero los representantes de ventas dicen que no pueden encontrarlo. ¿Qué está causando este problema?",
    "choices": ["A los perfiles de los usuarios representantes de ventas les falta el permiso Allow SDR Agent.", "Los usuarios representantes de ventas no tienen acceso al objeto SDR Agent.", "A los usuarios representantes de ventas les falta el conjunto de permisos (permission set) Use SDR Agent."],
    "correctAnswerText": "A los usuarios representantes de ventas les falta el conjunto de permisos (permission set) Use SDR Agent.",
    "explanation": "Si los representantes de ventas no pueden ver o acceder al SDR Agent, la causa más probable es la falta de permisos. El conjunto de permisos \"Use SDR Agent\" es necesario para que los usuarios accedan e interactúen con el SDR Agent en Agentforce. El acceso en Agentforce se gestiona mediante permission sets específicos y no por configuraciones a nivel de perfil u objetos independientes."
}, {
    "id": 31,
    "category": "Governance & Observability",
    "question": "Universal Containers lanzó recientemente un programa piloto para integrar IA conversacional en sus operaciones comerciales de CRM con Agentforce Agents. ¿Cómo debería el Agentforce Specialist monitorear la usabilidad de los agentes y la asignación de acciones?",
    "choices": ["Ejecutar un informe sobre los Platform Debug Logs.", "Consultar los datos de registro del agente utilizando la Metadata API.", "Ejecutar Agent Analytics."],
    "correctAnswerText": "Ejecutar Agent Analytics.",
    "explanation": "El monitoreo de la usabilidad y la asignación de acciones en Agentforce Agents requiere información sobre el rendimiento y las interacciones. Salesforce proporciona Agent Analytics como una capacidad integrada diseñada específicamente para este propósito, ofreciendo paneles e informes que rastrean métricas como tiempos de respuesta, satisfacción del usuario, frecuencia de activación de acciones y tasas de éxito."
}, {
    "id": 32,
    "category": "Data 360 Fundamentals",
    "question": "¿Cuál es el propósito de aplicar filtros en una configuración de recuperador (retriever) personalizado?",
    "choices": ["Los filtros reducen los resultados de búsqueda aplicando hasta 10 condiciones basadas en campos definidos en el índice de búsqueda, mejorando así la relevancia del contenido devuelto.", "Los filtros encriptan y enmascaran automáticamente los campos confidenciales en el índice de búsqueda para garantizar que solo se recupere información no confidencial para consultas públicas.", "Los filtros reformatean y agregan múltiples documentos en un solo resumen de salida para simplificar y unificar la salida del recuperador para una fundamentación de IA más eficiente y precisa."],
    "correctAnswerText": "Los filtros reducen los resultados de búsqueda aplicando hasta 10 condiciones basadas en campos definidos en el índice de búsqueda, mejorando así la relevancia del contenido devuelto.",
    "explanation": "La guía de configuración del recuperador de Agentforce especifica que los filtros se utilizan para refinar y limitar los resultados de búsqueda dentro de una configuración de recuperador. Funcionan aplicando condiciones (hasta 10) sobre campos indexados como tipo de documento, categoría, región o fecha de actualización, lo que garantiza que los datos recuperados sean altamente relevantes para el contexto."
}, {
    "id": 33,
    "category": "Prompt Engineering",
    "question": "Universal Containers planea mejorar la productividad de su equipo de ventas utilizando IA. ¿Qué requisito específico necesita el uso de Prompt Builder?",
    "choices": ["Crear un borrador de boletín informativo (newsletter) para una próxima feria comercial.", "Predecir la probabilidad de que los clientes abandonen o descontinúen su relación con la empresa.", "Crear un valor estimado de vida del cliente (CLV) con datos de compras históricos."],
    "correctAnswerText": "Crear un borrador de boletín informativo (newsletter) para una próxima feria comercial.",
    "explanation": "Prompt Builder destaca en la generación de salidas de texto (como boletines informativos) mediante IA generativa. UC puede crear una plantilla de prompt para redactar boletines personalizados y ricos en contexto. Por el contrario, la predicción de abandono (churn) y la estimación de CLV son tareas de IA predictiva, más adecuadas para herramientas como Einstein Prediction Builder o analítica predictiva."
}, {
    "id": 34,
    "category": "AI Agents",
    "question": "Universal Containers necesita una herramienta que pueda analizar registros de llamadas de voz y video para brindar información sobre menciones de competidores, oportunidades de coaching y otra información clave. El objetivo es mejorar el rendimiento del equipo identificando áreas de mejora e inteligencia competitiva. ¿Qué función brinda información sobre menciones de competidores y oportunidades de coaching?",
    "choices": ["Call Summaries", "Einstein Sales Insights", "Call Explorer"],
    "correctAnswerText": "Call Explorer",
    "explanation": "Para analizar registros de llamadas de voz y video y obtener información detallada sobre menciones de competidores y oportunidades de coaching, Call Explorer (parte de Einstein Conversation Insights) es la función adecuada. Utiliza procesamiento de lenguaje natural (NLP) para extraer momentos clave en las conversaciones."
}, {
    "id": 35,
    "category": "AI Agents",
    "question": "Un administrador de Salesforce está explorando las capacidades de Agent para mejorar la interacción del usuario dentro de su organización. Está particularmente interesado en cómo Agent procesa las solicitudes de los usuarios y el mecanismo que emplea para entregar respuestas. El administrador está evaluando si Agent interactúa directamente con un modelo de lenguaje de gran tamaño (LLM) para obtener y mostrar respuestas a las consultas de los usuarios. ¿Cómo maneja Agent las solicitudes de los usuarios en Salesforce?",
    "choices": ["Agent activará un Flow que utiliza una plantilla de prompt para generar el mensaje.", "Agent realizará una llamada HTTPout a un proveedor de LLM.", "Agent analiza la solicitud del usuario y se utiliza tecnología LLM para generar y mostrar la respuesta adecuada."],
    "correctAnswerText": "Agent analiza la solicitud del usuario y se utiliza tecnología LLM para generar y mostrar la respuesta adecuada.",
    "explanation": "Agent analiza la entrada del usuario mediante técnicas de procesamiento de lenguaje natural y utiliza tecnología LLM integrada para generar una respuesta adecuada y contextualmente relevante, la cual se muestra directamente al usuario dentro de la interfaz de Salesforce."
}, {
    "id": 36,
    "category": "Governance & Observability",
    "question": "¿Qué puede hacer un Agentforce Specialist cuando la configuración 'Enrich event logs with conversation data' está habilitada en Agentforce?",
    "choices": ["Ver la ruta de clics del usuario que condujo a cada acción del agente.", "Ver datos de la sesión, incluidas las entradas del usuario y las respuestas del agente para las sesiones.", "Generar informes detallados sobre todas las conversaciones del agente durante cualquier período de tiempo."],
    "correctAnswerText": "Ver datos de la sesión, incluidas las entradas del usuario y las respuestas del agente para las sesiones.",
    "explanation": "Habilitar la opción \"Enrich event logs with conversation data\" permite a los administradores capturar detalles a nivel de sesión, incluyendo tanto las entradas de texto realizadas por los usuarios como las respuestas generadas por el agente, añadiéndolas a los registros de eventos para análisis y resolución de problemas."
}, {
    "id": 37,
    "category": "AI Agents",
    "question": "En Horizon Insurance, el equipo de servicio al cliente informa que el agente enruta constantemente las conversaciones de registro de reclamos al subagente Policy Inquiry, a pesar de que la intención del usuario indica claramente un problema relacionado con reclamos. Este enrutamiento erróneo persiste a pesar de que el especialista agregó condiciones de protección (guard conditions). ¿Qué es lo que más probablemente está causando este enrutamiento incorrecto en el agente de Horizon Insurance?",
    "choices": ["Instrucciones de procedimiento que requieren Salesforce Flows para enrocar al subagente correcto", "Uso de instrucciones globales para definir el enrutamiento de subagentes para agentes en entornos regulados por cumplimiento", "Superposición en las descripciones de subagentes y condiciones de entrada entre los subagentes Claims Intake y Policy Inquiry"],
    "correctAnswerText": "Superposición en las descripciones de subagentes y condiciones de entrada entre los subagentes Claims Intake y Policy Inquiry",
    "explanation": "El enrutamiento entre subagentes depende del análisis semántico que realiza el motor de razonamiento sobre las descripciones y condiciones de entrada de cada subagente. Si existen definiciones superpuestas o ambiguas entre Claims Intake y Policy Inquiry, la IA no podrá diferenciar con precisión a cuál enviar la interacción."
}, {
    "id": 38,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist está considerando usar un tipo de plantilla de prompt Field Generation. ¿Qué debe verificar el especialista antes de crear el prompt Field Generation para asegurarse de que sea posible habilitar el campo para IA generativa?",
    "choices": ["Que el campo elegido deba ser un campo de texto enriquecido (rich text) con 255 caracteres o más.", "Que la org esté configurada en la versión de API 59 o superior.", "Que el diseño de página Lightning (page layout) donde residirá el campo se haya actualizado a Dynamic Forms."],
    "correctAnswerText": "Que el diseño de página Lightning (page layout) donde residirá el campo se haya actualizado a Dynamic Forms",
    "explanation": "Las plantillas de prompt de tipo Field Generation funcionan incrustando sugerencias generadas por IA directamente en los campos editables de las páginas de registros Lightning. Esta funcionalidad requiere estrictamente que la página esté convertida o configurada con Dynamic Forms."
}, {
    "id": 39,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Coral Cloud Resorts desea cubrir un amplio abanico de frases de usuarios al probar su agente de FAQ. ¿Qué función de Testing Center satisface esa necesidad?",
    "choices": ["Enunciados de prueba sintéticos generados por IA basados en variaciones de lenguaje natural", "Cargar solo un pequeño conjunto de prompts escritos manualmente", "Confiar en los registros de clientes en vivo para capturar la diversidad de frases después del despliegue"],
    "correctAnswerText": "Enunciados de prueba sintéticos generados por IA basados en variaciones de lenguaje natural",
    "explanation": "El Testing Center de Agentforce permite generar sintéticamente variaciones de expresiones (utterances) en lenguaje natural a partir de casos de prueba existentes, lo que evalúa cómo reacciona la IA ante distintas formas de redactar la misma intención antes de salir a producción."
}, {
    "id": 40,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Antes de activar una Agent action personalizada, a un Agentforce Specialist le gustaría comprender múltiples enunciados de usuarios reales para garantizar que la acción se seleccione de manera adecuada. ¿Qué herramienta debería recomendar el especialista?",
    "choices": ["Agentforce", "Agent Builder", "Model Playground"],
    "correctAnswerText": "Agent Builder",
    "explanation": "Agent Builder permite simular y probar frases de usuarios reales directamente en el entorno de diseño para verificar qué acciones o temas se activan según la coincidencia de intenciones antes de desplegar."
}, {
    "id": 41,
    "category": "AI Agents",
    "question": "Un equipo de soporte maneja un alto volumen de interacciones por chat y necesita una solución para brindar respuestas rápidas y relevantes a las consultas de los clientes. Las respuestas deben estar fundamentadas en la base de conocimiento de la organización para mantener la coherencia y la precisión. ¿Qué función en Einstein for Service debería utilizar el equipo de soporte?",
    "choices": ["Einstein Service Replies", "Einstein Reply Recommendations", "Einstein Knowledge Recommendations"],
    "correctAnswerText": "Einstein Service Replies",
    "explanation": "Einstein Service Replies genera sugerencias de respuesta contextuales impulsadas por IA durante conversaciones por chat o correo electrónico, estando directamente fundamentadas en la base de conocimiento (Knowledge) de la empresa."
}, {
    "id": 42,
    "category": "Prompt Engineering",
    "question": "¿Qué función de la Einstein Trust Layer ayuda a minimizar los riesgos de ataques de jailbreak e inyección de prompts (prompt injection)?",
    "choices": ["Secure Data Retrieval and Grounding", "Data Masking", "Prompt Defense"],
    "correctAnswerText": "Prompt Defense",
    "explanation": "Prompt Defense es el componente específico dentro de la Einstein Trust Layer diseñado para proteger los modelos frente a entradas maliciosas, intentos de jailbreak y ataques de inyección de prompts."
}, {
    "id": 43,
    "category": "AI Agents",
    "question": "Universal Containers desea enrocar una conversación de un agente de servicio a una cola de agentes humanos. ¿Qué herramienta conecta al agente de servicio con la cola de agentes humanos para la escalación?",
    "choices": ["Outbound Omni-Channel Flow", "Screen Flow", "Prompt Flow"],
    "correctAnswerText": "Outbound Omni-Channel Flow",
    "explanation": "En Agentforce, cuando una conversación necesita ser transferida a un agente humano, se utiliza un Outbound Omni-Channel Flow para gestionar el enrutamiento dinámico hacia las colas de atención según las reglas de negocio."
}, {
    "id": 44,
    "category": "Prompt Engineering",
    "question": "¿Cuál es el proceso correcto para aprovechar Prompt Builder en una org de Salesforce?",
    "choices": ["Seleccionar el tipo de plantilla de prompt adecuado, seleccionar uno de los prompts estándar de Salesforce, determinar el objeto al que asociar el prompt, seleccionar un registro para validar y asociar el prompt a una acción.", "Seleccionar el tipo de plantilla de prompt adecuado a utilizar, desarrollar el prompt dentro del espacio de trabajo del prompt, seleccionar recursos para insertar dinámicamente datos de grounding derivados del CRM, elegir el modelo a utilizar y probar y validar las respuestas generadas.", "Habilitar el objeto de destino para prompting generativo, desarrollar el prompt dentro del espacio de trabajo del prompt, seleccionar registros para ajustar y fundamentar la respuesta, habilitar la Trust Layer y asociar el prompt a una acción."],
    "correctAnswerText": "Seleccionar el tipo de plantilla de prompt adecuado a utilizar, desarrollar el prompt dentro del espacio de trabajo del prompt, seleccionar recursos para insertar dinámicamente datos de grounding derivados del CRM, elegir el modelo a utilizar y probar y validar las respuestas generadas.",
    "explanation": "El flujo de trabajo correcto en Prompt Builder consiste en elegir el tipo de plantilla, redactar las instrucciones en el workspace, incorporar recursos de grounding dinámicos del CRM, seleccionar el LLM objetivo y finalmente probar/validar la salida frente a registros reales."
}, {
    "id": 45,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist crea un nuevo Service Agent que utiliza una acción personalizada basada en un Flow. El agente se ha probado en un sandbox y ya está listo para desplegarse. ¿Cuál es una consideración clave con respecto al estado de activación del agente en el entorno de producción?",
    "choices": ["El agente se activará automáticamente solo si el Flow también está activo.", "El agente debe activarse manualmente en producción, independientemente de su estado en el sandbox.", "El agente se activará automáticamente tras un despliegue exitoso."],
    "correctAnswerText": "El agente debe activarse manualmente en producción, independientemente de su estado en el sandbox.",
    "explanation": "Por razones de gobernanza y control de cambios, el estado de activación de los agentes no se traspasa de forma automática durante los despliegues entre entornos. Una vez desplegado en producción, el agente debe ser activado de manera manual."
}, {
    "id": 46,
    "category": "AI Agents",
    "question": "Coral Cloud Resorts (CCR) desea configurar su agente para que las acciones de reserva solo estén disponibles cuando el nivel de membresía de un cliente sea \"Premium\" o \"Elite\". Esta regla de negocio debe aplicarse de manera determinista. ¿Qué debería implementar CCR?",
    "choices": ["Configurar reglas de validación personalizadas en los objetos de reserva subyacentes para evitar que los clientes no elegibles completen las reservas.", "Configurar instrucciones de temas (topic instructions) que establezcan claramente que las acciones de reserva solo deben usarse para clientes Premium o Elite e incluir ejemplos.", "Crear una variable de contexto mapeada al campo del nivel de membresía del cliente y luego agregar un filtro condicional sobre MembershipTier."],
    "correctAnswerText": "Crear una variable de contexto mapeada al campo del nivel de membresía del cliente y luego agregar un filtro condicional sobre MembershipTier.",
    "explanation": "Para garantizar que una regla de negocio se aplique de forma determinista y no dependa del criterio del LLM, se debe usar una variable de contexto combinada con un filtro condicional de disponibilidad (\"available when\") en la acción."
}, {
    "id": 47,
    "category": "Multi-Agent Orchestration",
    "question": "Universal Containers (UC) utiliza un agente para manejar las consultas de servicio al cliente. UC se asoció recientemente con un proveedor de logística externo que opera su propio agente de IA autónomo y distinto. Cuando un cliente solicita un reenrutamiento de envío internacional complejo, el agente de UC debe comunicarse de forma segura, negociar las condiciones de enrutamiento y delegar la ejecución del reenrutamiento directamente al agente de IA del proveedor de logística. ¿Qué protocolo estándar abierto multi-agente está diseñado específicamente para facilitar esta delegación de tareas autónoma y negociación entre agentes de IA independientes?",
    "choices": ["Agent-to-Agent (A2A) Protocol", "Model Context Protocol (MCP)", "OpenAPI Specification (OAS)"],
    "correctAnswerText": "Agent-to-Agent (A2A) Protocol",
    "explanation": "El protocolo Agent-to-Agent (A2A) es el estándar abierto diseñado para permitir que agentes de IA independientes de diferentes plataformas puedan descubrirse, comunicarse, negociar y delegarse tareas entre sí."
}, {
    "id": 48,
    "category": "Prompt Engineering",
    "question": "Universal Containers está considerando aprovechar la Einstein Trust Layer en conjunto con los datos de auditoría de Einstein Generative AI. ¿Qué datos de auditoría están disponibles mediante la Einstein Trust Layer?",
    "choices": ["Precisión de respuesta y puntuación de ofensiva", "Puntuación de alucinación y puntuación de sesgo", "Datos enmascarados y puntuación de toxicidad (toxicity score)"],
    "correctAnswerText": "Datos enmascarados y puntuación de toxicidad (toxicity score)",
    "explanation": "La Einstein Trust Layer registra de forma nativa en sus datos de auditoría los elementos que han sido sometidos a enmascaramiento de datos (Data Masking) para proteger PII y las evaluaciones de toxicidad (Toxicity Scoring) realizadas a las respuestas del modelo."
}, {
    "id": 49,
    "category": "AI Agents",
    "question": "Antes de activar una acción personalizada de Copilot, a un especialista en Agentforce le gustaría comprender múltiples expresiones de usuarios del mundo real para garantizar que la acción se seleccione adecuadamente. ¿Qué herramienta debería recomendar el Agentforce Specialist?",
    "choices": ["Model Playground", "Agent", "Copilot Builder"],
    "correctAnswerText": "Copilot Builder",
    "explanation": "Copilot Builder permite probar expresiones de usuario (utterances) contra las acciones configuradas para observar cómo el motor de razonamiento las interpreta y corregir las instrucciones antes de salir a producción."
}, {
    "id": 50,
    "category": "AI Agents",
    "question": "Universal Containers desea reducir el tiempo general de gestión del soporte al cliente minimizando el tiempo dedicado a escribir respuestas rutinarias para preguntas frecuentes en el chat, y reduciendo el análisis posterior al chat sugiriendo valores para los campos del caso. ¿Qué combinación de funciones de Agentforce for Service permite este esfuerzo?",
    "choices": ["Einstein Reply Recommendations y Case Classification", "Einstein Reply Recommendations y Case Summaries", "Einstein Service Replies y Work Summaries"],
    "correctAnswerText": "Einstein Reply Recommendations y Case Classification",
    "explanation": "Einstein Reply Recommendations ayuda a los agentes a responder rápidamente preguntas comunes sugiriendo respuestas prediseñadas en el chat, mientras que Case Classification analiza la interacción para autocompletar o sugerir campos en el caso, reduciendo el trabajo manual posterior."
}, {
    "id": 51,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) necesita crear una plantilla de prompt que proporcione una descripción detallada del producto basada en los últimos datos del producto. La descripción se utilizará en materiales de marketing para garantizar la consistencia y la precisión. ¿Qué tipo de plantilla de prompt debería utilizar UC?",
    "choices": ["Record Summary", "Sales Email", "Field Generation"],
    "correctAnswerText": "Field Generation",
    "explanation": "Explicación exhaustiva y detallada del extracto exacto: La documentación establece que la plantilla Field Generation está diseñada para rellenar un campo específico en un registro con el resultado generado. “Field Generation: utiliza el contexto del registro para autocompletar campos específicos en una página de registro.” (Tipos de plantillas de prompt) En este escenario, UC desea generar una descripción detallada del producto basada en los datos del producto y rellenar ese campo de descripción en el registro del producto (o equivalente). Este es exactamente un caso de uso de generación de campos (field generation). La plantilla Sales Email es para generar contenido de correo electrónico, y la plantilla Record Summary es para resumir un registro en lugar de generar una descripción de estilo marketing. Por lo tanto, la respuesta correcta es C."
}, {
    "id": 52,
    "category": "Prompt Engineering",
    "question": "Cloud Kicks está desarrollando una plantilla de prompt en un sandbox y ha creado múltiples versiones guardadas durante las pruebas. Cloud Kicks se está preparando ahora para mover la plantilla a producción. ¿Cuál es una consideración al desplegar la plantilla a producción?",
    "choices": ["Desplegar una plantilla requiere que todas las versiones anteriores se activen manualmente antes de que el despliegue pueda tener éxito", "Desplegar una plantilla elimina automáticamente todas las versiones anteriores y las reemplaza con la versión desplegada en producción", "Desplegar una plantilla de prompt incluye todas las versiones de la plantilla de prompt que están en la org de origen hacia la org de destino"],
    "correctAnswerText": "Desplegar una plantilla de prompt incluye todas las versiones de la plantilla de prompt que están en la org de origen hacia la org de destino",
    "explanation": "La respuesta correcta es C porque el control de versiones de las plantillas de prompt forma parte del ciclo de vida de los metadatos de las plantillas de prompt. Cuando una plantilla de prompt se mueve entre entornos, los especialistas deben tener en cuenta las versiones almacenadas con la plantilla en la org de origen. Es por eso que la gestión de versiones de plantillas es importante antes del despliegue; las versiones de prueba, las versiones inactivas y las versiones listas para producción pueden afectar al paquete de metadatos. La opción A es incorrecta porque las versiones anteriores no tienen que activarse manualmente antes del despliegue. La opción B es incorrecta porque el despliegue no borra simplemente todo el historial reteniendo solo una versión de reemplazo. Las consideraciones de CLI de Salesforce para Prompt Builder confirman que las versiones de las plantillas están representadas en XML desplegable y se pueden gestionar durante el despliegue, incluyendo el comportamiento de eliminación en la org de destino."
}, {
    "id": 53,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Se ha desarrollado un Agentforce Agent con múltiples temas y Agent Actions que utilizan Flows y Apex. ¿Qué opciones están disponibles para desplegar estos elementos a producción?",
    "choices": ["Desplegar los Flows y Apex utilizando herramientas de despliegue normales y crear manualmente los elementos relacionados con el agente en producción.", "Utilizar solo Change Sets porque la CLI de Salesforce no admite actualmente el despliegue de metadatos relacionados con el agente.", "Desplegar Flows, Apex y todos los elementos relacionados con el agente utilizando Change Sets o la CLI de Salesforce / Metadata API."],
    "correctAnswerText": "Desplegar Flows, Apex y todos los elementos relacionados con el agente utilizando Change Sets o la CLI de Salesforce / Metadata API.",
    "explanation": "¿Por qué \"Desplegar Flows, Apex y todos los elementos relacionados con el agente utilizando Change Sets o la CLI de Salesforce / Metadata API\" es la respuesta correcta? Al desplegar un Agentforce Agent con múltiples temas y Agent Actions que utilizan Flows y Apex, se requiere una solución de despliegue completa. Los Change Sets y la CLI de Salesforce / Metadata API admiten el despliegue de Flows, código Apex y metadatos relacionados con el agente. Consideraciones clave para los despliegues de Agentforce: Admite el despliegue de todos los componentes requeridos. Los Agentforce Agents incluyen Flows, clases Apex, temas y acciones de agente. Los Change Sets y la CLI de Salesforce / Metadata API permiten desplegar todos estos componentes juntos, garantizando una transición fluida a producción. Los metadatos de Agentforce se pueden desplegar utilizando herramientas estándar. Change Sets: Permite a los administradores mover configuraciones, objetos personalizados y metadatos entre entornos de Salesforce. CLI de Salesforce / Metadata API: Permite despliegues automatizados mediante scripts, transfiriendo las configuraciones de Agentforce. Garantiza una migración completa sin configuración manual. Desplegar todos los componentes juntos reduce el riesgo de configuraciones erróneas. Automatizar los despliegues utilizando la Metadata API garantiza la consistencia entre entornos. ¿Por qué no las otras opciones? ❌ A. Desplegar los Flows y Apex utilizando herramientas de despliegue normales y crear manualmente los elementos relacionados con el agente en producción. Incorrecto porque crear manualmente elementos relacionados con el agente en producción introduce riesgos e inconsistencias. Este enfoque es propenso a errores y consume mucho tiempo, especialmente para grandes despliegues de Agentforce. ❌ B. Utilizar solo Change Sets porque la CLI de Salesforce no admite actualmente el despliegue de metadatos relacionados con el agente. Incorrecto porque la CLI de Salesforce y la Metadata API admiten plenamente los despliegues de Agentforce. Los Change Sets son útiles pero limitados en despliegues automatizados a gran escala. Referencia de Agentforce Specialist: El material de Salesforce AI Specialist confirma que los metadatos de Agentforce (Flows, acciones y temas) se pueden desplegar utilizando Change Sets o la Metadata API."
}, {
    "id": 54,
    "category": "Prompt Engineering",
    "question": "El agente de Universal Containers siempre debe buscar el nivel de cuenta del cliente y los casos abiertos desde Salesforce antes de decidir cómo responder. Basándose en el flujo de control de Agent Script, ¿qué es cierto sobre la ejecución de acciones deterministas al comienzo de un subagente?",
    "choices": ["Solo se puede garantizar que las acciones se ejecuten colocándolas en el bloque config.", "Solo before_reasoning puede garantizar que se invoque el modelo de lenguaje de gran tamaño (LLM) antes de que se ejecute una acción.", "La primera instrucción en reasoning.instructions siempre se ejecuta antes de que se invoque el modelo de lenguaje de gran tamaño (LLM)."],
    "correctAnswerText": "La primera instrucción en reasoning.instructions siempre se ejecuta antes de que se invoque el modelo de lenguaje de gran tamaño (LLM).",
    "explanation": "La respuesta correcta es C. En Agent Script, reasoning.instructions se procesa antes de que el prompt final ensamblado se envíe al LLM. Salesforce explica que la lógica procedimental dentro de las instrucciones de razonamiento se ejecuta de arriba a abajo, se acumula el texto del prompt y luego el prompt ensamblado se envía al LLM. Por lo tanto, si la primera instrucción ejecuta de forma determinista las acciones de búsqueda del nivel de cuenta y casos abiertos, esos valores se pueden recopilar antes de que el LLM decida cómo responder. La opción A es incorrecta porque el bloque config define metadatos a nivel de agente, no la ejecución garantizada de acciones. La opción B está redactada de forma incorrecta y invierte el problema de secuencia. Para la recopilación determinista de datos previa a la respuesta, las instrucciones procedimentales al inicio de reasoning.instructions son el patrón correcto."
}, {
    "id": 55,
    "category": "Prompt Engineering",
    "question": "Un Agentforce necesita incluir datos de la respuesta de una invocación de servicio externo (llamada REST API) en la plantilla de prompt. ¿Cómo debería el Agentforce Specialist cumplir con este requisito?",
    "choices": ["Convertir el JSON a un campo de combinación XML.", "Utilizar campos de combinación External Service Record.", "Utilizar el elemento de Flow \"Add Prompt Instructions\"."],
    "correctAnswerText": "Utilizar campos de combinación External Service Record.",
    "explanation": "Para incorporar datos devueltos por un servicio externo mediante llamadas de API REST en una plantilla de prompt de Prompt Builder, la plataforma permite mapear las respuestas estructuradas usando campos de combinación de registros de servicios externos (External Service Record merge fields), permitiendo fundamentar el prompt con información obtenida dinámicamente en tiempo de ejecución."
}, {
    "id": 56,
    "category": "Data 360 Fundamentals",
    "question": "¿Cómo aprovecha Data Cloud la acción Answer Questions with Knowledge en Agentforce?",
    "choices": ["Data Cloud no es necesario; el agente puede acceder a los artículos directamente desde el CRM.", "Data Cloud almacena y gestiona los artículos de Knowledge indexados.", "Data Cloud proporciona los flujos de datos en tiempo real que actualizan los artículos de Knowledge."],
    "correctAnswerText": "Data Cloud almacena y gestiona los artículos de Knowledge indexados.",
    "explanation": "¿Cómo respalda Data Cloud la acción \"Answer Questions with Knowledge\" en Agentforce? La acción Answer Questions with Knowledge en Agentforce aprovecha Salesforce Data Cloud para almacenar, gestionar e indexar los artículos de Knowledge utilizados para las respuestas impulsadas por IA. Data Cloud como almacenamiento central para artículos de Knowledge: Los artículos de Knowledge indexados se almacenan y recuperan en tiempo real desde Data Cloud. El sistema de IA consulta Data Cloud para obtener artículos relevantes cuando un agente de servicio o cliente necesita una respuesta. Garantizar respuestas actualizadas: Data Cloud actualiza continuamente los artículos de Knowledge basándose en nuevos conocimientos, interacciones de usuarios y comentarios. La IA puede extraer la información más reciente y relevante de la base de conocimiento. Mejorar el servicio al cliente impulsado por IA: Las respuestas generadas por IA están fundamentadas en interacciones reales de servicio al cliente. Los agentes de servicio se benefician de respuestas rápidas y conscientes del contexto, mejorando los tiempos de resolución y la satisfacción del cliente. ¿Por qué no las otras opciones? ❌ A. Data Cloud no es necesario; el agente puede acceder a los artículos directamente desde el CRM. Incorrecto porque Data Cloud es el sistema principal para almacenar e indexar artículos de Knowledge. Sin Data Cloud, Einstein AI no puede recuperar y clasificar eficientemente los artículos de forma dinámica. ❌ C. Data Cloud proporciona los flujos de datos en tiempo real que actualizan los artículos de Knowledge. Incorrecto porque aunque Data Cloud almacena y gestiona los artículos, las actualizaciones en tiempo real no son su función principal. El sistema de gestión de Knowledge dentro de Salesforce maneja la creación y actualización de artículos. Referencia de Agentforce Specialist: El material de Salesforce AI Specialist destaca que Data Cloud es el sistema de almacenamiento central para la gestión de Knowledge impulsada por IA. Las instrucciones de Salesforce para la certificación confirman el papel central de Data Cloud en la gestión de artículos de Knowledge indexados para respuestas impulsadas por IA."
}, {
    "id": 57,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Cloud Kicks (CK) finalizó recientemente el desarrollo de una nueva plantilla de prompt que utiliza su propio modelo de lenguaje de gran tamaño (LLM). CK está desplegando la plantilla de prompt desde un sandbox a una org de producción y está recibiendo un error. Al intentar desplegar el Change Set, CK recibe un error relacionado con el LLM utilizado en la plantilla de prompt. ¿Cuál es la causa del error?",
    "choices": ["El prompt no especifica que es un LLM personalizado.", "BYOLLM aún no es compatible para plantillas de prompt en producción.", "El nombre del LLM no coincide en el sandbox y en producción."],
    "correctAnswerText": "El nombre del LLM no coincide en el sandbox y en producción.",
    "explanation": "Tal como se documenta en la Guía de despliegue de BYOLLM (Bring-Your-Own-LLM) y plantillas de prompt de Agentforce, cada plantilla de prompt hace referencia a una configuración específica de LLM por nombre e identificador. Al migrar componentes entre entornos (por ejemplo, de sandbox a producción), el LLM al que se hace referencia también debe existir en la org de destino con el mismo nombre e identificador exactos. Si la configuración del LLM falta o tiene un nombre diferente en producción, el despliegue falla, ya que la plantilla de prompt no puede resolver su dependencia del modelo. La opción A es incorrecta porque especificar un tipo de LLM personalizado no resuelve el problema de configuración faltante. La opción B es incorrecta porque BYOLLM es compatible en producción, siempre que esté registrado correctamente. Por lo tanto, el error ocurre porque el nombre del LLM o el ID de configuración no coinciden entre el sandbox y producción, haciendo que la Opción C sea la respuesta correcta. Referencia: Guía de configuración y despliegue de BYOLLM de Agentforce — “Gestión de referencias de modelos entre entornos”."
}, {
    "id": 58,
    "category": "Multi-Agent Orchestration",
    "question": "Universal Containers tiene múltiples orgs de Salesforce, cada una con un agente de servicio al cliente único donde un agente de verificación debe pasar datos de identidad del cliente a agentes secundarios que manejan modificaciones de la cuenta. El ID de cliente debe permanecer seguro y persistente a través de las transferencias entre agentes sin exposición a la modificación por parte del modelo de lenguaje de gran tamaño (LLM). ¿Cuál es la configuración más adecuada?",
    "choices": ["Implementar un objeto personalizado para almacenar temporalmente el estado de verificación y hacer que cada agente lo consulte mediante acciones SOQL durante la ejecución.", "Almacenar la información de identidad del cliente en variables de conversación creadas por el primer agente y hacer que otros agentes lean esas mismas variables de conversación.", "Utilizar la Agent API para iniciar la sesión del agente secundario y pasar el ID de cliente verificado como una variable de contexto de solo lectura, garantizando la seguridad y evitando la alteración por parte del LLM."],
    "correctAnswerText": "Utilizar la Agent API para iniciar la sesión del agente secundario y pasar el ID de cliente verificado como una variable de contexto de solo lectura, garantizando la seguridad y evitando la alteración por parte del LLM.",
    "explanation": "La Guía de configuración de seguridad y comunicación entre agentes de Agentforce especifica que cuando se deben compartir datos de identidad confidenciales (como un ID de cliente verificado) entre agentes, el enfoque correcto es utilizar la Agent API para iniciar la sesión del agente secundario. Los datos verificados deben pasarse como una variable de contexto de solo lectura, garantizando la persistencia entre sesiones al tiempo que se evita la modificación por parte del modelo de lenguaje de gran tamaño (LLM). Esta configuración mantiene la integridad de los datos y el cumplimiento de la seguridad al aislar las variables confidenciales de la capa de razonamiento del LLM. Las variables de contexto pasadas a través de la Agent API son inmutables durante el tiempo de ejecución, lo que garantiza que no se puedan alterar ni exponer en respuestas generadas por el agente. La opción A agrega una persistencia de datos y complejidad innecesarias. La opción B no es segura porque las variables de conversación quedan expuestas al contexto del LLM, arriesgándose a modificaciones no deseadas o filtraciones. Por lo tanto, la configuración más segura y en cumplimiento es la Opción C: utilizar la Agent API para pasar los ID verificados como variables de contexto de solo lectura entre agentes. Referencia: Guía de API y Seguridad de Agentforce — “Protección de variables de contexto en arquitecturas multi-agente”."
}, {
    "id": 59,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers desea probar agentes mientras preserva los datos reales y se aísla de producción. ¿Qué entorno debería utilizar la empresa con Testing Center?",
    "choices": ["Utilizar orgs de desarrollador personales no representativas de los datos de producción.", "Utilizar la org de producción directamente con aserciones de prueba.", "Utilizar entornos sandbox replicados de producción para pruebas seguras."],
    "correctAnswerText": "Utilizar entornos sandbox replicados de producción para pruebas seguras.",
    "explanation": "Para realizar pruebas seguras y aisladas sin poner en riesgo la integridad de la org de producción ni afectar los datos reales, la mejor práctica recomendada al utilizar Testing Center es emplear entornos Sandbox replicados a partir de producción (Full/Partial Sandboxes). Esto permite validar el rendimiento y comportamiento del agente frente a datos realistas en un ambiente controlado."
}, {
    "id": 60,
    "category": "Prompt Engineering",
    "question": "Universal Containers tiene un nuevo proyecto de IA. ¿Qué debe considerar un Agentforce al agregar una lista relacionada en el objeto Account para utilizarla en la plantilla de prompt?",
    "choices": ["Después de seleccionar una lista relacionada de Account, utilizar el selector de campos para elegir campos de combinación en Prompt Builder.", "Se debe utilizar Prompt Builder para asignar los campos de la lista relacionada en formato JSON.", "Los campos para la lista relacionada se basan en el diseño de página predeterminado de Account para el usuario actual."],
    "correctAnswerText": "Los campos para la lista relacionada se basan en el diseño de página predeterminado de Account para el usuario actual.",
    "explanation": "Al incluir listas relacionadas en una plantilla de prompt mediante el grounding de listas relacionadas en Prompt Builder, los campos que se extraen de los registros de la lista relacionada están determinados por las columnas configuradas en el formato/diseño de página (page layout) predeterminado del objeto principal para el usuario en ejecución."
}, {
    "id": 61,
    "category": "Multi-Agent Orchestration",
    "question": "¿Cuál es un beneficio clave del protocolo Agent-to-Agent (A2A)?",
    "choices": ["Proporciona un marco estandarizado para el descubrimiento y la comunicación de agentes entre diferentes proveedores (cross-vendor)", "Permite la incorporación automática de agentes de terceros sin contratos adicionales, puntuaciones de confianza o controles de identidad compartidos", "Proporciona un motor de ejecución estandarizado para el descubrimiento y la comunicación interna de agentes"],
    "correctAnswerText": "Proporciona un marco estandarizado para el descubrimiento y la comunicación de agentes entre diferentes proveedores (cross-vendor)",
    "explanation": "La descripción general del protocolo Agent-to-Agent (A2A) describe A2A como un marco estandarizado para el descubrimiento y la comunicación de agentes entre múltiples proveedores. La documentación especifica: “A2A permite la comunicación segura e interoperable entre agentes de IA a través de proveedores, plataformas y ecosistemas, utilizando API y esquemas estandarizados para el intercambio de mensajes y el descubrimiento de capacidades.” Esto permite que los agentes de Agentforce interactúen con sistemas de IA externos o agentes asociados manteniendo la gobernanza de datos y los controles de identidad. La opción B es incorrecta porque no se admite la incorporación automática sin contratos o verificación de confianza. La opción C confunde A2A con el motor de razonamiento interno utilizado por Agentforce; A2A opera entre sistemas, no dentro de una sola plataforma. Por lo tanto, la Opción A define correctamente el beneficio clave del protocolo Agent-to-Agent. Referencia: Guía de arquitectura de Agentforce: “Comprender el protocolo Agent-to-Agent (A2A)”."
}, {
    "id": 62,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está utilizando Einstein Generative AI para generar un resumen de cuenta. UC tiene como objetivo garantizar que el contenido sea seguro e inclusivo, utilizando la puntuación de toxicidad de la Einstein Trust Layer para evaluar el nivel de seguridad del contenido. En el sistema de puntuación de toxicidad de Einstein Generative AI, ¿qué indica una puntuación de categoría de toxicidad de 1?",
    "choices": ["La respuesta es la menos tóxica.", "La respuesta no es tóxica.", "La respuesta es la más tóxica."],
    "correctAnswerText": "La respuesta es la más tóxica.",
    "explanation": "La puntuación de toxicidad de la Einstein Trust Layer categoriza el contenido en una escala de 0 a 1, donde 1 indica el nivel más alto de toxicidad (por ejemplo, lenguaje dañino, sesgado o inapropiado). Esta puntuación ayuda a las organizaciones a filtrar el contenido no seguro generado por IA. Una puntuación de 1 desencadena acciones de mitigación, como bloquear la respuesta o alertar a los administradores. Una puntuación de 0 indicaría ausencia de toxicidad (B es incorrecto). Referencia: Artículo de ayuda de Salesforce: Einstein Trust Layer – Puntuación de toxicidad (\"Sección Interpretación de puntuaciones de toxicidad\")."
}, {
    "id": 63,
    "category": "AI Agents",
    "question": "Universal Containers desea asignar agentes para mejorar la eficiencia del departamento. ¿Qué configuración garantiza que las tareas correctas sean manejadas por los agentes correctos?",
    "choices": ["SDR Agent para calificación de clientes potenciales, Service Agent para tickets de soporte, Employee Agent para solicitudes de RR.HH.", "Sales Coach Agent para clientes potenciales y Service Agent para solicitudes de RR.HH., y tickets de soporte para garantizar que los casos estén disponibles", "Un solo Service Agent para manejar eficientemente cada uno de estos escenarios, lo que reduce la cantidad de tipos de agentes necesarios para el soporte"],
    "correctAnswerText": "SDR Agent para calificación de clientes potenciales, Service Agent para tickets de soporte, Employee Agent para solicitudes de RR.HH.",
    "explanation": "De acuerdo con la Guía de despliegue y descripción general de productos Agentforce, Salesforce recomienda utilizar agentes creados con propósitos específicos para maximizar la eficiencia en los departamentos. La documentación establece: “Cada tipo de agente de Agentforce está optimizado para una función específica: SDR Agent para desarrollo de ventas y nutrición de clientes potenciales, Service Agent para servicio al cliente y casos de soporte, y Employee Agent para tareas internas de RR.HH., TI y productividad.” Esta separación garantiza que cada equipo se beneficie de un agente de dominio específico equipado con el acceso a datos y las acciones correctas. La opción B asigna incorrectamente tipos de agente a casos de uso no coincidentes, y la opción C reduce la eficiencia y el control al usar un solo agente genérico para múltiples dominios, lo que va en contra del principio de diseño modular de IA de Salesforce. Por lo tanto, la Opción A se alinea mejor con la guía de Salesforce para el despliegue de Agentforce basado en roles."
}, {
    "id": 64,
    "category": "AI Agents",
    "question": "Universal Containers despliega un nuevo Agentforce Service Agent en el sitio web de la empresa, pero recibe comentarios de que el Agentforce Service Agent no proporciona respuestas a las preguntas de los clientes que se encuentran en los artículos de Salesforce Knowledge de la empresa. ¿Cuál es el problema probable?",
    "choices": ["Al usuario del Agentforce Service Agent no se le ha asignado la Agent Type License correcta.", "El usuario del Agentforce Service Agent debe crearse bajo el perfil estándar Agent Knowledge.", "Al usuario del Agentforce Service Agent no se le otorgó el conjunto de permisos Allow View Knowledge."],
    "correctAnswerText": "Al usuario del Agentforce Service Agent no se le otorgó el conjunto de permisos Allow View Knowledge.",
    "explanation": "Universal Containers (UC) ha desplegado un Agentforce Service Agent en su sitio web, pero no logra proporcionar respuestas de los artículos de Salesforce Knowledge. Analicemos el problema. Opción A: No existe una \"Agent Type License\" en Salesforce; la funcionalidad del agente está vinculada a licencias y permisos de Agentforce. Opción B: No existe un perfil estándar \"Agent Knowledge\". El Agentforce Service Agent se ejecuta bajo un usuario del sistema (por ejemplo, \"Agentforce Agent User\") con un perfil personalizado o conjuntos de permisos. Opción C: El usuario del Agentforce Service Agent requiere acceso de lectura a los artículos de Knowledge para fundamentar sus respuestas. El permiso \"Allow View Knowledge\" (normalmente a través de la licencia \"Salesforce Knowledge User\" o un conjunto de permisos como \"Agentforce Service Permissions\") habilita esto. Si falta, el agente no puede acceder a Knowledge, incluso si los artículos están indexados, lo que causa la falla reportada. Este es un descuido común en la configuración y el problema más probable, lo que la convierte en la respuesta correcta."
}, {
    "id": 65,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) ha configurado una Agentforce Data Library utilizando artículos de Knowledge. Al probar en Agent Builder y en el sitio de Experience Cloud, el agente no responde con información fundamentada en los artículos de Knowledge. Sin embargo, cuando se prueba en Prompt Builder, la respuesta se devuelve correctamente. ¿Qué debería hacer UC para solucionar el problema?",
    "choices": ["Crear un nuevo conjunto de permisos que asigne \"Manage Knowledge\" y asignarlo al Agentforce Service Agent User.", "Asegurarse de que el conjunto de permisos del usuario asignado incluya acceso a la plantilla de prompt utilizada para acceder a los artículos de Knowledge.", "Asegurarse de que el conjunto de permisos Data Cloud User haya sido asignado al Agentforce Service Agent User."],
    "correctAnswerText": "Asegurarse de que el conjunto de permisos Data Cloud User haya sido asignado al Agentforce Service Agent User.",
    "explanation": "UC configuró una Agentforce Data Library con artículos de Knowledge, y mientras que Prompt Builder recupera los datos correctamente, el agente no lo hace en Agent Builder y Experience Cloud. Opción A: El permiso \"Manage Knowledge\" es para autoría y gestión de artículos, no para leerlos o recuperarlos en el contexto de un agente. El Agentforce Service Agent User (un usuario del sistema) necesita acceso de lectura a Knowledge, no derechos de gestión. Opción B: Las plantillas de prompt no requieren permisos específicos más allá del acceso general a Einstein Generative AI. Dado que la prueba de Prompt Builder funciona, la plantilla es accesible para el usuario de prueba. El problema radica en el acceso en tiempo de ejecución del agente. Opción C: Cuando los artículos de Knowledge se fundamentan a través de una Agentforce Data Library, a menudo se ingieren en Data Cloud para indexación y recuperación. El Agentforce Service Agent User, que ejecuta el agente, necesita el conjunto de permisos \"Data Cloud User\" (o equivalente) para acceder a los recursos de Data Cloud, incluida la Data Library. Si falta este permiso, el agente no puede recuperar datos de los artículos de Knowledge durante el tiempo de ejecución (por ejemplo, en Agent Builder o Experience Cloud), a pesar de que Prompt Builder (ejecutado bajo un contexto de usuario diferente) tenga éxito. Asignar el conjunto de permisos \"Data Cloud User\" resuelve esto, según la documentación de Salesforce."
}, {
    "id": 66,
    "category": "AI Agents",
    "question": "Un administrador de Universal Containers está configurando Einstein Data Libraries. Después de crear una nueva biblioteca, el administrador nota que solo está disponible la opción de carga de archivos; no hay opción para configurar la biblioteca utilizando una base de conocimiento de Salesforce Knowledge. ¿Cuál es la causa más probable de este problema?",
    "choices": ["La org actual de Salesforce carece de los permisos necesarios de Einstein for Service que admiten la opción de Data Library basada en Knowledge, por lo que solo se presenta la opción de carga de archivos.", "Salesforce Knowledge no está habilitado en la organización; sin Salesforce Knowledge habilitado, la opción de fuente de datos basada en Knowledge no estará disponible en Einstein Data Libraries.", "El administrador no está utilizando Lightning Experience, el cual es necesario para mostrar todas las opciones de fuentes de datos, incluida la opción de base de conocimiento, al configurar Einstein Data Libraries."],
    "correctAnswerText": "Salesforce Knowledge no está habilitado en la organización; sin Salesforce Knowledge habilitado, la opción de fuente de datos basada en Knowledge no estará disponible en Einstein Data Libraries.",
    "explanation": "¿Por qué \"Salesforce Knowledge no está habilitado\" es la respuesta correcta? Si un administrador solo ve la opción de carga de archivos en Einstein Data Libraries y no puede configurar una base de conocimiento de Salesforce Knowledge, la razón más probable es que Salesforce Knowledge no esté habilitado en la organización. Consideraciones clave para Einstein Data Libraries: La integración de Salesforce Knowledge es opcional. Las Einstein Data Libraries pueden extraer datos de conocimiento solo si Salesforce Knowledge está habilitado. Si Knowledge no está activado, el sistema establecerá por defecto la carga de archivos como la única opción disponible. ¿Cómo solucionar este problema? El administrador debe habilitar Salesforce Knowledge en Setup → Settings de Knowledge. Una vez habilitado, la opción para configurar Data Libraries basadas en Knowledge estará disponible. ¿Por qué no las otras opciones? ❌ A. La org carece de permisos de Einstein for Service: Incorrecto porque incluso sin ciertos permisos, la opción de Knowledge seguiría siendo visible pero deshabilitada en gris. ❌ C. El administrador no está usando Lightning Experience: Incorrecto porque el uso de Lightning no controla directamente la visibilidad de la fuente de datos de Knowledge en la interfaz de configuración de Data Libraries. El material del especialista en IA de Salesforce confirma que Salesforce Knowledge debe estar habilitado para que las Data Libraries utilicen Knowledge como fuente de datos."
}, {
    "id": 67,
    "category": "Governance & Observability",
    "question": "¿Qué puede hacer un Agentforce cuando la configuración \"Enrich event logs with conversation data\" en Agent está habilitada?",
    "choices": ["Ver la ruta de clics del usuario que condujo a cada acción del copiloto.", "Ver los datos de la sesión, incluidas las entradas del usuario y las respuestas del copiloto para las sesiones durante los últimos 7 días.", "Generar informes detallados sobre todas las conversaciones del copiloto durante cualquier período de tiempo."],
    "correctAnswerText": "Ver los datos de la sesión, incluidas las entradas del usuario y las respuestas del copiloto para las sesiones durante los últimos 7 días.",
    "explanation": "Cuando la opción \"Enrich event logs with conversation data\" está habilitada en Agent, permite al especialista de Agentforce o al administrador ver los datos de la sesión, incluidas tanto las entradas del usuario como las respuestas del copiloto de las interacciones ocurridas en los últimos 7 días. Esta función enriquece los registros de eventos con datos conversacionales detallados para ofrecer una mejor visibilidad del historial de interacciones, lo que ayuda a rastrear el comportamiento de la IA y la participación del usuario. La opción A se enfoca en la navegación y no forma parte del enriquecimiento de datos conversacionales. La opción C es incorrecta porque esta función específica está limitada a los datos de los últimos 7 días."
}, {
    "id": 68,
    "category": "Prompt Engineering",
    "question": "Al configurar una plantilla de prompt, un Agentforce Specialist previsualiza los resultados de la plantilla de prompt que ha escrito. Ve dos salidas de texto distintas: Resolution y Response. ¿Qué información proporciona el texto de Resolution?",
    "choices": ["Muestra el texto completo que se envía a la Trust Layer.", "Muestra la respuesta del LLM basada en el registro de muestra.", "Muestra qué datos confidenciales se enmascaran antes de enviarse al LLM."],
    "correctAnswerText": "Muestra el texto completo que se envía a la Trust Layer.",
    "explanation": "En Salesforce Agentforce, al previsualizar una plantilla de prompt, la interfaz muestra dos salidas: Resolution y Response. El texto de Resolution se refiere específicamente al texto completo e integrado que se envía a la Trust Layer para su procesamiento, monitoreo y gobernanza (Opción A). Esto incluye el prompt construido (con datos de grounding, instrucciones y variables) tal como se envía al modelo de lenguaje de gran tamaño (LLM), junto con las intervenciones de la Trust Layer (como enmascaramiento o filtrado) aplicadas antes o después del procesamiento del LLM. Es una vista integral del flujo de entrada/salida que la Trust Layer captura para fines de auditoría y cumplimiento. La opción B describe el texto de \"Response\", que muestra la respuesta generada por el LLM basada en el registro de muestra. La opción C es incorrecta porque Resolution no aísla únicamente los datos enmascarados, sino que muestra todo el texto enviado a la Trust Layer."
}, {
    "id": 69,
    "category": "AI Agents",
    "question": "¿Cuál es la importancia de las Action Instructions al crear una Agent action personalizada?",
    "choices": ["Las Action Instructions definen la experiencia de usuario esperada de una acción.", "Las Action Instructions le dicen al usuario cómo llamar a esta acción en una conversación.", "Las Action Instructions le dicen al modelo de lenguaje de gran tamaño (LLM) qué acción utilizar."],
    "correctAnswerText": "Las Action Instructions definen la experiencia de usuario esperada de una acción.",
    "explanation": "En Salesforce Agentforce, las Agent actions personalizadas están diseñadas para permitir que los agentes impulsados por IA realicen tareas específicas dentro de un contexto conversacional. Las Action Instructions son un componente crítico al crear estas acciones porque definen la experiencia de usuario esperada al esbozar cómo debe comportarse la acción, qué debe lograr y cómo interactúa con el usuario final. Estas instrucciones actúan como un plano para la funcionalidad de la acción, garantizando que se alinee con el resultado previsto y proporcione una experiencia consistente e intuitiva para los usuarios que interactúan con el agente."
}, {
    "id": 70,
    "category": "Prompt Engineering",
    "question": "Un administrador desea verificar la respuesta de la plantilla de prompt Flex que ha creado, pero el botón de vista previa (preview) está deshabilitado en gris. ¿Cuál es la razón de esto?",
    "choices": ["Los registros relacionados con el prompt no se han seleccionado.", "El prompt no se ha guardado ni activado.", "No se ha insertado un campo de combinación (merge field) en el prompt."],
    "correctAnswerText": "Los registros relacionados con el prompt no se han seleccionado.",
    "explanation": "Cuando el botón de vista previa está deshabilitado en gris en una plantilla de prompt Flex, a menudo se debe a que no se han seleccionado los registros relacionados con el prompt. Las plantillas de prompt Flex extraen datos dinámicamente de los registros de Salesforce, y si no hay registros especificados para la vista previa del prompt, no se puede generar el contenido necesario para habilitar la vista previa. La opción B no deshabilita necesariamente el botón de vista previa. La opción C causaría problemas en la salida, pero no deshabilitaría directamente el botón de vista previa."
}, {
    "id": 71,
    "category": "AI Agents",
    "question": "Un gerente de servicio desea utilizar Salesforce Prompt Builder para ayudar a los agentes a resumir las notas de casos de los clientes después de una llamada de soporte. El resumen debe: \\* Capturar el problema del cliente, los pasos de solución de problemas tomados y las acciones siguientes. \\* No tener más de cinco oraciones. \\* Utilizar un lenguaje sencillo (sin jerga técnica). Si no se identifica ninguna acción siguiente, el resumen debe indicar explícitamente \"No next action required.\" ¿Qué plantilla de prompt sigue las mejores prácticas de diseño de prompts de Salesforce?",
    "choices": ["Role: You are an experienced support agent. Task: Summarize the case notes. Context: Include customer issue, troubleshooting steps, and next actions. Constraints: Limit to 5 sentences, use plain language, and if no next action is found, state \"No next action required.\" Format: Use numbered sentences for clarity.", "Role: You are a support agent writing a case summary. Task: Provide a professional summary of the issue and troubleshooting steps. Contest: Include customer issue, steps taken, and next actions if available. Constraints: No strict sentence limit, but use plain language. If no next action is found, leave it out. Format: Use paragraphs for readability.", "Role: You are a case documentation assistant. Task: Write a summary of the support call. Context: Always describe the customer issue, troubleshooting, and resolution details. Constraints: The summary should be comprehensive and professional, but there is no limit on length or language style. Format: Use complete sentences in a narrative style."],
    "correctAnswerText": "Role: You are an experienced support agent. Task: Summarize the case notes. Context: Include customer issue, troubleshooting steps, and next actions. Constraints: Limit to 5 sentences, use plain language, and if no next action is found, state \"No next action required.\" Format: Use numbered sentences for clarity.",
    "explanation": "De acuerdo con la Guía de mejores prácticas de Salesforce Prompt Builder, un prompt efectivo debe incluir Rol, Tarea, Contexto, Restricciones y Formato claramente definidos, una estructura conocida como el modelo RTCCF. La documentación explica: \"Los prompts deben especificar el rol del asistente, definir una tarea clara, incluir contexto y restricciones, y proporcionar instrucciones de formato de salida para garantizar respuestas predecibles y de alta calidad.\" La Opción A sigue este marco con precisión al definir: Rol (experienced support agent), Tarea (Summarize the case notes), Contexto (customer issue, troubleshooting steps, next actions), Restricciones (Limit to 5 sentences, use plain language, y señalar \"No next action required\") y Formato (Use numbered sentences for clarity). Las opciones B y C omiten elementos críticos del diseño de prompts como restricciones estrictas o formato de salida."
}, {
    "id": 72,
    "category": "Prompt Engineering",
    "question": "Un administrador es responsable de garantizar la seguridad y confiabilidad de los datos de CRM de Universal Containers (UC). UC necesita una protección de datos mejorada y capacidades de IA actualizadas. UC también necesita incluir información relevante de un registro de Salesforce para combinarla con el prompt. ¿Qué función de la Einstein Trust Layer respalda mejor la necesidad de UC?",
    "choices": ["Data masking", "Dynamic grounding con recuperación segura de datos", "Política de retención de datos cero (Zero-data retention)"],
    "correctAnswerText": "Dynamic grounding con recuperación segura de datos",
    "explanation": "El grounding dinámico con recuperación segura de datos (Dynamic grounding with secure data retrieval) es una función clave en la Einstein Trust Layer de Salesforce, que proporciona una protección de datos mejorada y garantiza que las salidas generadas por IA sean precisas y provengan de fuentes seguras. Esta función permite combinar datos relevantes de Salesforce dentro de las respuestas generadas por IA, asegurando que los resultados sean conscientes del contexto y estén alineados con los datos de CRM en tiempo real. La opción de Data masking se refiere a ocultar datos confidenciales para privacidad. La política de retención de datos cero garantiza que los procesos de IA no almacenen datos del usuario tras el procesamiento, pero no aborda la necesidad de combinar la información de los registros de Salesforce dentro de un prompt."
}, {
    "id": 73,
    "category": "Data 360 Fundamentals",
    "question": "En una configuración de Data Library basada en Knowledge, ¿cuál es la diferencia principal entre los campos de identificación (identifying fields) y los campos de contenido (content fields)?",
    "choices": ["Los campos de identificación ayudan a localizar el artículo de Knowledge correcto, mientras que los campos de contenido enriquecen las respuestas de la IA con información detallada.", "Los campos de identificación categorizan los artículos para fines de indexación, mientras que los campos de contenido proporcionan un resumen breve para su visualización.", "Los campos de identificación destacan términos clave para la puntuación de relevancia, mientras que los campos de contenido almacenan el texto completo del artículo para su recuperación."],
    "correctAnswerText": "Los campos de identificación ayudan a localizar el artículo de Knowledge correcto, mientras que los campos de contenido enriquecen las respuestas de la IA con información detallada.",
    "explanation": "En Agentforce, una Data Library basada en Knowledge utiliza campos de identificación y campos de contenido para respaldar las respuestas de la IA. Analicemos sus funciones. Opción A: En una Data Library basada en Knowledge, los campos de identificación (por ejemplo, Título, Número de artículo o metadatos personalizados) se utilizan para buscar y señalar el artículo de Knowledge relevante en función de la entrada del usuario o del contexto. Los campos de contenido (por ejemplo, Cuerpo del artículo, Detalles) proporcionan los datos sustantivos que la IA utiliza para generar respuestas detalladas y enriquecidas. Esta distinción es crítica para el grounding de los prompts de Agentforce y se alinea con la documentación de Salesforce sobre la integración de Knowledge, lo que la convierte en la respuesta correcta. Opción B: Los campos de identificación hacen más que categorizar: localizan activamente los artículos, no solo los indexan. Opción C: Si bien los campos de identificación contribuyen a la relevancia, su función principal es localizar artículos. Los campos de contenido almacenan el texto completo, pero su propósito es enriquecer las respuestas."
}, {
    "id": 74,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está configurando un nuevo Agentforce Service Agent. La empresa tiene investigaciones confidenciales sobre productos médicos almacenadas internamente y desea asegurarse de que el agente no pueda acceder a ellas. ¿Qué debería hacer UC?",
    "choices": ["Asignar al usuario del Agentforce Service Agent el rol más bajo posible en la jerarquía de la organización para bloquear el acceso.", "Deshabilitar la capacidad del Agentforce Service Agent para utilizar cualquier objeto personalizado o campo relacionado de Salesforce.", "Seguir el principio de privilegio mínimo y evitar otorgar permisos para ver el objeto Medical Product o registros relacionados."],
    "correctAnswerText": "Seguir el principio de privilegio mínimo y evitar otorgar permisos para ver el objeto Medical Product o registros relacionados.",
    "explanation": "La Guía de mejores prácticas de seguridad y control de acceso de Agentforce enfatiza el principio de privilegio mínimo, lo que significa otorgar a cada agente solo los permisos estrictamente necesarios para realizar sus tareas definidas. Para evitar el acceso no autorizado a datos confidenciales como investigaciones médicas, los administradores deben excluir los permisos para el objeto Medical Product y los registros relacionados del grupo de conjuntos de permisos del Agentforce Service Agent. La opción A es parcialmente efectiva pero no suficiente, ya que la jerarquía de roles de Salesforce no restringe completamente el acceso a los registros. La opción B es excesivamente restrictiva e impediría operaciones legítimas que involucren otros objetos personalizados. Por lo tanto, la respuesta correcta es la Opción C."
}, {
    "id": 75,
    "category": "AI Agents",
    "question": "En Model Playground, ¿qué hiperparámetros de un modelo fundacional existente habilitado en Salesforce puede cambiar un Agentforce?",
    "choices": ["Temperature, Frequency Penalty, Presence Penalty", "Temperature, Top-k sampling, Presence Penalty", "Temperature, Frequency Penalty, Output Tokens"],
    "correctAnswerText": "Temperature, Frequency Penalty, Presence Penalty",
    "explanation": "En Model Playground, un especialista que trabaja con un modelo fundacional habilitado para Salesforce tiene control sobre hiperparámetros específicos que pueden afectar directamente el comportamiento del modelo generativo: Temperature: Controla la aleatoriedad de las predicciones. Una temperatura más alta produce resultados más diversos, mientras que una más baja hace que las respuestas sean más enfocadas y deterministas. Frequency Penalty: Reduce la probabilidad de que el modelo repita las mismas frases o salidas con frecuencia. Presence Penalty: Anima al modelo a introducir nuevos temas en sus respuestas, en lugar de apegarse a contenido familiar mencionado anteriormente. La documentación de Salesforce confirma que estos tres son los hiperparámetros ajustables clave en el Model Playground."
}, {
    "id": 76,
    "category": "AI Agents",
    "question": "¿A dónde debe ir el Agentforce Specialist para agregar o actualizar las acciones asignadas a un copiloto?",
    "choices": ["Página Copilot Actions, la página de registro de la acción del copiloto, o la pestaña Copilot Action Library", "Página Copilot Actions o Global Actions", "Página de detalles de Copilot, Global Actions, o la página de registro de la acción del copiloto"],
    "correctAnswerText": "Página Copilot Actions, la página de registro de la acción del copiloto, o la pestaña Copilot Action Library",
    "explanation": "Para agregar o actualizar las acciones asignadas a un copiloto, un especialista puede gestionar esto a través de varias áreas: Página Copilot Actions (ubicación central donde se gestionan y configuran las acciones), la página de registro de la acción del copiloto (donde se pueden modificar las acciones individuales) y la pestaña Copilot Action Library (que sirve como repositorio para acceder y modificar acciones predefinidas o personalizadas). Las otras opciones omiten la pestaña Copilot Action Library o incluyen páginas que no son las primarias para la gestión de acciones."
}, {
    "id": 77,
    "category": "Data 360 Fundamentals",
    "question": "¿Cómo funciona el AI Retriever dentro de Data Cloud?",
    "choices": ["Realiza búsquedas contextuales sobre un repositorio indexado para obtener rápidamente los documentos más relevantes, lo que permite fundamentar las respuestas de la IA con información confiable y verificable.", "Supervisa y agrega métricas de calidad de datos a través de varios canales de datos para garantizar que solo se utilicen datos de alta integridad para la toma de decisiones estratégicas.", "Extrae y reformatea automáticamente datos sin procesar de diversas fuentes en conjuntos de datos estandarizados para su uso en análisis de tendencias históricas y pronósticos."],
    "correctAnswerText": "Realiza búsquedas contextuales sobre un repositorio indexado para obtener rápidamente los documentos más relevantes, lo que permite fundamentar las respuestas de la IA con información confiable y verificable.",
    "explanation": "El AI Retriever en Data Cloud utiliza tecnología de búsqueda basada en vectores para consultar un repositorio indexado (por ejemplo, documentos, registros o datos ingeridos) y recuperar los resultados más relevantes basados en el contexto. Emplea incrustaciones (embeddings) para coincidir las consultas de los usuarios o prompts con los datos almacenados, garantizando que las respuestas de IA (por ejemplo, en las plantillas de prompt de Agentforce) estén fundamentadas en información precisa y verificable proveniente de Data Cloud. Las opciones B y C describen funciones de supervisión de calidad de datos o extracción e ingesta de datos, que son manejadas por otras herramientas de Data Cloud."
}, {
    "id": 78,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Después de una implementación exitosa de Agentforce Sales Agent con usuarios de ventas, Universal Containers ahora busca desplegarlo para el equipo de servicio. ¿Qué consideración clave debe tener en cuenta el Agentforce Specialist para este despliegue?",
    "choices": ["Asignar el permiso Agentforce for Service a los usuarios de Service Cloud.", "Asignar las acciones de servicio estándar a Agentforce Service Agent.", "Revisar y probar los temas (topics) y acciones estándar y personalizados del agente para los casos de uso del Service Center."],
    "correctAnswerText": "Revisar y probar los temas (topics) y acciones estándar y personalizados del agente para los casos de uso del Service Center.",
    "explanation": "Al desplegar un agente de IA desde Sales Cloud hacia Service Cloud, los temas y acciones del agente son específicos del contexto. Los casos de uso de Service Cloud (como la resolución de casos y la recuperación de conocimientos) requieren la validación de los temas y acciones existentes para garantizar que estén alineados con los flujos de trabajo de servicio. La opción A describe permisos necesarios pero secundarios a la compatibilidad funcional. La opción B señala acciones estándar, pero la revisión y prueba garantizan que funcionen según lo previsto."
}, {
    "id": 79,
    "category": "AI Agents",
    "question": "Universal Containers despliega un nuevo Agentforce Service Agent en el sitio web de la empresa, pero recibe comentarios de que el Service Agent no proporciona respuestas a las preguntas de los clientes que se encuentran en los artículos de Salesforce Knowledge de la empresa. ¿Cuál es el problema probable?",
    "choices": ["Al usuario del Agentforce Service Agent no se le otorgó el conjunto de permisos Allow View Knowledge.", "Al usuario del Agentforce Service Agent no se le ha asignado la Agent Type License correcta.", "El usuario del Agentforce Service Agent debe crearse bajo el perfil estándar Agent Knowledge."],
    "correctAnswerText": "Al usuario del Agentforce Service Agent no se le otorgó el conjunto de permisos Allow View Knowledge.",
    "explanation": "De acuerdo con la Guía de integración de Knowledge y configuración de acceso de Agentforce, un Service Agent recupera y fundamenta sus respuestas utilizando datos de Salesforce Knowledge cuando se asignan los permisos correctos. Si los clientes informan que el agente no puede acceder ni proporcionar respuestas desde los artículos de Knowledge, la causa raíz más común es que el usuario del Agentforce Service Agent carece del permiso “Allow View Knowledge”. Este permiso permite al agente recuperar y leer artículos publicados desde Salesforce Knowledge para fundamentar las respuestas. Sin él, el agente no puede acceder al repositorio de contenido, resultando en respuestas incompletas o genéricas."
}, {
    "id": 80,
    "category": "Multi-Agent Orchestration",
    "question": "Universal Containers (UC) está escalando su despliegue de Agentforce y necesita conectar de forma segura sus agentes de IA a un número creciente de sistemas de datos empresariales externos y entornos de desarrollo locales. En lugar de construir una lógica de integración personalizada y Application Programming Interfaces (APIs) a medida para cada nueva fuente de datos, el Agentforce Specialist recomienda aprovechar el Model Context Protocol (MCP). ¿Cuál es el propósito principal de utilizar un estándar abierto como MCP en este escenario?",
    "choices": ["Estandarizar la conexión segura y la entrega de contexto entre los modelos de IA y varias fuentes de datos locales o remotas.", "Reemplazar la necesidad de Retrieval-Augmented Generation (RAG) almacenando todos los datos externos de forma nativa dentro de los pesos del modelo de lenguaje de gran tamaño (LLM).", "Permitir que el agente negocie de forma autónoma la delegación de tareas con agentes de la cadena de suministro de terceros."],
    "correctAnswerText": "Estandarizar la conexión segura y la entrega de contexto entre los modelos de IA y varias fuentes de datos locales o remotas.",
    "explanation": "La respuesta correcta es A. MCP es un estándar abierto para conectar aplicaciones de IA y agentes a herramientas externas, servicios y fuentes de datos a través de un protocolo común. Esto coincide directamente con la necesidad de UC de evitar la construcción de integraciones personalizadas separadas para cada sistema empresarial o entorno de desarrollo local. La opción B es incorrecta porque MCP no reemplaza RAG ni almacena datos externos dentro de los pesos del modelo. La opción C describe la delegación entre agentes estilo Agent-to-Agent (A2A) más que MCP."
}, {
    "id": 81,
    "category": "Prompt Engineering",
    "question": "Universal Containers construyó una plantilla de prompt Field Generation que funcionó para muchos registros, pero los usuarios están informando fallos aleatorios con errores de límite de tokens. ¿Cuál es la causa de la naturaleza aleatoria de este error?",
    "choices": ["El tipo de plantilla debe cambiarse a Flex para dar espacio a la cantidad variable de tokens generados por el grounding del prompt.", "La cantidad de tokens generados por la naturaleza dinámica de la plantilla de prompt variará según el registro.", "La cantidad de tokens que puede procesar el LLM varía según la demanda total de los usuarios."],
    "correctAnswerText": "La cantidad de tokens generados por la naturaleza dinámica de la plantilla de prompt variará según el registro.",
    "explanation": "En Salesforce Agentforce, las plantillas de prompt se utilizan para generar respuestas dinámicas o valores de campo aprovechando un LLM, a menudo con datos de grounding de registros de Salesforce. Las fallas intermitentes con errores de límite de tokens indican que se supera la capacidad del LLM. Dado que las plantillas de prompt son dinámicas y extraen datos específicos del registro (como descripciones largas o campos de texto variables), la cantidad total de tokens varía según el registro evaluado. Cuando el número de tokens combinados supera el límite del modelo en un registro con mucho contenido, la solicitud falla, lo que explica la naturaleza aleatoria del error según el registro procesado."
}, {
    "id": 82,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Un administrador en Universal Containers ha desplegado con éxito un nuevo agente desde un sandbox a producción utilizando un Change Set. El agente utiliza una plantilla de prompt que invoca un Flow de Salesforce para realizar un cálculo complejo. En producción, cuando los usuarios interactúan con el agente, este falla con un mensaje de error cada vez que se supone que debe ejecutarse el Flow. El Flow se incluyó en el Change Set y está presente en producción. ¿Cuál es la causa más probable de este problema?",
    "choices": ["El Flow no se activó manualmente en la org de producción después del despliegue.", "El usuario en producción no tiene permiso para ejecutar el Flow.", "El Change Set no incluyó las clases Apex dependientes para el Flow."],
    "correctAnswerText": "El Flow no se activó manualmente en la org de producción después del despliegue.",
    "explanation": "Al desplegar Flows entre entornos de Salesforce (por ejemplo, de sandbox a producción) mediante Change Sets, los Flows se transfieren en estado Inactivo por defecto por razones de seguridad. Aunque el Flow esté presente en la org de destino, debe ser activado manualmente por un administrador para que pueda ser invocado por el agente u otros procesos."
}, {
    "id": 83,
    "category": "Multi-Agent Orchestration",
    "question": "Cloud Kicks utiliza un agente de terceros para investigación y un agente de Agentforce para servicio al cliente. ¿Qué protocolo diseñado para tal propósito permite que agentes de diferentes proveedores se comuniquen?",
    "choices": ["Model Context Protocol (MCP)", "Application Programming Interface (API)", "Agent-to-Agent (A2A)"],
    "correctAnswerText": "Agent-to-Agent (A2A)",
    "explanation": "La respuesta correcta es C porque Agent-to-Agent, o A2A, es el protocolo diseñado específicamente para la comunicación y colaboración entre agentes de IA de diferentes proveedores y plataformas. MCP se utiliza principalmente para conectar agentes con herramientas y contexto externo. Una API genérica puede integrar sistemas, pero no es el protocolo de interoperabilidad de agentes específico que se evalúa aquí."
}, {
    "id": 84,
    "category": "Data 360 Fundamentals",
    "question": "Un Agentforce está configurando una nueva org y necesita asegurarse de que los usuarios puedan crear y ejecutar plantillas de prompt. El Agentforce Specialist no está seguro de qué roles son necesarios para estas tareas. ¿Qué conjuntos de permisos (permission sets) debería asignar el Agentforce Specialist a los usuarios que necesitan crear y ejecutar plantillas de prompt?",
    "choices": ["Prompt Template Manager para crear plantillas y Data Cloud Admin para ejecutar plantillas", "Prompt Template Manager para crear plantillas y Prompt Template User para ejecutar plantillas", "Data Cloud Admin para crear plantillas y Prompt Template User para ejecutar plantillas"],
    "correctAnswerText": "Prompt Template Manager para crear plantillas y Prompt Template User para ejecutar plantillas",
    "explanation": "Para gestionar y utilizar eficazmente las plantillas de prompt, se requieren dos conjuntos de permisos distintos: Prompt Template Manager permite a los usuarios crear, definir y configurar plantillas de prompt. Prompt Template User está diseñado para los usuarios que necesitan ejecutar o interactuar con las plantillas predefinidas para obtener resultados. El conjunto de permisos Data Cloud Admin no está directamente relacionado con la creación o ejecución de plantillas de prompt, sino con la administración de Data Cloud."
}, {
    "id": 85,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está rastreando actividades web en Data Cloud para un contacto unificado, y desea utilizar eso en una plantilla de prompt para ayudar a extraer información de los datos. Asumiendo que el objeto Contact es uno de los objetos asociados con la plantilla de prompt, ¿cuál es una forma válida para que UC haga esto?",
    "choices": ["Llamar al prompt directamente desde Data Cloud con una actividad de rastreo web incluida en la definición del prompt.", "Agregar los registros de actividad como una lista relacionada de enriquecimiento al Contact y luego pasar el Contact a un espacio de trabajo de plantilla de prompt utilizando grounding de lista relacionada.", "Crear una plantilla de prompt que tome una lista de todos los registros de actividad de Data Cloud como entrada para pasar al modelo de lenguaje de gran tamaño (LLM)."],
    "correctAnswerText": "Agregar los registros de actividad como una lista relacionada de enriquecimiento al Contact y luego pasar el Contact a un espacio de trabajo de plantilla de prompt utilizando grounding de lista relacionada.",
    "explanation": "Para integrar datos de actividad web desde Data Cloud en una plantilla de prompt, el enfoque correcto es enriquecer el objeto Contact con los registros de actividad como una lista relacionada y utilizar el grounding de listas relacionadas (Opción B). Data Cloud unifica los datos de actividad web y los asocia con el registro del Contacto unificado. Al agregarlos como una lista relacionada, los datos se vuelven accesibles para la plantilla de prompt mediante el mecanismo de grounding estándar de Salesforce sobre listas relacionadas."
}, {
    "id": 86,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está construyendo una plantilla de prompt Flex. UC necesita utilizar datos devueltos por un Flow en la plantilla de prompt. ¿Qué elemento de Flow debería utilizar UC?",
    "choices": ["Add Flex Instructions", "Add Prompt Instructions", "Add Flow Instructions"],
    "correctAnswerText": "Add Prompt Instructions",
    "explanation": "En un Flow desencadenado por plantilla de prompt (template-triggered prompt flow), el elemento de núcleo de Flow específico utilizado para pasar texto, datos recopilados o fragmentos procesados al espacio de trabajo del prompt es \"Add Prompt Instructions\"."
}, {
    "id": 87,
    "category": "Prompt Engineering",
    "question": "El Agentforce Specialist de Northern Trail Outfitters revisó las configuraciones de enmascaramiento de datos de la organización dentro del menú Configure Data Masking en Setup. Al evaluar todos los campos, se consideró que algunos campos adicionales eran confidenciales y se han enmascarado dentro de la Trust Layer de Einstein. ¿Qué pasos debería tomar el Agentforce Specialist tras modificar los campos enmascarados?",
    "choices": ["Desactivar la Einstein Trust Layer y volver a activarla.", "Probar y confirmar que las respuestas generadas a partir de prompts que utilizan los datos y los datos enmascarados no afecten negativamente la calidad de la respuesta generada.", "Activar Einstein Feedback para que los usuarios finales puedan informar si hay efectos secundarios negativos en las funciones de IA."],
    "correctAnswerText": "Probar y confirmar que las respuestas generadas a partir de prompts que utilizan los datos y los datos enmascarados no afecten negativamente la calidad de la respuesta generada.",
    "explanation": "Después de modificar los campos enmascarados en la Einstein Trust Layer, el siguiente paso crítico es probar y confirmar que las respuestas generadas por los prompts que utilizan los datos recién enmascarados sigan cumpliendo con los estándares de calidad. Esto garantiza que el enmascaramiento de información confidencial no afecte negativamente la utilidad, el contexto o la precisión del contenido generado por la IA."
}, {
    "id": 88,
    "category": "Prompt Engineering",
    "question": "Un Salesforce Agentforce Specialist está revisando los comentarios de un cliente sobre la ineficacia de la plantilla de prompt. ¿Qué debería hacer el Agentforce Specialist para garantizar la eficacia de la plantilla de prompt?",
    "choices": ["Monitorear y refinar la plantilla basándose en los comentarios de los usuarios.", "Utilizar la Prompt Builder Scorecard para ayudar a monitorear.", "Cambiar periódicamente el objeto de grounding de la plantilla."],
    "correctAnswerText": "Utilizar la Prompt Builder Scorecard para ayudar a monitorear.",
    "explanation": "Para abordar la ineficacia de una plantilla de prompt, el especialista debe utilizar la Prompt Builder Scorecard (Opción B). Esta herramienta está diseñada explícitamente para evaluar y monitorear plantillas de prompt frente a criterios clave como relevancia, precisión, seguridad y grounding, lo que permite identificar debilidades de manera sistemática y realizar refinamientos basados en datos."
}, {
    "id": 89,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers desea que su agente de IA responda a las preguntas de los clientes con información precisa y actualizada. ¿Cómo simplifica y permite esto una Agentforce Data Library?",
    "choices": ["Automatiza la ingesta, la clasificación taxonómica y el almacenamiento del conocimiento en Data Cloud para la recuperación por búsqueda de palabras clave de precisión para fundamentar prompts y agentes con información relevante.", "Automatiza la ingesta, la indexación de datos y crea un recuperador predeterminado que se utilizará en prompts y agentes para el grounding con información relevante.", "Automatiza la ingesta y el procesamiento por reconocimiento óptico de caracteres (OCR) de cualquier PDF, e indexa los mismos para permitir la recuperación por consulta SQL regular para fundamentar prompts y agentes con información relevante."],
    "correctAnswerText": "Automatiza la ingesta, la indexación de datos y crea un recuperador predeterminado que se utilizará en prompts y agentes para el grounding con información relevante.",
    "explanation": "¿Por qué \"Automatiza la ingesta, la indexación y la creación del recuperador predeterminado\" es la respuesta correcta? Una Agentforce Data Library es un componente clave para garantizar que un agente de IA proporcione respuestas precisas y actualizadas mediante: 1. Automatización de la ingesta de datos (trae datos de varias fuentes). 2. Indexación de los datos (los organiza eficientemente para la recuperación por IA). 3. Creación de un recuperador predeterminado (permite a la IA extraer datos relevantes dinámicamente). La opción A es incorrecta porque Agentforce no se basa en búsquedas simples por palabras clave sino en indexación y recuperación impulsada por IA. La opción C es incorrecta porque el procesamiento OCR no es la función principal de una Agentforce Data Library."
}, {
    "id": 90,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Un Agentforce ha creado una acción personalizada de copiloto utilizando Flow como el tipo de acción de referencia. Sin embargo, no está entregando los resultados esperados a la vista previa de la conversación y, por lo tanto, necesita solución de problemas. ¿Qué debería hacer el Agentforce Specialist para identificar la causa raíz del problema?",
    "choices": ["En Copilot Builder dentro del Panel Dinámico, activar la depuración dinámica para mostrar las entradas y salidas.", "En Copilot Builder dentro del Panel Dinámico, confirmar la acción seleccionada y observar los valores en las secciones Input y Output.", "En Copilot Builder, verificar la expresión (utterance) ingresada por el usuario y revisar los registros de eventos de la sesión para obtener información de depuración."],
    "correctAnswerText": "En Copilot Builder dentro del Panel Dinámico, confirmar la acción seleccionada y observar los valores en las secciones Input y Output.",
    "explanation": "Para solucionar problemas en el comportamiento de una acción personalizada basada en Flow dentro de Copilot Builder, la inspección directa de los parámetros pasados y devueltos se realiza seleccionando la acción ejecutada en el Panel Dinámico y observando los valores reflejados en las secciones de Input y Output."
}, {
    "id": 91,
    "category": "AI Agents",
    "question": "Después de crear un modelo fundacional en Einstein Studio, ¿qué hiperparámetro debería utilizar un Agentforce para ajustar el equilibrio entre la consistencia y la aleatoriedad de una respuesta?",
    "choices": ["Presence Penalty", "Variability", "Temperature"],
    "correctAnswerText": "Temperature",
    "explanation": "El hiperparámetro Temperature controla la aleatoriedad de las salidas del modelo: una temperatura baja (por ejemplo, 0.2) produce respuestas más deterministas y consistentes, mientras que una temperatura alta (por ejemplo, 1.0) genera respuestas más creativas y variadas."
}, {
    "id": 92,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Coral Cloud Resorts desea visibilidad sobre el uso de créditos asociado a las pruebas. ¿Qué función respalda esto?",
    "choices": ["Agentforce Analytics", "Digital Wallet", "Testing Center"],
    "correctAnswerText": "Digital Wallet",
    "explanation": "Digital Wallet es la herramienta de Salesforce que proporciona visibilidad centralizada sobre el consumo de recursos, uso de créditos y consumo de capacidades de IA / consumo de solicitudes en las diferentes herramientas del entorno, incluidas las pruebas."
}, {
    "id": 93,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea crear una plantilla de prompt que extraiga constantemente el número de modelo de producto específico y la cantidad de un cliente a partir de una consulta por correo electrónico para redactar una respuesta al cliente. ¿Qué mejor práctica debería implementar UC para lograr este objetivo?",
    "choices": ["Incorporar preguntas abiertas para fomentar respuestas detalladas", "Proporcionar instrucciones claras y positivas y utilizar ejemplos de pocos intentos (few-shot examples)", "Utilizar una configuración de temperatura alta para aumentar la producción creativa"],
    "correctAnswerText": "Proporcionar instrucciones claras y positivas y utilizar ejemplos de pocos intentos (few-shot examples)",
    "explanation": "La respuesta correcta es B porque el requisito es una extracción estructurada, no una generación creativa. Para extraer de manera confiable un número de modelo y una cantidad, el prompt debe dar instrucciones claras que describan exactamente qué identificar, cómo formatear los valores extraídos y cómo comportarse cuando falta información. Los ejemplos few-shot mejoran la consistencia al mostrar al modelo patrones representativos de entrada y salida. La opción A es incorrecta porque las preguntas abiertas aumentan la variabilidad. La opción C es incorrecta porque una temperatura más alta aumenta la creatividad y la aleatoriedad, lo opuesto a lo que se necesita."
}, {
    "id": 94,
    "category": "AI Agents",
    "question": "Universal Containers, al lidiar con un alto volumen de consultas por chat, implementa Einstein Work Summaries para impulsar la productividad. Después de una conversación entre agente y cliente, ¿qué información adicional genera y completa Einstein, aparte del \"summary\"?",
    "choices": ["Sentiment Analysis y Emotion Detection", "Draft Survey Request Email", "Issue y Resolution"],
    "correctAnswerText": "Issue y Resolution",
    "explanation": "Einstein Work Summaries genera automáticamente resúmenes concisos de las interacciones con los clientes. Más allá del campo \"summary\", extrae y completa automáticamente los campos de Issue (problema principal discutido) y Resolution (acción tomada para resolver el problema). Estos campos ayudan a los agentes y supervisores a comprender rápidamente el contexto de la conversación sin revisar toda la transcripción."
}, {
    "id": 95,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) planea responder preguntas basándose en casos similares que se hayan resuelto con éxito en el pasado. ¿Qué debería considerar UC al implementar este enfoque?",
    "choices": ["No se necesita ninguna acción, ya que los casos pasados se utilizan para responder la pregunta.", "Crear un Data Model Object (DMO) basado en el objeto Case y crear un índice sobre él.", "Crear un Unstructured Data Model Object (UDMO) basado en el objeto Case y crear un índice sobre él."],
    "correctAnswerText": "Crear un Unstructured Data Model Object (UDMO) basado en el objeto Case y crear un índice sobre él.",
    "explanation": "De acuerdo con la Guía de recuperación y configuración de datos de Agentforce, cuando una organización desea habilitar a su agente de IA para responder preguntas utilizando datos históricos de casos, la implementación correcta es crear un Unstructured Data Model Object (UDMO) basado en el objeto Case, y luego indexar esos datos para su recuperación. Los UDMO permiten al sistema procesar e indexar semánticamente campos de texto no estructurados como Case Description, Resolution y Comments, permitiendo al LLM mostrar casos resueltos contextualmente similares. La opción B es incorrecta porque un DMO tradicional es para datos estructurados (tablas, campos numéricos) y no admite la búsqueda semántica de texto."
}, {
    "id": 96,
    "category": "Data 360 Fundamentals",
    "question": "Durante las pruebas de calidad de Retrieval-Augmented Generation (RAG), un Agentforce Specialist nota que la información tabular de un canal de ingesta de documentos personalizado de Data 360 está perdiendo su contexto porque los datos están dispersos en múltiples fragmentos (chunks) separados. ¿Cuál es el enfoque más adecuado para resolver esto?",
    "choices": ["Cambiar el analizador (parser) del índice de búsqueda de la opción predeterminada a Docling.", "Utilizar un recuperador de ensamblado (ensemble retriever) para volver a unir múltiples fragmentos dinámicamente.", "Cambiar la configuración del índice de búsqueda para utilizar únicamente la puntuación de búsqueda por palabras clave."],
    "correctAnswerText": "Cambiar el analizador (parser) del índice de búsqueda de la opción predeterminada a Docling.",
    "explanation": "La respuesta correcta es A. El problema no es que el recuperador carezca de fuentes, sino que el analizador de documentos está rompiendo el contenido tabular estructurado en fragmentos que pierden el contexto del formato. Salesforce Data 360 incluye opciones de análisis y preprocesamiento para contenido no estructurado, y el analizador Docling está diseñado específicamente para una comprensión más sólida del diseño, incluidas estructuras de documentos complejas o con gran cantidad de tablas. La opción B es incorrecta porque un ensemble retriever busca en múltiples recuperadores pero no repara fragmentaciones deficientes. La opción C es incorrecta porque cambiar la puntuación no preserva las relaciones de las tablas durante la ingesta."
}, {
    "id": 97,
    "category": "AI Agents",
    "question": "Un administrador de cuentas se está preparando para una próxima llamada con un cliente y desea obtener un resumen instantáneo de los puntos de datos clave de cuentas, contactos, clientes potenciales u oportunidades en Salesforce. ¿Qué función proporciona esto?",
    "choices": ["Sales Summaries", "Sales Insight Summary", "Work Summaries"],
    "correctAnswerText": "Sales Insight Summary",
    "explanation": "Sales Insight Summary agrega puntos de datos clave de múltiples objetos de Salesforce (cuentas, contactos, clientes potenciales, oportunidades) en una vista consolidada, lo que permite a los gerentes de cuenta acceder rápidamente a información relevante antes de las llamadas con los clientes. La opción A se refiere típicamente a resúmenes de interacciones específicas. La opción C se centra en interacciones de servicio al cliente."
}, {
    "id": 98,
    "category": "AI Agents",
    "question": "Universal Containers está desplegando un nuevo agente de servicio al cliente utilizando Agent Script. El Agentforce Specialist necesita actualizar el estado conversacional, navegar entre diferentes subagentes (anteriormente conocidos como temas o topics) y transferir conversaciones a un agente humano cuando sea necesario. Para minimizar la deuda técnica, el Agentforce Specialist desea implementar estas capacidades sin construir ningún código de backend personalizado. ¿Qué declaración describe correctamente cómo el Agentforce Specialist puede implementar estos requisitos específicos?",
    "choices": ["El Agentforce Specialist puede utilizar @utils.setVariables, @utils.transition, y @utils.escalate directamente.", "El Agentforce Specialist puede utilizar la mayoría de las utilidades directamente, pero @utils.escalate requiere una clase Apex personalizada para definir la cola de escalación.", "El Agentforce Specialist puede utilizar la mayoría de las utilidades sin modificaciones, pero @utils.transition requiere un Flow para definir el subagente de destino en tiempo de ejecución."],
    "correctAnswerText": "El Agentforce Specialist puede utilizar @utils.setVariables, @utils.transition, y @utils.escalate directamente.",
    "explanation": "La respuesta correcta es A. Agent Script proporciona herramientas de utilidad nativas para tareas comunes de orquestación sin requerir código de backend personalizado. `@utils.setVariables` se utiliza para establecer el estado conversacional, `@utils.transition` traslada la ejecución a otro subagente, y `@utils.escalate` transfiere una conversación de servicio a un representante humano cuando se requiere una escalación."
}, {
    "id": 99,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea desplegar un Agentforce Service Agent para dar soporte a los clientes a través de una experiencia web. UC utiliza un sitio de Digital Experience y desea habilitar la mensajería para usuarios que han iniciado sesión. El cliente necesita pasar el número de membresía al agente, para lo cual está disponible una variable previa al chat (pre-chat variable). ¿Cuál es un paso requerido para conectar el agente al sitio de Digital Experience utilizando Messaging for In-App and Web?",
    "choices": ["Configurar un componente web Lightning de mensajería utilizando el tipo Lightning estándar o personalizado para Agentforce.", "Crear un Omni-Channel Flow que enrute los mensajes al agente.", "Configurar MuleSoft para establecer un túnel API seguro entre el agente y el sitio de Digital Experience."],
    "correctAnswerText": "Crear un Omni-Channel Flow que enrute los mensajes al agente.",
    "explanation": "El paso requerido para enrocar cualquier sesión de mensajería, incluidas las de Messaging for In-App and Web (MIAW) en un sitio de Digital Experience hacia un Agentforce Service Agent, es crear un Omni-Channel Flow que enrute los mensajes al agente (B). Messaging for In-App and Web utiliza el enrutamiento de Omni-Channel para dirigir los elementos de trabajo entrantes (registros de MessagingSession) al destino correcto. El Flow de Omni-Channel debe contener una acción Route Work configurada con \"Route To: Bot\" dirigida al Agentforce Agent correspondiente. Además, procesa las variables previas al chat mapeadas desde la configuración del canal de mensajería."
}, {
    "id": 100,
    "category": "AI Agents",
    "question": "Universal Containers está probando un agente con una acción \"Reset Password\" restringida por la protección disponible cuando @variables.isVerified == True. Durante un solo turno de conversación, el modelo de lenguaje de gran tamaño establece con éxito la marca isVerified en verdadero utilizando @utils.setVariables, pero no logra invocar la acción \"Reset Password\" inmediatamente después. ¿Qué debe considerar el Agentforce Specialist sobre cómo el motor de razonamiento evalúa la disponibilidad de las acciones?",
    "choices": ["La acción está disponible desde el principio; la intención del motor de razonamiento de resolver el problema del usuario anula automáticamente la protección available when.", "La acción pasa a estar disponible de inmediato; las condiciones available when se reevalúan dinámicamente después de cada cambio de variable dentro de un solo turno.", "La acción permanece no disponible para ese turno; las condiciones available when controlan la visibilidad de la acción para el LLM y se evalúan antes de que comience el ciclo de razonamiento, por lo que la acción no se podrá llamar hasta el siguiente turno."],
    "correctAnswerText": "La acción permanece no disponible para ese turno; las condiciones available when controlan la visibilidad de la acción para el LLM y se evalúan antes de que comience el ciclo de razonamiento, por lo que la acción no se podrá llamar hasta el siguiente turno. ##",
    "explanation": "La respuesta correcta es C porque las condiciones `available when` controlan si una acción es visible para el motor de razonamiento al inicio de ese ciclo de razonamiento. Si la acción estaba oculta al comenzar el turno, cambiar la variable a verdadero durante ese mismo turno no expone retroactivamente la acción para una invocación inmediata dentro del mismo ciclo; la acción estará disponible únicamente al comenzar el siguiente turno de conversación."
}, {
    "id": 101,
    "category": "AI Agents",
    "question": "Universal Containers está evaluando características de Einstein Generative AI para mejorar la productividad de la operación del centro de servicio. ¿Qué características debería recomendar el Agentforce Specialist?",
    "choices": ["Service Replies y Case Summaries", "Service Replies y Work Summaries", "Reply Recommendations y Sales Summaries"],
    "correctAnswerText": "Service Replies y Case Summaries",
    "explanation": "Para mejorar la productividad del centro de servicio, el Agentforce Specialist debe recomendar las características Service Replies y Case Summaries. Service Replies ayuda a los agentes generando automáticamente respuestas sugeridas para las consultas de los clientes, reduciendo el tiempo de respuesta y mejorando la eficiencia. Case Summaries proporciona una visión general rápida de los detalles del caso, lo que permite a los agentes ponerse al día más rápidamente sobre los problemas de los clientes. Work Summaries no son tan relevantes para las operaciones directas de servicio al cliente, y Sales Summaries están enfocadas en procesos de ventas, no en la productividad del centro de servicio. Para obtener más información, consulta la documentación de Einstein Service Cloud de Salesforce sobre el uso de IA generativa para asistir a los equipos de servicio al cliente."
}, {
    "id": 102,
    "category": "AI Agents",
    "question": "Universal Containers ha desplegado Agentforce para manejar el seguimiento de pedidos de clientes, devoluciones y soporte de fidelización. El agente necesita equilibrar la flexibilidad conversacional para las consultas de los clientes con la ejecución garantizada de los pasos de verificación de identidad antes de acceder a la información de la cuenta. El equipo de desarrollo está evaluando cómo estructurar el patrón de instrucciones del agente para cumplir con ambos requisitos. ¿Qué declaración describe correctamente el razonamiento híbrido (hybrid reasoning) en Agentforce Agent Script?",
    "choices": ["El razonamiento híbrido utiliza múltiples modelos de lenguaje de gran tamaño (LLM) simultáneamente, donde un modelo maneja las respuestas conversacionales y otro modelo ejecuta la lógica de negocio determinista a través de la integración con Flow.", "El razonamiento híbrido requiere Canvas View para instrucciones declarativas y Script View para instrucciones procedimentales, ya que cada editor proporciona diferentes capacidades para los respectivos tipos de instrucciones.", "El razonamiento híbrido combina instrucciones declarativas en lenguaje natural que permiten la interpretación del modelo de lenguaje de gran tamaño (LLM) con instrucciones procedimentales que utilizan el prefijo -> para imponer un orden de ejecución garantizado."],
    "correctAnswerText": "El razonamiento híbrido combina instrucciones declarativas en lenguaje natural que permiten la interpretación del modelo de lenguaje de gran tamaño (LLM) con instrucciones procedimentales que utilizan el prefijo -> para imponer un orden de ejecución garantizado.",
    "explanation": "El razonamiento híbrido en Agent Script significa combinar una conversación flexible impulsada por LLM con un control procedimental determinista en la misma lógica del agente. Es exactamente por eso que la opción C es correcta. Salesforce describe que Agent Script admite lógica de negocio crítica que se ejecuta de manera confiable, al tiempo que permite que los elementos conversacionales se mantengan flexibles. La sintaxis -> marca la lógica procedimental ejecutable, de modo que pasos como la verificación de identidad se puedan imponer antes del acceso a la cuenta. La Opción A es incorrecta porque el razonamiento híbrido no consiste en usar múltiples LLM al mismo tiempo. La Opción B también es incorrecta porque el razonamiento híbrido es un modelo de lenguaje y ejecución, no una separación de capacidades entre Canvas View y Script View. El punto central del examen es el control determinista de flujos de trabajo empresariales más la interpretación por parte del LLM."
}, {
    "id": 103,
    "category": "Prompt Engineering",
    "question": "Un administrador en Universal Containers está configurando un nuevo Sales Development Representative (SDR) Agent. El propósito del agente es nutrir prospectos fríos (cold leads) antes de conectarlos con el representante de ventas asignado. Para garantizar que el agente tenga todo el acceso necesario a los prospectos en la región de ventas de América del Norte, ¿qué debería hacer el administrador?",
    "choices": ["Asignar al usuario con el rol de nivel más alto dentro de la jerarquía de roles de América del Norte como el SDR Agent User.", "Otorgar el permiso de registro View All del objeto Lead al perfil 'Einstein Agent User'.", "Crear una regla de uso compartido basada en criterios (criteria-based sharing rule) para otorgar acceso a los registros de prospectos específicos al SDR Agent User."],
    "correctAnswerText": "Crear una regla de uso compartido basada en criterios (criteria-based sharing rule) para otorgar acceso a los registros de prospectos específicos al SDR Agent User.",
    "explanation": "De acuerdo con la Guía de configuración de acceso a datos y seguridad de Agentforce, la mejor práctica para garantizar que un agente (como un SDR Agent) pueda acceder a registros específicos manteniendo la seguridad es utilizar reglas de uso compartido basadas en criterios. La documentación establece: “Cuando un AI Agent necesita acceso a un subconjunto de registros (por ejemplo, prospectos regionales), cree una regla de uso compartido que otorgue acceso al contexto de usuario de ese agente en función de criterios definidos como la región o la propiedad.” La Opción A (asignar el rol de nivel más alto) proporciona acceso excesivo más allá del alcance previsto, violando el principio de privilegio mínimo. La Opción B (permiso View All) otorga acceso global al objeto, lo cual no es seguro. Por lo tanto, la Opción C garantiza que el SDR Agent tenga un acceso controlado y específico de la región a los registros de prospectos."
}, {
    "id": 104,
    "category": "AI Agents",
    "question": "Universal Containers está construyendo un Agentforce Service Agent para gestionar cancelaciones de pedidos. El Agentforce Specialist debe asegurarse de que una acción crítica \"Check Cancellation Eligibility\" se ejecute de manera determinista en cada turno relevante, sin depender del criterio del motor de razonamiento para elegir la herramienta. Durante una revisión de código, un desarrollador junior pregunta por qué el Agentforce Specialist llamó a la acción utilizando el comando run @actions.name en lugar de simplemente listar la acción bajo el bloque reasoning.actions. ¿Qué debe explicar el Agentforce Specialist con respecto a la diferencia entre estos dos métodos de invocación?",
    "choices": ["Ambos patrones ejecutan la acción en cada turno automáticamente; la diferencia es puramente sintáctica, ya que el comando run es simplemente la notación más nueva para Agent Script.", "El comando run solo es válido cuando está anidado dentro de bloques reasoning.actions para pasar parámetros; el Agentforce Specialist debe listarlo bajo reasoning.actions para que el modelo de lenguaje de gran tamaño (LLM) pueda acceder a él.", "Listar una acción bajo reasoning.actions la convierte en una herramienta subjetiva que el modelo de lenguaje de gran tamaño (LLM) decide si llamar o no; llamarla con el comando run fuerza una ejecución garantizada cada vez."],
    "correctAnswerText": "Listar una acción bajo reasoning.actions la convierte en una herramienta subjetiva que el modelo de lenguaje de gran tamaño (LLM) decide si llamar o no; llamarla con el comando run fuerza una ejecución garantizada cada vez.",
    "explanation": "La respuesta correcta es C. En Agent Script, listar una herramienta en el bloque reasoning.actions la expone al motor de razonamiento como una herramienta invocable. La documentación de Salesforce establece que las herramientas en reasoning.actions son funciones ejecutables que el LLM puede elegir llamar en función de la descripción de la herramienta y el contexto actual. Eso no es lo suficientemente determinista para una verificación obligatoria de elegibilidad. Por el contrario, la referencia de acciones de Agent Script de Salesforce establece que para garantizar que una acción se ejecute cada vez que se ejecuta un subagente, el especialista debe usar run @actions.<action_name> en el bloque de razonamiento. Por lo tanto, run es el mecanismo correcto para la ejecución garantizada, mientras que reasoning.actions proporciona disponibilidad de herramientas seleccionables por el LLM."
}, {
    "id": 105,
    "category": "Multi-Agent Orchestration",
    "question": "Universal Containers está construyendo un asistente de compras digital que necesita generar recomendaciones de productos dinámicamente utilizando información del modelo predictivo de recomendación de productos externo de la empresa a través de APIs. ¿Qué capacidad de Agentforce debería facilitar al agente el consumo de la herramienta externa de recomendación de productos?",
    "choices": ["Model Context Protocol (MCP)", "Hugging Face", "Agent-to-Agent (A2A) protocol"],
    "correctAnswerText": "Model Context Protocol (MCP)",
    "explanation": "Según la Guía de arquitectura de IA e integración de Agentforce, el Model Context Protocol (MCP) permite a los agentes interactuar dinámicamente con modelos externos predictivos o de IA. La documentación establece: “A través de MCP, los agentes pueden descubrir, conectarse e invocar modelos externos a través de definiciones de esquemas estandarizados. Esto permite a los agentes utilizar herramientas de terceros, como motores de recomendación o clasificadores, sin codificar previamente llamadas a API fijas.” La Opción A (MCP) admite la interoperabilidad dinámica con modelos predictivos, lo que la convierte en la respuesta correcta. La Opción B (Hugging Face) se refiere a una plataforma de alojamiento de modelos, no a un mecanismo de integración de Salesforce. La Opción C (protocolo A2A) admite la comunicación de agente a agente, no la invocación de modelos externos. Por lo tanto, la Opción A refleja correctamente el método recomendado por Salesforce para integrar API predictivas externas."
}, {
    "id": 106,
    "category": "Prompt Engineering",
    "question": "Un Agentforce necesita crear un Sales Email con una plantilla de prompt personalizada. Necesitan fundamentarse en los siguientes datos: Opportunity Products, Events cerca del cliente, e historias y ejemplos de tono y voz. ¿Cómo debería obtener el Agentforce Specialist los elementos relacionados?",
    "choices": ["Llamar a un Flow iniciado por prompt (prompt-initiated flow) para obtener y fundamentar los datos requeridos.", "Crear una plantilla flex que tome los registros en cuestión como entradas.", "Utilizar una plantilla de correo electrónico estándar e insertar manualmente los campos de datos requeridos."],
    "correctAnswerText": "Llamar a un Flow iniciado por prompt (prompt-initiated flow) para obtener y fundamentar los datos requeridos.",
    "explanation": "Para fundamentar un correo electrónico de ventas en Opportunity Products, Events cerca del cliente y ejemplos de tono y voz, el Agentforce Specialist debe utilizar un Flow iniciado por prompt. Este Flow puede recuperar dinámicamente los datos necesarios de registros relacionados en Salesforce y fundamentar la salida de la IA generativa con información contextualmente precisa. La Opción B (plantilla flex) no proporciona la capacidad de obtener datos dinámicos de los registros de Salesforce automáticamente. La Opción C (inserción manual) no permitiría el grounding dinámico y automatizado de datos requerido para prompts personalizados."
}, {
    "id": 107,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) está implementando Service AI Grounding para mejorar sus operaciones de servicio al cliente. UC desea asegurarse de que sus respuestas generadas por IA estén fundamentadas en las fuentes de datos más relevantes. El equipo necesita configurar el sistema para incluir todos los objetos admitidos para el grounding. ¿Qué objetos debería seleccionar UC para configurar Service AI Grounding?",
    "choices": ["Case, Knowledge, y Case Notes", "Case y Knowledge", "Case, Case Emails, y Knowledge"],
    "correctAnswerText": "Case y Knowledge",
    "explanation": "Universal Containers (UC) está implementando Service AI Grounding para mejorar sus operaciones de servicio al cliente. Su objetivo es garantizar que las respuestas generadas por IA estén fundamentadas en las fuentes de datos más relevantes y deben configurar el sistema para incluir todos los objetos admitidos para el grounding. Objetos admitidos para Service AI Grounding: Case y Knowledge. Objeto Case: Proporciona datos contextuales sobre las consultas de los clientes, incluidos detalles del caso, estado e historial. Objeto Knowledge: Contiene artículos y documentación que ofrecen soluciones e información relacionada con problemas comunes. Exclusión de otros objetos: Case Notes y Case Emails no están incluidos en los objetos admitidos para Service AI Grounding. Razón: Pueden contener datos confidenciales o no estructurados que no son adecuados para fines de grounding de IA. Por qué las opciones A y C son incorrectas: La Opción A incluye Case Notes, que no está admitido. La Opción C incluye Case Emails, que tampoco está admitido."
}, {
    "id": 108,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea incorporar datos de CRM como un JSON bien formateado en un prompt para un modelo de lenguaje de gran tamaño (LLM). ¿Cuál es una consideración importante para este requisito?",
    "choices": ["La casilla de verificación \"CRM data to JSON\" debe estar seleccionada al crear una plantilla de prompt.", "Se puede utilizar código Apex para devolver un campo de combinación con formato JSON.", "El formato JSON debe estar habilitado en la configuración de Prompt Builder Settings."],
    "correctAnswerText": "Se puede utilizar código Apex para devolver un campo de combinación con formato JSON.",
    "explanation": "Universal Containers (UC) desea enviar datos de JSON bien formateados en un prompt a un modelo de lenguaje de gran tamaño (LLM). Salesforce no tiene una casilla de verificación simple o una configuración única para \"convertir datos de CRM a JSON\". Típicamente, para estructurar datos como JSON en una plantilla, se utiliza una clase de Apex que consulta o procesa los datos y luego devuelve una cadena JSON. Prompt Builder no tiene un conmutador que transforme automáticamente los datos a JSON. Por lo tanto, la solución práctica para pasar datos de CRM en formato JSON a un LLM es usar código Apex para producir una cadena JSON, que el prompt puede combinar y transmitir. Por lo tanto, la Opción B es correcta."
}, {
    "id": 109,
    "category": "AI Agents",
    "question": "Universal Containers ha configurado un Service Agent para permitir a los clientes buscar el estado de su pedido. La configuración del tema incluye: Nombre: Order Inquiry; Classification Description: Maneja las solicitudes de los usuarios para buscar el estado de los pedidos, incluidos los detalles de seguimiento y las estimaciones de entrega de los pedidos realizados en los últimos 90 días; Scope: Tu trabajo es solo asistir a usuarios autenticados en la búsqueda del estado de sus pedidos realizados en los últimos 90 días. Si el pedido está pendiente de entrega, proporciona el número de seguimiento y la fecha estimada de entrega. No manejes consultas sobre pedidos de más de 90 días. ¿Qué información utilizará el motor de razonamiento de Agentforce para elegir este tema?",
    "choices": ["Topic Name y Classification Description", "Topic Name y Scope", "Classification Description y Scope"],
    "correctAnswerText": "Classification Description y Scope",
    "explanation": "La Guía del motor de razonamiento de Agentforce explica que el motor confía principalmente en los campos Classification Description y Scope para determinar qué tema se adapta mejor a la intención del usuario. La documentación señala: “Classification Description define el propósito y el contexto de un tema, mientras que Scope proporciona los límites operacionales sobre cuándo y cómo debe activarse ese tema. Juntos, guían al LLM en la selección del tema adecuado en tiempo de ejecución.” La Opción A incluye “Topic Name”, que se utiliza principalmente para la organización administrativa, no para el razonamiento. La Opción B omite Classification Description, que contiene la señal de intención crítica para la coincidencia. Por lo tanto, la Opción C es correcta ya que tanto Classification Description como Scope son esenciales para la selección de temas por parte del motor de razonamiento."
}, {
    "id": 110,
    "category": "Prompt Engineering",
    "question": "Universal Containers prueba una nueva función de Generative AI de Einstein para que su equipo de ventas cree correos electrónicos personalizados y contextualizados para sus clientes. A veces, los usuarios encuentran que el borrador del correo electrónico contiene marcadores de posición para atributos que podrían haberse derivado del registro de contacto del destinatario. ¿Cuál es la explicación más probable de por qué el borrador del correo electrónico muestra estos marcadores de posición?",
    "choices": ["El usuario no tiene permiso para acceder a los campos.", "El idioma de configuración regional del usuario no es admitido por Prompt Builder.", "El usuario no tiene asignado el permiso Einstein Sales Emails."],
    "correctAnswerText": "El usuario no tiene permiso para acceder a los campos.",
    "explanation": "UC utiliza una función de IA generativa de Einstein para redactar correos electrónicos personalizados, pero aparecen marcadores de posición (por ejemplo, {!Contact.FirstName}) en lugar de datos reales del registro de contacto. Si el usuario carece de seguridad a nivel de campo (FLS) o permisos a nivel de objeto para acceder a los campos relevantes (por ejemplo, FirstName, Email), el sistema no puede recuperar los datos, dejando los marcadores de posición sin resolver. Esta es una causa frecuente en Salesforce cuando los permisos restringen el acceso a los datos, lo que la convierte en la explicación más probable y la respuesta correcta. La Opción B no es correcta porque la configuración regional afecta al formato o la traducción, no a la recuperación de datos. La Opción C es incorrecta porque si faltara el permiso de la función, los usuarios no podrían generar borradores en absoluto."
}, {
    "id": 111,
    "category": "Prompt Engineering",
    "question": "Un Agentforce configuró Data Masking dentro de la Einstein Trust Layer. ¿Cómo debería comenzar el Agentforce Specialist a validar que se estén enmascarando los campos correctos?",
    "choices": ["Utilizar un recurso basado en Flow en Prompt Builder para depurar los valores de combinación de los campos utilizando Flow Debugger.", "Solicitar los datos de auditoría de Einstein Generative AI desde la sección de Seguridad del menú Setup.", "Habilitar la recopilación y almacenamiento de datos de auditoría de Einstein Generative AI en la página de configuración de Einstein Feedback."],
    "correctAnswerText": "Solicitar los datos de auditoría de Einstein Generative AI desde la sección de Seguridad del menú Setup.",
    "explanation": "Para comenzar a validar que se estén enmascarando los campos correctos en la Einstein Trust Layer, el Agentforce Specialist debe solicitar los datos de auditoría de Einstein Generative AI (Einstein Generative AI Audit Data) desde la sección de Seguridad del menú de Setup en Salesforce. Estos datos de auditoría permiten al especialista ver cómo se procesan los datos, incluidos qué campos se están enmascarando, brindando transparencia y validación de que la configuración está funcionando según lo previsto."
}, {
    "id": 112,
    "category": "AI Agents",
    "question": "El AgentForce Specialist de Cloud Kicks desea crear un agente que permita al personal de ventas programar sus tareas diarias y ayude proporcionando explicaciones detalladas detrás de los precios de los productos y ofertas. Siguiendo las mejores prácticas de Salesforce, ¿qué tipo de agente deberían crear?",
    "choices": ["Service Agent", "Employee Agent", "Sales Agent"],
    "correctAnswerText": "Sales Agent",
    "explanation": "De acuerdo con la documentación de patrones de agentes y casos de uso para la plataforma AgentForce, existen tipos de agentes específicos alineados con roles (ventas, servicio, soporte a empleados, etc.). Dado que el requisito es para el personal de ventas (es decir, un contexto de ventas) y las tareas implican programar tareas diarias y proporcionar explicaciones sobre precios de productos y ofertas, el tipo de agente adecuado es un Sales Agent. Un Service Agent está orientado al servicio al cliente y un Employee Agent es para soporte interno a empleados que no son de ventas. Por lo tanto, la opción C (Sales Agent) es la mejor opción."
}, {
    "id": 113,
    "category": "AI Agents",
    "question": "Universal Containers está construyendo un Agentforce Service Agent para gestionar el restablecimiento de contraseñas. El agente primero debe verificar la identidad del cliente mediante un código de verificación por correo electrónico y luego, una vez confirmada la identidad, el agente debe ejecutar el Flow de restablecimiento de contraseña existente de la organización. El subagente de verificación de identidad ya está configurado. ¿Qué enfoque de implementación debería recomendar el Agentforce Specialist?",
    "choices": ["Crear una acción de agente que haga referencia al Flow de restablecimiento de contraseña, asignarla al subagente de verificación de identidad y llamarla de forma determinista desde el bloque de razonamiento del subagente utilizando la lógica condicional de Agent Script.", "Crear un subagente separado llamado Password Reset, configurarlo con una acción que invoque el Flow y pasar la variable de verificación de identidad como contexto para que las instrucciones del subagente puedan hacer referencia al estado verificado antes de proceder.", "Agregar una instrucción al subagente de verificación de identidad indicando al agente que active el Flow de restablecimiento de contraseña una vez confirmada la identidad, y almacenar la intención de restablecimiento del cliente en una variable de conversación para que el motor de razonamiento pueda hacer referencia a ella al decidir si proceder."],
    "correctAnswerText": "Crear un subagente separado llamado Password Reset, configurarlo con una acción que invoque el Flow y pasar la variable de verificación de identidad como contexto para que las instrucciones del subagente puedan hacer referencia al estado verificado antes de proceder.",
    "explanation": "La respuesta correcta es B porque el restablecimiento de contraseña es una tarea distinta y debe modelarse como un subagente separado y enfocado con su propia acción. El subagente de verificación de identidad existente puede establecer el estado verificado, y ese estado se puede pasar o hacer referencia como contexto por el subagente de Password Reset. Esto mantiene las responsabilidades limpias: un subagente verifica la identidad y el otro realiza el restablecimiento a través del Flow existente. La Opción A sobrecarga al subagente de verificación de identidad con la ejecución del restablecimiento, debilitando la separación de responsabilidades. La Opción C confía principalmente en instrucciones y almacenamiento de intenciones, lo cual es menos confiable para un proceso operativo controlado."
}, {
    "id": 114,
    "category": "AI Agents",
    "question": "Universal Containers tiene el requisito de proporcionar un resumen de ventas para sus representantes de ventas que utilizan Employee Agents, pero no están satisfechos con la respuesta predeterminada. ¿Qué mejor práctica debería recomendar el AgentForce Specialist?",
    "choices": ["Crear una plantilla de prompt personalizada Record Summary.", "Crear una plantilla de prompt personalizada Knowledge Answer.", "Actualizar la acción estándar record summary."],
    "correctAnswerText": "Crear una plantilla de prompt personalizada Record Summary.",
    "explanation": "Cuando las respuestas o resúmenes predeterminados generados por la plataforma no satisfacen las necesidades específicas del negocio, la mejor práctica en Salesforce Prompt Builder y Agentforce es crear una plantilla de prompt personalizada de tipo Record Summary asociada al objeto correspondiente. Esto permite personalizar las instrucciones, el tono, los campos incluidos y las restricciones del resumen."
}, {
    "id": 115,
    "category": "Data 360 Fundamentals",
    "question": "El equipo de ventas de un complejo hotelero desea generar un resumen de huéspedes sobre sus intereses y brindar recomendaciones basadas en sus preferencias de actividad capturadas en cada perfil de huésped. Desean que el resumen esté disponible únicamente en la página de registro de contacto. ¿Qué capacidad de IA debería utilizar el equipo?",
    "choices": ["Flow Builder", "Agentforce Builder", "Prompt Builder"],
    "correctAnswerText": "Prompt Builder",
    "explanation": "El equipo del complejo hotelero necesita un resumen de huéspedes generado por IA con recomendaciones, mostrado exclusivamente en la página de registro de contacto. Analicemos las opciones. Opción A: Flow Builder es para automatización de procesos, no para la generación directa de texto por IA en la página. Opción B: Agentforce Builder crea agentes conversacionales interactivos que operan en interfaces de chat, no como contenido estático integrado en una página de registro. Opción C: Einstein Prompt Builder permite la creación de plantillas de prompt que generan texto (como resúmenes y recomendaciones) utilizando IA generativa. La plantilla puede extraer datos de registros de contacto y ser incrustada como un componente Lightning en la página de registro de contacto a través de Flow o Lightning App Builder. Esto garantiza que el resumen esté disponible únicamente donde se especifica, cumpliendo perfectamente con las necesidades del equipo y convirtiéndola en la respuesta correcta."
}, {
    "id": 116,
    "category": "AI Agents",
    "question": "Universal Containers está desarrollando un Agentforce Service Agent para gestionar un proceso complejo de incorporación de clientes de múltiples pasos. Para organizar mejor la lógica conversacional, el Agentforce Specialist divide el proceso en dos subagentes distintos y coloca la configuración de instalación para el segundo paso dentro del bloque before_reasoning del nuevo subagente. Durante las pruebas, cuando el agente pasa a este nuevo subagente a mitad de la conversación, la conversación ocasionalmente se estanca o se comporta de manera inesperada. ¿Cuál es el riesgo que el Agentforce Specialist debe considerar con respecto a la sincronización de ejecución de before_reasoning?",
    "choices": ["El bloque before_reasoning solo se ejecutará una vez y establece las variables inmutables.", "El bloque before_reasoning se ejecuta al comienzo del siguiente turno después de una transición.", "El bloque before_reasoning solo se ejecuta en el primer turno después de que el agente se lanza."],
    "correctAnswerText": "El bloque before_reasoning se ejecuta al comienzo del siguiente turno después de una transición.",
    "explanation": "La respuesta correcta es B. before_reasoning es un bloque del ciclo de vida determinista, pero debe entenderse en relación con el ciclo de vida de procesamiento/turno del subagente. Si la configuración necesaria inmediatamente después de una transición se coloca solo en el bloque before_reasoning del subagente de destino, el especialista debe tener en cuenta cuándo comienza el siguiente ciclo de procesamiento de ese subagente de destino. Tratar before_reasoning como un bloque de configuración global o asumir que ya se ha ejecutado puede dejar variables o contexto requeridos no disponibles, lo que explica las interrupciones o comportamientos inconsistentes."
}, {
    "id": 117,
    "category": "Testing, Deployment, & Maintenance",
    "question": "¿Qué es cierto sobre Agentforce Testing Center?",
    "choices": ["Ejecutar pruebas corre el riesgo de modificar datos de CRM en un entorno de producción.", "Ejecutar pruebas no consume solicitudes de Einstein (Einstein Requests).", "Agentforce Testing Center solo se puede utilizar en un entorno de producción."],
    "correctAnswerText": "Ejecutar pruebas no consume solicitudes de Einstein (Einstein Requests).",
    "explanation": "Evaluemos las afirmaciones sobre Agentforce Testing Center. Opción A: Agentforce Testing Center ejecuta interacciones sintéticas en un entorno controlado y no modifica datos en vivo si se configura en entornos de prueba, aunque el riesgo se gestiona mediante sandboxes. Opción B: Las Einstein Requests son parte de la cuota de uso para características de IA generativa de Einstein en producción. Testing Center utiliza datos sintéticos para simular interacciones sin invocar llamadas de IA en vivo que cuenten contra esta cuota. La documentación de Salesforce confirma que las pruebas no consumen estas solicitudes, lo que convierte a esta opción en la respuesta correcta. Opción C: Testing Center está disponible tanto en sandboxes como en orgs de producción."
}, {
    "id": 118,
    "category": "AI Agents",
    "question": "Universal Containers (UC) tiene un sistema heredado que necesita integrarse con Salesforce. UC desea crear un resumen de los planes de acción de cuentas utilizando la función de API generativa. ¿Qué servicio de API debería utilizar UC para cumplir con este requisito?",
    "choices": ["REST API", "Metadata API", "SOAP API"],
    "correctAnswerText": "REST API",
    "explanation": "Para crear un resumen de los planes de acción de cuentas utilizando la función de API generativa, Universal Containers debe utilizar la REST API. La REST API es ideal para integrar Salesforce con sistemas externos y permitir la interacción con datos de Salesforce, incluidas las capacidades generativas como la creación de resúmenes o compendios. Admite estándares web modernos y es adecuada para interacciones flexibles y ligeras entre Salesforce y sistemas heredados. La Metadata API se utiliza para recuperar y desplegar metadatos, no para operaciones de datos como la generación de resúmenes. La SOAP API es una API más antigua que es menos flexible en comparación con REST para este caso de uso específico."
}, {
    "id": 119,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers (UC) desea permitir a sus representantes de ventas explorar oportunidades que sean similares a oportunidades ganadas anteriormente ingresando la expresión: \"Show me other opportunities like this one.\" ¿Cómo debería lograr esto UC con Agents?",
    "choices": ["Utilizar la Agent action estándar.", "Crear una Agent action personalizada que llame a un Flow.", "Crear una Agent action personalizada que llame a una clase Apex."],
    "correctAnswerText": "Utilizar la Agent action estándar.",
    "explanation": "Universal Containers puede lograr el requisito de explorar oportunidades similares utilizando la acción estándar del agente. Agent tiene acciones integradas para manejar consultas en lenguaje natural, como “Show me other opportunities like this one.” La acción estándar procesará la consulta y devolverá resultados basados en criterios de coincidencia predefinidos, como los detalles de la oportunidad y acuerdos pasados Cerrados/Ganados (Closed Won). Este enfoque evita la necesidad de crear Flows o clases Apex personalizados, aprovechando la funcionalidad lista para usar."
}, {
    "id": 120,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers está configurando la Data Library dentro de Agentforce Builder. ¿Qué es cierto con respecto a las Agentforce Data Libraries?",
    "choices": ["Solo los propietarios de la Data Library pueden asignarla al agente.", "Cada categoría de datos solo puede tener una Data Library.", "Un agente solo puede tener una Data Library asignada."],
    "correctAnswerText": "Un agente solo puede tener una Data Library asignada.",
    "explanation": "La declaración correcta con respecto al límite de configuración de Agentforce Data Libraries es que a un agente solo se le puede asignar una Data Library (C). Las Agentforce Data Libraries son el mecanismo mediante el cual un agente se \"fundamenta\" en el conocimiento interno y de confianza de una organización (utilizando RAG). Para garantizar que el enfoque del agente siga siendo preciso y su proceso de recuperación sea eficiente, existe una relación de uno a uno entre un Agentforce Agent y la Data Library que utiliza para el grounding. Esta biblioteca única, sin embargo, puede contener datos de múltiples fuentes, como Salesforce Knowledge, archivos cargados o búsquedas web."
}, {
    "id": 121,
    "category": "Prompt Engineering",
    "question": "Pinnacle Healthcare está mejorando su agente y la implementación de Agent Script para mejorar la programación de pacientes y la coordinación de la atención. El jefe de cumplimiento ha identificado la necesidad de garantizar un comportamiento determinista para los agentes al verificar la información del paciente antes de programar citas. El proceso debe imponer el cumplimiento bloqueando las acciones posteriores, por ejemplo, la programación, hasta que se complete la verificación del paciente. ¿Cuál es el enfoque más adecuado que el Agentforce Specialist debería recomendar adhiriéndose a las directrices de configuración estándar?",
    "choices": ["Llamar a un método personalizado Apex @InvocableMethod para imponer la lógica de verificación y actualizar dinámicamente la disponibilidad de la acción de programación.", "Utilizar @utils.setVariables para actualizar una variable de sesión mutable para el estado de verificación del paciente y bloquear las acciones de programación con available when.", "Utilizar expresiones de plantilla en las descripciones de las acciones para mostrar dinámicamente instrucciones basadas en el estado de verificación."],
    "correctAnswerText": "Utilizar @utils.setVariables para actualizar una variable de sesión mutable para el estado de verificación del paciente y bloquear las acciones de programación con available when.",
    "explanation": "La respuesta correcta es B porque controlar las acciones posteriores requiere una variable de estado confiable y una regla de disponibilidad de acciones. Una variable de sesión mutable puede almacenar si la verificación del paciente se ha completado, y available when puede evitar que las acciones de programación estén disponibles hasta que esa variable indique el estado verificado. Este es el patrón declarativo estándar de Agent Script para el acceso controlado a acciones. La Opción A depende innecesariamente de código. La Opción C solo cambia el texto descriptivo y no impide que se pueda llamar a la acción."
}, {
    "id": 122,
    "category": "Data 360 Fundamentals",
    "question": "Antes de desplegar una solución de Retrieval Augmented Generation en producción, un Agentforce Specialist desea evaluar si sus recuperadores (retrievers) personalizados individuales están mostrando los fragmentos (chunks) más relevantes para consultas específicas sin escribir ningún código. ¿Qué herramienta debería utilizar el especialista para probar el recuperador?",
    "choices": ["El Retriever Playground", "Agentforce Testing Center", "Data 360 Query Editor"],
    "correctAnswerText": "El Retriever Playground",
    "explanation": "La respuesta correcta es A porque Retriever Playground es la herramienta sin código correcta para validar el comportamiento de recuperación antes del despliegue en producción. Permite al especialista probar recuperadores individuales, ejecutar consultas representativas, inspeccionar los fragmentos recuperados y ajustar los parámetros o filtros de recuperación. Esto es diferente de Agentforce Testing Center, que valida el comportamiento del agente a través de expresiones, subagentes y acciones."
}, {
    "id": 123,
    "category": "Prompt Engineering",
    "question": "Universal Containers está muy preocupada por el cumplimiento de la seguridad y desea comprender: Qué texto de prompt se envía al modelo de lenguaje de gran tamaño (LLM) \\* Cómo se enmascara \\* La respuesta enmascarada. ¿Qué debería recomendar el Agentforce Specialist?",
    "choices": ["Ingerir los registros de eventos de Einstein Shield en CRM Analytics.", "Revisar los registros de depuración (debug logs) del usuario en ejecución.", "Habilitar el registro de auditoría (audit trail) en la Einstein Trust Layer."],
    "correctAnswerText": "Habilitar el registro de auditoría (audit trail) en la Einstein Trust Layer.",
    "explanation": "Para responder a las preocupaciones de cumplimiento de seguridad y brindar visibilidad sobre el texto del prompt enviado al LLM, cómo se enmascara y la respuesta enmascarada, el Agentforce Specialist debe recomendar habilitar la ruta de auditoría en la Einstein Trust Layer. Esta función captura y registra los prompts enviados al modelo de lenguaje de gran tamaño (LLM) junto con el enmascaramiento de información confidencial y la respuesta de la IA."
}, {
    "id": 124,
    "category": "AI Agents",
    "question": "Universal Containers (UC) actualmente realiza el seguimiento de prospectos con un objeto personalizado. UC se está preparando para implementar el Sales Development Representative (SDR) Agent. ¿Qué consideración debería tener en cuenta UC?",
    "choices": ["Agentforce SDR solo funciona con el objeto estándar Lead.", "Agentforce SDR solo funciona en Opportunities.", "Agentforce SDR solo admite objetos personalizados asociados con Accounts."],
    "correctAnswerText": "Agentforce SDR solo funciona con el objeto estándar Lead.",
    "explanation": "Según la documentación de Salesforce, el Agentforce SDR Agent está diseñado específicamente para interactuar con el objeto estándar Lead en Salesforce. Incluye lógica preconfigurada para calificar prospectos, actualizar estados de prospectos y programar reuniones, todo lo cual depende de campos estándar de Lead (por ejemplo, Lead Status, Email, Phone). Dado que UC rastrea prospectos en un objeto personalizado, tendrían que migrar los datos al objeto estándar Lead o mapear los datos para poder aprovechar el SDR Agent de forma efectiva."
}, {
    "id": 125,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Un Agentforce Specialist está probando un agente con Testing Center. Los resultados de la prueba muestran que un agente identifica correctamente el subagente adecuado para manejar una expresión, pero no logra seleccionar todas las acciones necesarias dentro de ese subagente. ¿Qué métrica de evaluación identifica específicamente esta falla?",
    "choices": ["Action Assertion", "Response Evaluation", "Subagent Assertion"],
    "correctAnswerText": "Action Assertion",
    "explanation": "Action Assertion es la métrica correcta porque la falla no radica en el enrutamiento del subagente; el agente ya seleccionó el subagente correcto. La falla está en la capa de selección de herramientas/acciones dentro de ese subagente. Las evaluaciones de Agentforce Testing Center incluyen Subagent Assertion y Action Assertion como verificaciones separadas. Subagent Assertion valida si la expresión se enrutó al subagente esperado. Action Assertion valida si se seleccionaron o utilizaron las acciones requeridas correctas."
}, {
    "id": 126,
    "category": "AI Agents",
    "question": "Un Agentforce Specialist está creando una Agent action personalizada. El tema (topic) se selecciona correctamente, pero la acción no. ¿Qué configuración debería probar y ajustar el Agentforce Specialist para garantizar que la acción se ejecute según lo esperado?",
    "choices": ["Action Scope", "Action Instructions", "Classification Description"],
    "correctAnswerText": "Action Instructions",
    "explanation": "Según la Guía de desarrollo de acciones personalizadas de Agentforce, si un tema se activa correctamente pero se ejecuta la acción incorrecta, el problema suele estar en las instrucciones de la acción (Action Instructions). La documentación señala: “Las instrucciones de la acción proporcionan al LLM una guía explícita sobre cuándo y cómo usar una acción determinada. Las instrucciones mal escritas o ambiguas pueden hacer que el motor de razonamiento seleccione una acción incorrecta, incluso dentro del tema correcto.”"
}, {
    "id": 127,
    "category": "AI Agents",
    "question": "Universal Containers está desplegando dos agentes simultáneamente: un Sales Productivity Agent interno para empleados y un Service Agent de cara al cliente en su sitio de Experience Cloud. Un Agentforce Specialist está configurando permisos y necesita comprender el contexto de seguridad correcto para cada uno. ¿Qué declaración describe con precisión el modelo de ejecución?",
    "choices": ["El Service Agent orientado al cliente hereda el contexto de seguridad del perfil de usuario invitado del sitio de Experience Cloud de forma predeterminada, requiriendo que los permisos de objeto del perfil invitado se configuren para todas las acciones que ejecuta el agente.", "El Sales Productivity Agent interno ejecuta acciones utilizando los propios permisos del empleado autenticado de Salesforce, mientras que el Service Agent orientado al cliente ejecuta acciones como un usuario dedicado Einstein Service Agent User con su propio conjunto de permisos.", "Tanto el Sales Productivity Agent interno como el Service Agent orientado al cliente ejecutan acciones como un usuario dedicado Einstein Service Agent User con su propio conjunto de permisos que se configura según sea necesario para el agente."],
    "correctAnswerText": "El Sales Productivity Agent interno ejecuta acciones utilizando los propios permisos del empleado autenticado de Salesforce, mientras que el Service Agent orientado al cliente ejecuta acciones como un usuario dedicado Einstein Service Agent User con su propio conjunto de permisos.",
    "explanation": "La respuesta correcta es B. Los agentes internos orientados a empleados operan dentro del modelo de acceso del usuario autenticado de Salesforce, por lo que las acciones deben respetar el perfil del empleado, sus conjuntos de permisos, reglas de uso compartido y seguridad a nivel de campo. Un Service Agent orientado al cliente desplegado a través de Experience Cloud se configura en torno a una identidad de ejecución de usuario agente/servicio dedicada (Einstein Service Agent User), y la guía de Salesforce enfatiza asignar los permisos correctos a ese usuario agente en lugar de confiar en el perfil de usuario invitado."
}, {
    "id": 128,
    "category": "Governance & Observability",
    "question": "¿Qué métricas útiles proporciona Agentforce Observability a un equipo de servicio al cliente en relación con un Customer Service Agent?",
    "choices": ["Tasas de desvío de llamadas (call deflection rates), costo por interacción y consumo de memoria", "Tasas de desvío de llamadas (call deflection rates), productividad y tasas de sesiones abandonadas", "Tasas de desvío de llamadas (call deflection rates), tasas de sesiones abandonadas y calificaciones de intención del usuario"],
    "correctAnswerText": "Tasas de desvío de llamadas (call deflection rates), productividad y tasas de sesiones abandonadas",
    "explanation": "La respuesta correcta es B porque Agentforce Observability y Agent Analytics se centran en métricas de servicio operativo que ayudan a los equipos a comprender la efectividad del agente y los resultados del servicio al cliente. La tasa de desvío (deflection rate) mide la frecuencia con la que el agente resuelve las interacciones sin escalación. Las métricas de productividad ayudan a evaluar la eficiencia operativa. La tasa de sesiones abandonadas destaca las conversaciones que los usuarios abandonan antes de completarlas. La opción A incluye consumo de memoria, que es una métrica de infraestructura, no de negocio."
}, {
    "id": 129,
    "category": "Data 360 Fundamentals",
    "question": "Un Agentforce Specialist se está preparando para cargar varios documentos de políticas en PDF a una nueva Agentforce Data Library basada en archivos. Para aprovechar el procesamiento avanzado con Intelligent Context, ¿cómo debería proceder el Agentforce Specialist?",
    "choices": ["Cargar hasta cinco archivos PDF que sean de 100 MB o menos para permitir que el sistema evalúe la configuración de indexación óptima.", "Cargar hasta cinco archivos PDF que sean de 10 MB o menos para permitir que el sistema evalúe la configuración de indexación óptima.", "Habilitar manualmente Intelligent Context en Data 360 antes de cargar los archivos PDF."],
    "correctAnswerText": "Cargar hasta cinco archivos PDF que sean de 10 MB o menos para permitir que el sistema evalúe la configuración de indexación óptima.",
    "explanation": "La respuesta correcta es B porque el procesamiento avanzado de Intelligent Context se aplica a las Agentforce Data Libraries basadas en archivos cuando los PDF cumplen con los límites de tamaño y cantidad admitidos. La guía de Salesforce establece que al crear una Data Library basada en archivos con PDF que tengan 10 MB o menos (y hasta un máximo de 5 archivos), las herramientas de procesamiento avanzado de Intelligent Context se aplican automáticamente."
}, {
    "id": 130,
    "category": "Prompt Engineering",
    "question": "Un Agentforce desea utilizar las listas relacionadas de una cuenta en una plantilla de prompt personalizada. ¿Qué debe considerar el Agentforce Specialist al configurar la plantilla de prompt?",
    "choices": ["La opción de codificación de texto (por ejemplo, UTF-8, ASCII)", "El número máximo de campos de combinación de listas relacionadas (related list merge fields)", "La elección entre formatos de renderizado XML y JSON para la lista"],
    "correctAnswerText": "El número máximo de campos de combinación de listas relacionadas (related list merge fields)",
    "explanation": "Al configurar una plantilla de prompt personalizada para usar listas relacionadas, el Agentforce Specialist debe conocer el número máximo de campos de combinación de listas relacionadas que se pueden incluir. Salesforce impone límites para garantizar que las plantillas de prompt se ejecuten eficientemente y no sobrecarguen el sistema con demasiados datos."
}, {
    "id": 131,
    "category": "AI Agents",
    "question": "Universal Containers (UC) está utilizando Service AI Grounding estándar. UC creó un campo de texto enriquecido (rich text) personalizado para usar con Service AI Grounding. ¿Qué debería considerar UC al usar Service AI Grounding estándar?",
    "choices": ["Service AI Grounding solo funciona con los objetos Case y Knowledge.", "Service AI Grounding solo admite campos de tipo String y Text Area.", "La visibilidad de Service AI Grounding funciona en modo de sistema."],
    "correctAnswerText": "Service AI Grounding solo admite campos de tipo String y Text Area.",
    "explanation": "Service AI Grounding recupera datos de objetos de Salesforce para fundamentar las respuestas generadas por IA. Service AI Grounding estándar solo admite campos de tipo String y Text Area. Los campos personalizados de texto enriquecido (RichTextArea) no están admitidos para este propósito, lo que convierte a la Opción B en la respuesta correcta."
}, {
    "id": 132,
    "category": "AI Agents",
    "question": "Universal Containers (UC) está experimentando con el uso de modelos de Generative AI públicos y está familiarizada con el lenguaje requerido para obtener la información que necesita. Sin embargo, puede llevar mucho tiempo para los representantes de ventas y servicio de UC escribir el prompt para obtener la información que necesitan y garantizar la consistencia del prompt. ¿Qué función de Salesforce debería utilizar la empresa para solucionar estas preocupaciones?",
    "choices": ["Agent Builder y Action: Query Records.", "Einstein Prompt Builder y Prompt Templates.", "Einstein Recommendation Builder."],
    "correctAnswerText": "Einstein Prompt Builder y Prompt Templates.",
    "explanation": "UC desea optimizar el uso de IA generativa reduciendo el tiempo que los representantes dedican a escribir prompts y garantizando la consistencia. Einstein Prompt Builder permite a los usuarios crear plantillas de prompt reutilizables que encapsulan instrucciones específicas y grounding. UC puede predefinir prompts basados en su lenguaje conocido, ahorrando tiempo a los representantes y garantizando la consistencia en los equipos."
}, {
    "id": 133,
    "category": "AI Agents",
    "question": "Universal Containers ha implementado un agente que responde preguntas basándose en artículos de Knowledge. ¿Qué tema (topic) y Agent Action se mostrarán en Agent Builder?",
    "choices": ["Tema General Q & A y acción Knowledge Article Answers.", "Tema General CRM y acción Answers Questions with LLM Action.", "Tema General FAQ y acción Answers Questions with Knowledge Action."],
    "correctAnswerText": "Tema General FAQ y acción Answers Questions with Knowledge Action.",
    "explanation": "En Agent Builder, el tema \"General FAQ\" es un punto de partida o tema predeterminado común para agentes de respuesta a preguntas. La acción \"Answers Questions with Knowledge\" es una acción preconstruida que recupera y fundamenta las respuestas con artículos de Knowledge. Esta combinación coincide con la implementación de UC y está respaldada explícitamente en la documentación de Salesforce."
}, {
    "id": 134,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está utilizando campos de combinación de listas relacionadas en una plantilla de prompt asociada con un objeto Account en Prompt Builder. ¿Qué debería considerar UC?",
    "choices": ["La lista relacionada Activities en el objeto Account no está admitida porque es un campo polimórfico.", "Si las Person Accounts se han habilitado, los campos de combinación no estarán disponibles para el objeto Account.", "La generación del prompt no dará ninguna respuesta cuando no haya una lista relacionada asociada con una Account en tiempo de ejecución."],
    "correctAnswerText": "La lista relacionada Activities en el objeto Account no está admitida porque es un campo polimórfico.",
    "explanation": "Al usar campos de combinación de listas relacionadas en una plantilla de prompt asociada con el objeto Account en Prompt Builder, la lista relacionada Activities no está admitida debido a que es una relación polimórfica (puede hacer referencia a múltiples tipos de objetos diferentes como tareas o eventos), lo que la hace incompatible con las operaciones de combinación en la generación de prompts."
}, {
    "id": 135,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) desea que los usuarios completen el campo Description en el registro de Account haciendo clic en un botón en la página del registro, con la opción de previsualizar, regenerar o editar manualmente el resultado antes de guardarlo. La solución debe utilizar únicamente herramientas declarativas. ¿Qué tipo de plantilla de prompt debería utilizar UC?",
    "choices": ["Field Generation", "Flex", "Sales Email"],
    "correctAnswerText": "Field Generation",
    "explanation": "Field Generation es el tipo de plantilla de prompt correcto porque el requisito es generar un resultado de IA para un campo específico de un registro de Salesforce (el campo Description de Account). Salesforce Prompt Builder admite plantillas Field Generation para que los usuarios puedan generar valores de campos directamente desde el contexto del registro sin código personalizado."
}, {
    "id": 136,
    "category": "Governance & Observability",
    "question": "Un Agentforce Specialist desea solucionar problemas de rendimiento de su agente. ¿A dónde debe ir el Agentforce Specialist para acceder a todas las interacciones de los usuarios con el agente, incluidos los errores del agente, las acciones activadas incorrectamente y los planes incompletos?",
    "choices": ["Plan Canvas", "Agent Settings", "Event Logs"],
    "correctAnswerText": "Event Logs",
    "explanation": "Event Logs en Agentforce (accesibles a través de Setup o Agent Analytics) registran todas las interacciones de los usuarios, incluidos errores, acciones activadas de forma incorrecta y planes incompletos. Proporcionan telemetría detallada para solucionar problemas de rendimiento, lo que convierte a Event Logs en la respuesta correcta."
}, {
    "id": 137,
    "category": "Prompt Engineering",
    "question": "Un Agentforce en Universal Containers (UC) está construyendo solo con herramientas sin código. Tienen muchas cuentas pequeñas que solo son tocadas periódicamente por un equipo de ventas especializado, y UC desea maximizar el tiempo del equipo de operaciones de ventas. UC desea ayudar a preparar al equipo de ventas para las llamadas resumiendo compras pasadas, intereses en productos mostrados por el Contacto capturados a través de Data Cloud, y un resumen de conversaciones pasadas por correo electrónico y teléfono de las cuales hay transcripciones. ¿Qué enfoque debería recomendar el Agentforce Specialist para lograr este caso de uso?",
    "choices": ["Utilizar una plantilla de prompt fundamentada en datos de CRM y Data Cloud utilizando el modelo fundacional estándar.", "Ajustar (fine-tune) el modelo fundacional estándar debido a la complejidad de los datos.", "Desplegar primero el propio modelo fundacional personalizado de UC sobre estos datos."],
    "correctAnswerText": "Utilizar una plantilla de prompt fundamentada en datos de CRM y Data Cloud utilizando el modelo fundacional estándar.",
    "explanation": "Para implementaciones no-code, Prompt Builder permite a los especialistas de Agentforce crear plantillas de prompt que fundamentan dinámicamente las respuestas en datos de Salesforce CRM (por ejemplo, compras pasadas) e información de Data Cloud (por ejemplo, intereses en productos) sin código personalizado, utilizando el modelo fundacional estándar."
}, {
    "id": 138,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers desea mantener la precisión de la recuperación a medida que la documentación del producto cambia con frecuencia. ¿Qué enfoque debería implementar la empresa?",
    "choices": ["Dejar la incrustación (embedding) sin cambios incluso si el contenido se actualiza.", "Reconstruir el índice de búsqueda (Rebuild the search index).", "Eliminar manualmente los fragmentos de datos obsoletos."],
    "correctAnswerText": "Reconstruir el índice de búsqueda (Rebuild the search index).",
    "explanation": "De acuerdo con las directrices de implementación oficial de Agentforce y la arquitectura RAG dentro de Salesforce, mantener la precisión de la recuperación depende de garantizar que las incrustaciones (embeddings) y el contenido indexado se mantengan sincronizados con los datos más recientes. Cuando la documentación o el contenido cambia, la práctica recomendada es reconstruir el índice de búsqueda (Rebuild the search index) para regenerar los fragmentos y volver a calcular los vectores."
}, {
    "id": 139,
    "category": "Prompt Engineering",
    "question": "El equipo de cumplimiento de Universal Containers ha determinado que un prompt específico de servicio al cliente solo debe procesar datos a través de un modelo seguro y autoalojado de Amazon Bedrock y se le debe impedir acceder a los modelos predeterminados de OpenAI. ¿Cómo debería configurar el Agentforce Specialist este enrutamiento de modelo específico?",
    "choices": ["Asignar un conjunto de permisos al Agent User dedicado que restrinja el acceso de lectura a los registros de metadatos del modelo de lenguaje de gran tamaño (LLM) predeterminado de Salesforce.", "Configurar un punto de enlace de Data 360 Private Connect que redirija automáticamente todas las solicitudes de Agentforce fuera del LLM Gateway predeterminado.", "Registrar el modelo como un BYOLLM en Einstein Studio, y luego seleccionar explícitamente este modelo al configurar la plantilla de prompt."],
    "correctAnswerText": "Registrar el modelo como un BYOLLM en Einstein Studio, y luego seleccionar explícitamente este modelo al configurar la plantilla de prompt.",
    "explanation": "La respuesta correcta es C porque el requisito es un enrutamiento de modelo a nivel de prompt hacia un modelo específico de Amazon Bedrock. Salesforce admite la integración Bring Your Own Large Language Model (BYOLLM) a través de AI Models (anteriormente Einstein Studio). Una vez registrado el modelo, el especialista puede seleccionarlo explícitamente al configurar la plantilla de prompt correspondiente."
}, {
    "id": 140,
    "category": "AI Agents",
    "question": "En Universal Containers, un gerente de ventas enfrenta un reto difícil ya que varios representantes de ventas junior nuevos tienen problemas con el manejo de objeciones y negociaciones de precios para acuerdos complejos. El gerente carece de tiempo para guiar personalmente a cada representante de ventas a través de sus escenarios específicos de clientes antes de sus reuniones críticas. Los representantes de ventas junior han pedido una herramienta que les permita practicar sus presentaciones simulando conversaciones difíciles y recibir comentarios personalizados específicos para la oportunidad comercial en la que están trabajando. ¿Qué solución de Salesforce debería recomendar un Agentforce Specialist?",
    "choices": ["Employee Coach", "SDR Agent", "Sales Coach"],
    "correctAnswerText": "Sales Coach",
    "explanation": "La descripción general de Agentforce for Sales define a Sales Coach como la solución impulsada por IA diseñada para ayudar a los profesionales de ventas a practicar y mejorar sus habilidades de venta mediante simulaciones de interacciones con clientes, manejo de objeciones y retroalimentación personalizada basada en datos reales de oportunidades."
}, {
    "id": 141,
    "category": "Multi-Agent Orchestration",
    "question": "¿Cuándo es el protocolo Agent-to-Agent (A2A) una opción de comunicación adecuada?",
    "choices": ["Cuando los agentes necesitan invocar API de terceros", "Cuando los agentes necesitan acceder a herramientas", "Cuando los agentes necesitan colaborar"],
    "correctAnswerText": "Cuando los agentes necesitan colaborar",
    "explanation": "El protocolo Agent-to-Agent (A2A) en Agentforce está diseñado específicamente para facilitar la colaboración y coordinación entre múltiples agentes de IA (por ejemplo, Service, Sales o Employee Agents), permitiendo intercambiar mensajes estructurados, delegar tareas y compartir contexto de manera segura."
}, {
    "id": 142,
    "category": "Data 360 Fundamentals",
    "question": "Una vez que se elige una fuente de datos para una Agentforce Data Library, ¿qué es cierto sobre cambiar esa fuente de datos más adelante?",
    "choices": ["La fuente de datos se puede cambiar a través de la configuración de Data Cloud.", "El Data Retriever se puede reconfigurar para utilizar una fuente de datos diferente.", "La fuente de datos no se puede cambiar después de haber sido seleccionada."],
    "correctAnswerText": "La fuente de datos no se puede cambiar después de haber sido seleccionada.",
    "explanation": "Al configurar una Agentforce Data Library, la selección de la fuente de datos es permanente. Una vez establecida, no se puede modificar ni reemplazar. Si una organización necesita utilizar una fuente de datos diferente, se debe crear y configurar una nueva Data Library desde cero."
}, {
    "id": 143,
    "category": "AI Agents",
    "question": "Cuando se inicia un chat con un cliente, ¿qué funcionalidad de Salesforce proporciona respuestas de IA generativa o borradores de correos electrónicos basados en artículos de Knowledge recomendados?",
    "choices": ["Einstein Reply Recommendations", "Einstein Service Replies", "Einstein Grounding"],
    "correctAnswerText": "Einstein Service Replies",
    "explanation": "Cuando se inicia un chat de cliente, Einstein Service Replies proporciona respuestas generadas por IA o borradores de correo electrónico basados en información contextual y artículos de Knowledge recomendados, mejorando la eficiencia y precisión en el soporte."
}, {
    "id": 144,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea utilizar un modelo de lenguaje de gran tamaño (LLM) externo en Prompt Builder. ¿Qué debería recomendar un Agentforce Specialist?",
    "choices": ["Utilizar Apex para conectarse a un LLM externo y fundamentar el prompt.", "Utilizar la funcionalidad BYO-LLM en Einstein Studio.", "Utilizar Flow y External Services para traer datos desde un LLM externo."],
    "correctAnswerText": "Utilizar la funcionalidad BYO-LLM en Einstein Studio.",
    "explanation": "La funcionalidad Bring Your Own Large Language Model (BYO-LLM) en Einstein Studio permite a las organizaciones integrar y utilizar modelos de lenguaje de gran tamaño externos de forma nativa dentro del ecosistema de Salesforce y Prompt Builder."
}, {
    "id": 145,
    "category": "Data 360 Fundamentals",
    "question": "Coral Cloud Resorts está cargando miles de nuevos archivos HTML de artículos de conocimiento para el lanzamiento de un complejo turístico. Para garantizar que Agentforce recupere respuestas precisas rápidamente, ¿qué estrategia de fragmentación (chunking strategy) debería utilizarse al crear un nuevo índice?",
    "choices": ["Semantic-based passage extraction", "Conversation-based chunking", "Section-aware chunking"],
    "correctAnswerText": "Section-aware chunking",
    "explanation": "Al cargar volúmenes de contenido estructurado como archivos HTML o documentos con títulos y secciones, la estrategia recomendada es Section-aware chunking. Esta estrategia respeta los límites lógicos de encabezados, párrafos y subsecciones, evitando dividir el texto a la mitad de una idea o perder la relación entre títulos y contenido."
}, {
    "id": 146,
    "category": "AI Agents",
    "question": "Universal Containers (UC) está implementando Agentforce Service Agent en Email. UC creó una plantilla de correo electrónico y ahora necesita conectarla a un Service Agent. ¿Qué debería recomendar un Agentforce Specialist?",
    "choices": ["Crear una Email Configuration para el Service Agent.", "Crear un Omni-Channel Flow para apuntar a una plantilla de correo electrónico.", "No se necesita ninguna acción; el Service Agent se conecta automáticamente."],
    "correctAnswerText": "Crear una Email Configuration para el Service Agent.",
    "explanation": "De acuerdo con la Guía de configuración de Agentforce for Service, al implementar Service Agents en el canal de correo electrónico, los administradores deben crear una Email Configuration para vincular al agente con la dirección de correo electrónico, la plantilla correspondiente y los parámetros de enrutamiento."
}, {
    "id": 147,
    "category": "AI Agents",
    "question": "Universal Containers desea poder detectar con un alto nivel de confianza si el contenido generado por un modelo de lenguaje de gran tamaño (LLM) contiene lenguaje tóxico. ¿Qué acción debería tomar un especialista en IA en la Trust Layer para confirmar que la toxicidad se está gestionando adecuadamente?",
    "choices": ["Acceder al registro de Toxicity Detection en Setup y exportar todas las entradas donde isToxicityDetected sea true.", "Crear un Flow que envíe un correo electrónico a una dirección especificada cada vez que la puntuación de toxicidad supere un umbral predefinido.", "Crear un informe de auditoría de la Trust Layer dentro de Data Cloud que utilice un filtro por tipo de detector de toxicidad para mostrar las respuestas tóxicas y sus respectivas puntuaciones."],
    "correctAnswerText": "Crear un informe de auditoría de la Trust Layer dentro de Data Cloud que utilice un filtro por tipo de detector de toxicidad para mostrar las respuestas tóxicas y sus respectivas puntuaciones.",
    "explanation": "Para monitorear y auditar de forma transparente si el contenido generado por un LLM contiene lenguaje tóxico, se debe crear un informe de auditoría de la Trust Layer en Data Cloud aplicando filtros sobre los detectores de toxicidad para revisar las respuestas y sus puntuaciones."
}, {
    "id": 148,
    "category": "AI Agents",
    "question": "Universal Containers opera un portal de autoservicio para clientes respaldado por un Agentforce Service Agent. El equipo de cumplimiento mantiene una base de conocimiento de Salesforce Knowledge con directrices de cumplimiento de productos, términos de servicio y procedimientos regulatorios publicados, actualizados regularmente por expertos. ¿Cuál es el enfoque más eficiente para garantizar que el agente recupere solo contenido publicado actual utilizando la comprensión semántica de las preguntas de los clientes y que los artículos obsoletos nunca se muestren?",
    "choices": ["Construir una acción de subagente utilizando un Salesforce Flow para consultar el objeto de datos de artículos de Knowledge en tiempo de ejecución y devolver el contenido coincidente al agente.", "Crear una Agentforce Data Library conectada a la base de conocimiento de Salesforce Knowledge, filtrada solo a artículos publicados, permitiendo que el agente fundamenté respuestas utilizando recuperación semántica basada en RAG que refleje automáticamente las actualizaciones de Knowledge sin requerir reconfiguración del agente.", "Configurar un recuperador personalizado en Einstein Studio conectado a un índice de búsqueda de Data 360, aplicando filtros para restringir los resultados a documentos etiquetados como actuales."],
    "correctAnswerText": "Crear una Agentforce Data Library conectada a la base de conocimiento de Salesforce Knowledge, filtrada solo a artículos publicados, permitiendo que el agente fundamenté respuestas utilizando recuperación semántica basada en RAG que refleje automáticamente las actualizaciones de Knowledge sin requerir reconfiguración del agente.",
    "explanation": "La forma más eficiente y nativa de lograr la recuperación semántica basada en RAG sobre artículos de Knowledge publicados y actualizados es crear una Agentforce Data Library configurada con filtros para incluir únicamente los artículos en estado Publicado (Published)."
}, {
    "id": 149,
    "category": "Prompt Engineering",
    "question": "Universal Containers está auditando su arquitectura de IA y necesita asegurarse de que sus desarrolladores estén restringidos a utilizar únicamente modelos de lenguaje de gran tamaño específicamente aprobados. ¿Cómo debería un Agentforce Specialist gestionar y evitar que se acceda a modelos no aprobados en toda la organización?",
    "choices": ["Aplicar una política de Attribute-Based Access Control dentro de la Einstein Trust Layer para bloquear la redirección de prompts a modelos no aprobados.", "Escribir una instrucción del sistema estricta dentro de Agent Builder que diga: \"Never use external models for reasoning\".", "Garantizar que solo los modelos de lenguaje de gran tamaño aprobados estén habilitados en la sección Model Provider bajo Einstein Setup."],
    "correctAnswerText": "Garantizar que solo los modelos de lenguaje de gran tamaño aprobados estén habilitados en la sección Model Provider bajo Einstein Setup.",
    "explanation": "La gobernanza y restricción de modelos debe aplicarse a nivel de plataforma desde la configuración administrativa. En Einstein Setup -> Configure Model Providers, los administradores habilitan o deshabilitan qué proveedores y modelos están disponibles globalmente para los desarrolladores y constructores de prompts."
}, {
    "id": 150,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea que los agentes de soporte utilicen Agentforce para hacer preguntas sobre sus tutoriales y guías de productos. ¿Qué debería hacer el Agentforce Specialist para cumplir con este requisito?",
    "choices": ["Crear una plantilla de prompt para tutoriales y guías de productos.", "Agregar un campo personalizado Answer Questions en el objeto de producto para instrucciones de tutoriales.", "Publicar los tutoriales y guías de productos como artículos de Knowledge."],
    "correctAnswerText": "Publicar los tutoriales y guías de productos como artículos de Knowledge.",
    "explanation": "Publicar tutoriales y guías de productos como artículos de Knowledge en Salesforce es el enfoque estándar para estructurar información que Agentforce puede indexar y consultar fácilmente para responder preguntas de soporte de manera contextual e informada."
}, {
    "id": 151,
    "category": "Testing, Deployment, & Maintenance",
    "question": "El administrador de Universal Containers ha desarrollado un nuevo agente en un entorno sandbox y ahora desea desplegarlo en producción. ¿Qué debería hacer el administrador para desplegar un agente?",
    "choices": ["Recrear manualmente la configuración del agente, los temas y las acciones en producción porque no se pueden utilizar Change Sets.", "Exportar los componentes del agente como archivos JSON e importarlos manualmente en producción utilizando la Metadata API.", "Crear un Change Set saliente (outbound change set) con todos los componentes necesarios del agente y luego cargarlo a producción."],
    "correctAnswerText": "Crear un Change Set saliente (outbound change set) con todos los componentes necesarios del agente y luego cargarlo a producción.",
    "explanation": "Según la Guía de gestión del ciclo de vida y despliegue de AgentForce, los agentes de AgentForce, incluidos sus temas, acciones y plantillas de prompt, se pueden desplegar desde un sandbox a producción utilizando Change Sets de Salesforce. Los administradores deben crear un Change Set saliente en el entorno sandbox que incluya todos los componentes relevantes (definición del agente, plantillas de prompt, configuraciones de temas, Flows y permisos) y luego cargarlo a producción para su validación y despliegue."
}, {
    "id": 152,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) necesita crear una plantilla de prompt personalizada que se pueda llamar desde un componente web Lightning (Lightning web component). ¿Qué tipo de plantilla de prompt debería crear UC?",
    "choices": ["Field Generation", "Sales Email", "Flex"],
    "correctAnswerText": "Flex",
    "explanation": "La Guía de integración de desarrolladores de AgentForce especifica que las plantillas de prompt Flex son el tipo correcto para integraciones personalizadas o incrustadas, como invocar un prompt desde un Lightning Web Component (LWC). Las plantillas Flex están diseñadas para casos de uso de propósito general y se pueden llamar mediante programación a través de API de Apex, Flow o LWC. Ofrecen estructuras de entrada y salida flexibles, lo que permite a los desarrolladores integrar el razonamiento de AgentForce en aplicaciones y componentes de interfaz de usuario personalizados."
}, {
    "id": 153,
    "category": "Prompt Engineering",
    "question": "Northern Trail Outfitters (NTO) desea configurar la Einstein Trust Layer en su org de producción, pero no puede ver la opción en la página de Setup. Después de aprovisionar Data Cloud, ¿qué paso debe tomar un especialista en IA para que esta opción esté disponible para NTO?",
    "choices": ["Activar Agent.", "Activar Einstein Generative AI.", "Activar Prompt Builder."],
    "correctAnswerText": "Activar Einstein Generative AI.",
    "explanation": "Para que Northern Trail Outfitters (NTO) pueda configurar la Einstein Trust Layer, la función Einstein Generative AI debe estar habilitada. La Einstein Trust Layer está estrechamente vinculada a las capacidades de IA generativa, garantizando que el contenido generado por IA cumpla con los estándares de privacidad de datos, seguridad y confianza."
}, {
    "id": 154,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea mejorar la eficiencia al responder a las preguntas de los clientes y reducir el tiempo de gestión de los agentes con respuestas generadas por IA. Los agentes deben ser capaces de aprovechar su base de conocimiento existente e identificar si las respuestas provienen del modelo de lenguaje de gran tamaño (LLM) o de Salesforce Knowledge. ¿Qué paso debería tomar UC para cumplir con este requisito?",
    "choices": ["Activar Service AI Grounding, Grounding con Case y Service Replies.", "Activar Service Replies, Service AI Grounding y Grounding con Knowledge.", "Activar Service AI Grounding y Grounding con Knowledge."],
    "correctAnswerText": "Activar Service Replies, Service AI Grounding y Grounding con Knowledge.",
    "explanation": "Para cumplir con el objetivo de Universal Containers de mejorar la eficiencia y reducir el tiempo de gestión con respuestas generadas por IA, el mejor enfoque es habilitar Service Replies, Service AI Grounding y Grounding con Knowledge. Service Replies genera respuestas automáticamente. Service AI Grounding garantiza que la IA utilice datos de casos relevantes. Grounding con Knowledge garantiza que las respuestas estén respaldadas por artículos de Salesforce Knowledge, lo que permite a los agentes identificar si una respuesta proviene del LLM o de Salesforce Knowledge."
}, {
    "id": 155,
    "category": "AI Agents",
    "question": "¿Qué objeto almacena la transcripción de la conversación entre el cliente y el agente?",
    "choices": ["Messaging End User", "Messaging Session", "Case"],
    "correctAnswerText": "Messaging Session",
    "explanation": "En Agentforce, el objeto Messaging Session almacena la transcripción completa de la conversación entre el cliente y el agente. Mantiene un registro del historial de chat, incluidas las marcas de tiempo, mensajes e interacciones, y es utilizado por Einstein AI para generar resúmenes de trabajo (Work Summaries)."
}, {
    "id": 156,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea implementar una solución en Salesforce con una experiencia de usuario personalizada (custom UX) que permita a los usuarios ingresar un número de pedido de ventas. Posteriormente, el sistema invocará una plantilla de prompt personalizada para crear y mostrar un resumen del encabezado y los detalles del pedido de ventas. ¿Qué solución debería implementar un Agentforce Specialist para cumplir con este requisito?",
    "choices": ["Crear un autolaunched flow e invocar la plantilla de prompt utilizando la acción de Flow estándar \"Prompt Template\".", "Crear un template-triggered prompt flow e invocar la plantilla de prompt utilizando la acción de Flow estándar \"Prompt Template\".", "Crear un screen flow para recopilar el número de pedido de ventas e invocar la plantilla de prompt utilizando la acción de Flow estándar \"Prompt Template\"."],
    "correctAnswerText": "Crear un screen flow para recopilar el número de pedido de ventas e invocar la plantilla de prompt utilizando la acción de Flow estándar \"Prompt Template\".",
    "explanation": "Un Screen Flow proporciona una interfaz de usuario personalizable en Salesforce que permite a los usuarios ingresar datos (como un número de pedido de ventas) mediante campos de entrada. La acción de Flow \"Prompt Template\" permite la integración con Agentforce al pasar la entrada del usuario a una plantilla de prompt personalizada, la cual procesa la información y devuelve el resumen para mostrarlo en pantalla."
}, {
    "id": 157,
    "category": "AI Agents",
    "question": "Universal Containers implementó Agent para sus usuarios. Un usuario se queja de que Agent no elimina actividades de los últimos 7 días. ¿Cuál es la razón de este problema?",
    "choices": ["El permiso Agent Delete Record Action no está asociado al usuario.", "Agent no tiene permiso para eliminar los registros del usuario.", "Agent no admite la acción Delete Record."],
    "correctAnswerText": "Agent no admite la acción Delete Record.",
    "explanation": "Actualmente, Agent admite varias acciones como crear y actualizar registros, pero no admite la acción Delete Record. Por razones de seguridad e integridad de datos, no realiza operaciones de eliminación de registros."
}, {
    "id": 158,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers desea utilizar un agente de IA para responder preguntas sobre garantías. La información sobre garantías ya se ha cargado como datos no estructurados en Data Cloud. Al responder a las preguntas de los usuarios, los resultados deben poder filtrarse por línea de productos y clasificarse por actualizaciones recientes. ¿Qué enfoque debería implementar el Agentforce Specialist?",
    "choices": ["Utilizar el recuperador predeterminado (default retriever) que automáticamente considera la clasificación por recencia.", "Construir un recuperador personalizado (custom retriever) en Einstein Studio con filtros de línea de productos y clasificación por recencia.", "Aplicar incrustaciones semánticas (semantic embeddings) con filtros de metadatos predeterminados para lograr el resultado deseado."],
    "correctAnswerText": "Construir un recuperador personalizado (custom retriever) en Einstein Studio con filtros de línea de productos y clasificación por recencia.",
    "explanation": "De acuerdo con la Guía de integración de AgentForce y Einstein Studio, cuando la empresa requiere una lógica personalizada de clasificación o filtrado (como por línea de productos y recencia), la solución correcta es construir un recuperador personalizado en Einstein Studio. Esto permite configurar filtros de metadatos y funciones de clasificación personalizadas."
}, {
    "id": 159,
    "category": "AI Agents",
    "question": "Universal Containers planea habilitar Agentforce en Slack para que los equipos puedan interactuar con los agentes directamente en los canales de Slack. ¿Qué descripción representa los pasos clave requeridos para habilitar Agentforce en Slack?",
    "choices": ["Habilitar el canal predeterminado de Slack en Agentforce y asignar acceso de agente de Slack a los usuarios.", "Configurar el flujo de trabajo de Slack para invocar la API de Agentforce, lo que permite a los usuarios interactuar con los agentes mediante activadores predefinidos y pasos automatizados.", "Configurar la conexión del agente de Slack y, en Manage Agentforce, instalar el agente, luego asignar acceso de agente a los usuarios."],
    "correctAnswerText": "Configurar la conexión del agente de Slack y, en Manage Agentforce, instalar el agente, luego asignar acceso de agente a los usuarios.",
    "explanation": "La Guía de despliegue de AgentForce para Slack describe los pasos exactos: 1. Configurar la conexión del agente de Slack para vincular Salesforce con el espacio de trabajo de Slack. 2. Instalar el agente en la sección “Manage AgentForce”. 3. Asignar el acceso al agente a usuarios o canales específicos."
}, {
    "id": 160,
    "category": "Prompt Engineering",
    "question": "La dirección necesita poblar un campo de formulario dinámico con un resumen o descripción creada por un modelo de lenguaje de gran tamaño (LLM) para facilitar conversaciones más productivas con los clientes. La dirección también desea mantener a un humano en el proceso (human-in-the-loop) para que sea considerado en su estrategia de IA. ¿Qué tipo de plantilla de prompt debería recomendar el Agentforce Specialist?",
    "choices": ["Field Generation", "Sales Email", "Record Summary"],
    "correctAnswerText": "Field Generation",
    "explanation": "Las plantillas de prompt de tipo Field Generation están diseñadas para poblar campos en formularios dinámicos con contenido generado por IA. Al integrarse en formularios dinámicos, el contenido generado se puede revisar y editar por el usuario antes de guardar el registro, lo que satisface el requisito de mantener a un humano en el proceso (human-in-the-loop)."
}, {
    "id": 161,
    "category": "Data 360 Fundamentals",
    "question": "Para una Agentforce Data Library que contiene archivos cargados, ¿qué ocurre una vez que se crea y configura?",
    "choices": ["Indexa los archivos cargados en una ubicación especificada por el usuario", "Indexa los archivos cargados en Data Cloud", "Indexa los archivos cargados en Salesforce File Storage"],
    "correctAnswerText": "Indexa los archivos cargados en Data Cloud",
    "explanation": "Cuando se configura una Data Library en Agentforce con archivos cargados, los archivos se ingieren e indexan en la base de datos vectorial de Data Cloud para permitir búsquedas semánticas y recuperación de información (RAG) por parte de la IA."
}, {
    "id": 162,
    "category": "Prompt Engineering",
    "question": "¿Qué puede configurar un Salesforce Agentforce Specialist en Data Masking dentro de la Einstein Trust Layer?",
    "choices": ["Los perfiles exentos de enmascaramiento", "Las claves de cifrado para el enmascaramiento", "Las entidades de datos de privacidad que se van a enmascarar"],
    "correctAnswerText": "Las entidades de datos de privacidad que se van a enmascarar",
    "explanation": "En la Einstein Trust Layer, el especialista puede configurar declarativamente qué entidades o tipos de datos de privacidad (como direcciones de correo electrónico, números de teléfono o SSN) deben ser enmascarados antes de enviar el prompt al modelo de lenguaje."
}, {
    "id": 163,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está creando una nueva plantilla de prompt personalizada para poblar un campo con la salida generada. UC habilitó la Einstein Trust Layer para garantizar que los datos de auditoría de IA se capturen y monitoreen para su adopción y posibles mejoras. ¿Qué tipo de plantilla de prompt debería usar UC y qué consideración debería revisar?",
    "choices": ["Field Generation, y que Dynamic Fields esté habilitado", "Field Generation, y que Dynamic Forms esté habilitado", "Flex, y que Dynamic Fields esté habilitado"],
    "correctAnswerText": "Field Generation, y que Dynamic Forms esté habilitado",
    "explanation": "Para poblar un campo de un registro con contenido generado por IA mediante Prompt Builder, se debe seleccionar el tipo de plantilla Field Generation, y el diseño de la página Lightning debe tener habilitada la característica Dynamic Forms para asociar el campo a la plantilla."
}, {
    "id": 164,
    "category": "AI Agents",
    "question": "¿Cómo selecciona Agentforce la acción correcta para resolver la solicitud de un usuario?",
    "choices": ["Cada tema contiene una lista de expresiones de usuario de acciones coincidentes para que el agente pueda mapear la solicitud del usuario al tema y acción correctos.", "El modelo de lenguaje de gran tamaño (LLM) selecciona el tema y la acción correctos, si existen. Si no hay coincidencias, el LLM intenta responder a la solicitud del usuario.", "El motor de razonamiento identifica la acción del agente que se ejecutará por su nombre e instrucciones de entrada de la acción."],
    "correctAnswerText": "El modelo de lenguaje de gran tamaño (LLM) selecciona el tema y la acción correctos, si existen. Si no hay coincidencias, el LLM intenta responder a la solicitud del usuario.",
    "explanation": "Agentforce utiliza un LLM dentro de su motor de razonamiento para interpretar la intención en lenguaje natural del usuario, mapearla con los temas disponibles y ejecutar las acciones correspondientes. Si no encuentra un tema o acción coincidente, el LLM intenta responder directamente utilizando el contexto disponible."
}, {
    "id": 165,
    "category": "AI Agents",
    "question": "Universal Containers utiliza Agentforce for Sales para encontrar oportunidades similares que ayuden a cerrar acuerdos más rápido. El equipo desea comprender los criterios utilizados por el agente para relacionar oportunidades. ¿Cuál es un criterio que utiliza Agentforce for Sales para relacionar oportunidades similares?",
    "choices": ["Las oportunidades coincidentes tienen un estado de Closed Won de los últimos 12 meses.", "Las oportunidades coincidentes se limitan a la misma cuenta.", "Las oportunidades coincidentes se crearon en los últimos 12 meses."],
    "correctAnswerText": "Las oportunidades coincidentes tienen un estado de Closed Won de los últimos 12 meses.",
    "explanation": "Agentforce for Sales analiza datos históricos para encontrar oportunidades similares, priorizando acuerdos con estado \"Closed Won\" de los últimos 12 meses como referencias de éxito relevantes para ayudar a guiar el cierre de nuevas oportunidades."
}, {
    "id": 166,
    "category": "AI Agents",
    "question": "Un Agentforce está creando una acción personalizada para Agentforce. ¿Qué configuración debe probar y ajustar para garantizar que la acción se ejecute según lo esperado?",
    "choices": ["Action Name", "Action Input", "Action Instructions"],
    "correctAnswerText": "Action Instructions",
    "explanation": "Las Action Instructions guían a la IA sobre cómo y cuándo debe ejecutar una acción. Probar y refinarlas garantiza que el motor de razonamiento entienda la lógica, los parámetros necesarios y el propósito de la acción ante diferentes entradas de los usuarios."
}, {
    "id": 167,
    "category": "AI Agents",
    "question": "¿Qué consideraciones debe tener en cuenta un Agentforce Specialist al utilizar el grounding de Record Snapshots en una plantilla de prompt?",
    "choices": ["Las actividades como tareas y eventos están excluidas.", "Los datos vacíos, como campos sin valores o secciones sin límites, se filtran.", "Las direcciones de correo electrónico asociadas con el objeto están excluidas."],
    "correctAnswerText": "Las actividades como tareas y eventos están excluidas.",
    "explanation": "Al fundamentar una plantilla de prompt con Record Snapshots, la información incluida se limita a los campos del registro y relaciones directas. Las actividades (tasks y events) están excluidas de las capturas de pantalla de registros debido a que se almacenan en una jerarquía de objetos independiente."
}, {
    "id": 168,
    "category": "Prompt Engineering",
    "question": "El equipo de soporte de Coral Cloud Resorts necesita crear una plantilla de prompt Flex que resuma historiales de casos complejos para transferencias de agentes. El objetivo es garantizar que los resúmenes sean concisos y sigan una estructura específica de tres partes: Issue, Steps Taken, y Next Action. ¿Qué debería recomendar un Agentforce Specialist para garantizar una salida de datos consistente?",
    "choices": ["Utilizar razonamiento en cadena de pensamientos (chain-of-thought reasoning).", "Definir la estructura de salida deseada con encabezados explícitos en la instrucción.", "Utilizar un Flow desencadenado por plantilla de prompt para formatear las respuestas."],
    "correctAnswerText": "Definir la estructura de salida deseada con encabezados explícitos en la instrucción.",
    "explanation": "La forma más limpia y directa de garantizar un formato de texto estructurado en Prompt Builder es especificar explícitamente las secciones y encabezados requeridos (por ejemplo, Issue, Steps Taken, Next Action) dentro de las instrucciones de la plantilla del prompt."
}, {
    "id": 169,
    "category": "AI Agents",
    "question": "Basado en la expresión del usuario 'Show me all the customers in New York', ¿qué acción estándar de agente utilizará el servicio planificador?",
    "choices": ["Query Records", "Fetch Records", "Select Records"],
    "correctAnswerText": "Query Records",
    "explanation": "Cuando un usuario solicita buscar o mostrar registros filtrados por un criterio (como ubicación), el servicio planificador de Agentforce asigna la acción estándar Query Records para consultar la base de datos de Salesforce."
}, {
    "id": 170,
    "category": "AI Agents",
    "question": "Universal Containers está construyendo un Agentforce Service Agent para ayudar a los clientes a rastrear sus compras. Para almacenar el número de pedido del cliente durante la conversación, el Agentforce Specialist crea e inicializa una variable en Agent Script utilizando la declaración order_id: string = \" \", omitiendo la palabra clave mutable. Durante las pruebas, el agente intenta actualizar esta variable con el número de pedido del usuario a través de la utilidad @utils.setVariables. ¿Cuál es el resultado de esta declaración de variable en tiempo de ejecución?",
    "choices": ["La variable establece su valor predeterminado como mutable; la palabra clave mutable es opcional y no tiene efecto, lo que permite al agente actualizar la variable con éxito.", "La declaración es un error de sintaxis y el agente no se podrá desplegar.", "La variable se trata como de solo lectura; no se puede actualizar mediante acciones o @utils.setVariables en tiempo de ejecución porque carece de la palabra clave mutable. ##"],
    "correctAnswerText": "La variable se trata como de solo lectura; no se puede actualizar mediante acciones o @utils.setVariables en tiempo de ejecución porque carece de la palabra clave mutable. ##",
    "explanation": "En Agent Script, las variables son de solo lectura por defecto a menos que se declaren explícitamente con la palabra clave `mutable`. Intentar modificar una variable no mutable en tiempo de ejecución provocará que la variable no pueda actualizarse."
}, {
    "id": 171,
    "category": "Prompt Engineering",
    "question": "Un gerente de servicio desea utilizar Salesforce Prompt Builder para ayudar a los agentes a resumir las notas de casos de los clientes después de una llamada de soporte. El resumen debe: Capturar el problema del cliente, los pasos de solución de problemas tomados y las acciones siguientes. No tener más de cinco oraciones. Utilizar un lenguaje sencillo sin jerga técnica. Si no se identifica ninguna acción siguiente, el resumen debe indicar explícitamente \"No next action required.\" ¿Qué construcciones clave del prompt cumplen con este requisito?",
    "choices": ["Role, Task, LLM Clarity Score, y Format", "Role, Task, Token Size Limit, y Format", "Task, Context, Constraints, y Format"],
    "correctAnswerText": "Task, Context, Constraints, y Format",
    "explanation": "Las cuatro construcciones fundamentales para estructurar eficazmente un prompt son: Task (la tarea a realizar), Context (la información o antecedentes), Constraints (los límites o reglas como longitud y frases específicas) y Format (la estructura del resultado final)."
}, {
    "id": 172,
    "category": "Data 360 Fundamentals",
    "question": "Cloud Kicks desea que su Agentforce Service Agent recupere datos fácticos actualizados de Internet. ¿Qué paso debe tomar un Agentforce Specialist para garantizar que el agente utilice la capacidad de búsqueda web correctamente?",
    "choices": ["Habilitar la acción estándar Answer Questions with Knowledge específicamente en el subagente General FAQ.", "Mapear el recuperador de búsqueda web a un índice de búsqueda personalizado en Data 360 antes de activar el agente.", "Eliminar el subagente predeterminado General FAQ y reemplazar su función con un nuevo subagente General Web Search."],
    "correctAnswerText": "Eliminar el subagente predeterminado General FAQ y reemplazar su función con un nuevo subagente General Web Search.",
    "explanation": "Para la búsqueda web en Agentforce, la guía de Salesforce establece que se debe configurar el subagente General Web Search y remover el subagente General FAQ, ya que solo un subagente puede usar la acción Answer Questions con esta finalidad de búsqueda."
}, {
    "id": 173,
    "category": "Governance & Observability",
    "question": "Un Agentforce Specialist está intentando solucionar un problema reportado por un usuario final y no ve la sesión en la pestaña Processed Sessions de Agentforce Observability. ¿Qué debería tener en cuenta el especialista?",
    "choices": ["El agente aún no se ha registrado en la aplicación Observability, por lo que no se procesan sesiones.", "La sesión está en cola para ser procesada y se puede ver en la pestaña Unprocessed Sessions.", "Las sesiones se agrupan en lotes en un proceso continuo de 24 horas y los registros deben verificarse nuevamente al día siguiente. ##"],
    "correctAnswerText": "La sesión está en cola para ser procesada y se puede ver en la pestaña Unprocessed Sessions.",
    "explanation": "En Agentforce Observability, las sesiones pasan por estados de procesamiento antes de figurar como completadas. Si una sesión reciente no aparece en la pestaña Processed Sessions, se debe revisar primero la pestaña Unprocessed Sessions, donde se muestran las interacciones pendientes de procesamiento."
}, {
    "id": 174,
    "category": "AI Agents",
    "question": "Un desarrollador está utilizando la CLI de Salesforce para desplegar componentes del agente desde un sandbox a producción. Recientemente realizó cambios en varios temas, instrucciones y acciones. ¿Qué componente de metadatos debe incluir el desarrollador en su archivo package.xml que contenga todos los temas y acciones con los que interactuará el agente?",
    "choices": ["genAiPlannerBundle", "EinsteinAiPlannerBundle", "BotBundle"],
    "correctAnswerText": "genAiPlannerBundle",
    "explanation": "El tipo de metadato que representa la configuración completa del planificador de un agente de IA en la Metadata API de Salesforce (y que agrupa los temas y acciones asociados) es GenAiPlannerBundle (o GenAiPlanner según la versión de API)."
}, {
    "id": 175,
    "category": "Prompt Engineering",
    "question": "Un Agentforce en Universal Containers está intentando configurar una nueva plantilla de prompt Field Generation. Realiza los siguientes pasos: 1. Crea una nueva plantilla de prompt Field Generation. 2. Elige Case como el tipo de objeto. 3. Selecciona el campo personalizado AI_Analysis__c como el campo de destino. Después de crear la plantilla de prompt, el Agentforce Specialist la guarda, prueba y activa. Sin embargo, cuando va a un registro de caso, el campo AI Analysis no muestra el icono de destello (Sparkle) en el lápiz de edición. Cuando el especialista editaba el campo, se comportaba como un campo normal. ¿Qué paso crítico omitió el Agentforce Specialist?",
    "choices": ["Olvidó reactivar el diseño de página Lightning para el objeto Case después de activar su plantilla de prompt Field Generation.", "Olvidó que el objeto Case no está admitido para Field Generation ya que en su lugar se debe usar Einstein Service Replies.", "Olvidó editar el diseño de página Lightning y asociar el campo a una plantilla de prompt."],
    "correctAnswerText": "Olvidó editar el diseño de página Lightning y asociar el campo a una plantilla de prompt",
    "explanation": "Para que un campo muestre el icono de IA (Sparkle) en la página de un registro, no basta con activar la plantilla de prompt; es necesario editar la página Lightning (usando Dynamic Forms) y asociar explícitamente la plantilla de prompt de Field Generation a las propiedades de ese campo."
}, {
    "id": 176,
    "category": "AI Agents",
    "question": "Universal Containers desea implementar un proceso de verificación de clientes donde solo se pueda acceder a la información confidencial de la cuenta después de que el cliente pase la verificación de identidad. El agente debe aplicar esta regla de seguridad de forma determinista sin permitir que el modelo de lenguaje de gran tamaño (LLM) eluda el requisito de verificación. ¿Qué debería recomendar un Agentforce Specialist como la mejor solución?",
    "choices": ["Utilizar variables de contexto para almacenar el estado de verificación en la sesión de mensajería y configurar el agente para verificar estas variables mediante prompts en lenguaje natural durante cada acción confidencial.", "Incluir instrucciones detalladas de verificación en las instrucciones del tema del agente explicando cuándo se debe verificar a los clientes y confiar en el LLM para seguir estas directrices de manera consistente.", "Crear una variable personalizada IsCustomerVerified establecida por una acción de verificación, luego aplicar un filtro condicional utilizando la expresión IsCustomerVerified equals true a todas las acciones de datos confidenciales, garantizando un control de acceso determinista que el LLM no pueda alterar."],
    "correctAnswerText": "Crear una variable personalizada IsCustomerVerified establecida por una acción de verificación, luego aplicar un filtro condicional utilizando la expresión IsCustomerVerified equals true a todas las acciones de datos confidenciales, garantizando un control de acceso determinista que el LLM no pueda alterar.",
    "explanation": "El control de acceso determinista a acciones protegidas se logra mediante variables de estado combinadas con filtros condicionales en las acciones. Esto garantiza que la acción sea invisible e inalcanzable para el motor de razonamiento del LLM mientras la condición no se cumpla."
}, {
    "id": 177,
    "category": "AI Agents",
    "question": "Un Agentforce está creando una acción personalizada en Agent. ¿Qué opción está disponible para que el Agentforce Specialist elija para la acción personalizada del copiloto?",
    "choices": ["Apex trigger", "SOQL", "Flows"],
    "correctAnswerText": "Flows",
    "explanation": "Al crear acciones personalizadas para agentes en Salesforce, una de las opciones declarativas más potentes y utilizadas para definir la lógica de negocio subyacente es invocar un Flow de Salesforce."
}, {
    "id": 178,
    "category": "AI Agents",
    "question": "¿Cuál es la mejor práctica al refinar las instrucciones de una acción personalizada de Agent?",
    "choices": ["Proporcionar ejemplos de mensajes de usuarios que se espera que activen la acción.", "Utilizar frases introductorias y verbos consistentes en múltiples instrucciones de acciones.", "Especificar la persona que solicitará la acción."],
    "correctAnswerText": "Proporcionar ejemplos de mensajes de usuarios que se espera que activen la acción.",
    "explanation": "Suministrar ejemplos claros de enunciados o mensajes de usuario (few-shot examples) en las instrucciones de la acción ayuda a que el motor de razonamiento del LLM reconozca correctamente la intención y active la acción adecuada."
}, {
    "id": 179,
    "category": "Prompt Engineering",
    "question": "¿Cómo garantiza la Einstein Trust Layer que los datos confidenciales estén protegidos al tiempo que genera respuestas útiles y significativas?",
    "choices": ["Los datos enmascarados se desenmascararán durante el trayecto de la respuesta (response journey).", "Los datos enmascarados se desenmascararán durante el trayecto de la solicitud (request journey).", "Las respuestas que no cumplan con el umbral de relevancia se rechazarán automáticamente."],
    "correctAnswerText": "Los datos enmascarados se desenmascararán durante el trayecto de la respuesta (response journey).",
    "explanation": "La Einstein Trust Layer enmascara la información confidencial (PII) antes de enviar el prompt al LLM externo. Cuando el LLM devuelve la respuesta con marcadores de posición, la Trust Layer reemplaza de forma segura esos marcadores con los datos originales durante el trayecto de regreso (response journey)."
}, {
    "id": 180,
    "category": "AI Agents",
    "question": "¿Cuál es una opción válida para el enrutamiento de Omni-Channel para un canal de mensajería?",
    "choices": ["Agentforce Service Agent", "Autolaunched flow", "Agentforce Employee Agent"],
    "correctAnswerText": "Agentforce Service Agent",
    "explanation": "Los canales de mensajería dirigidos a atención a clientes se pueden enrocar mediante Omni-Channel Flows hacia un Agentforce Service Agent como destino de enrutamiento."
}, {
    "id": 181,
    "category": "AI Agents",
    "question": "Universal Containers (UC) ha recibido recientemente un mayor número de casos de soporte. Como resultado, UC contrató a más representantes de soporte y comenzó a asignar algunos de los casos en curso a los nuevos representantes. ¿Qué solución de IA generativa deberían utilizar los nuevos representantes de soporte para comprender los detalles de un caso sin leer cada uno de los comentarios del caso?",
    "choices": ["Agent", "Einstein Sales Summaries", "Einstein Work Summaries"],
    "correctAnswerText": "Einstein Work Summaries",
    "explanation": "Einstein Work Summaries utiliza IA generativa para crear resúmenes automáticos y concisos de los casos y conversaciones de soporte, lo que permite a los nuevos representantes ponerse al tanto rápidamente sin revisar todos los comentarios."
}, {
    "id": 182,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) implementa un recuperador personalizado (custom retriever) para mejorar la precisión de las respuestas generadas por IA. UC nota que el recuperador devuelve demasiados resultados irrelevantes, lo que hace que las respuestas sean menos útiles. ¿Qué debería hacer UC para garantizar que solo se recuperen datos relevantes?",
    "choices": ["Definir filtros para reducir los resultados de búsqueda basados en condiciones específicas.", "Cambiar el índice de búsqueda a un objeto de modelo de datos (DMO) diferente.", "Aumentar la cantidad máxima de resultados devueltos para capturar un conjunto de datos más amplio."],
    "correctAnswerText": "Definir filtros para reducir los resultados de búsqueda basados en condiciones específicas.",
    "explanation": "Configurar filtros en el recuperador personalizado limita el alcance de la búsqueda en función de condiciones específicas de metadatos, evitando que se devuelvan fragmentos irrelevantes y aumentando la precisión del grounding."
}, {
    "id": 183,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) desea que su agente de IA devuelva respuestas rápidamente. UC necesita optimizar la configuración del recuperador para garantizar una latencia mínima al fundamentar las respuestas de la IA. ¿Qué aspecto de configuración debería priorizar UC?",
    "choices": ["Configurar el recuperador para que opere en modo dinámico de modo que modifique la estructura del índice de búsqueda en tiempo de ejecución.", "Garantizar que los filtros del recuperador estén definidos para limitar el alcance de cada búsqueda de manera eficiente.", "Aumentar la configuración de sesgo de recencia para el recuperador limitando el alcance a datos más recientes."],
    "correctAnswerText": "Garantizar que los filtros del recuperador estén definidos para limitar el alcance de cada búsqueda de manera eficiente.",
    "explanation": "Definir filtros precisos reduce el espacio de búsqueda que debe evaluar el recuperador, lo que minimiza el tiempo de procesamiento y la latencia al fundamentar la respuesta de la IA."
}, {
    "id": 184,
    "category": "AI Agents",
    "question": "¿Cuál es la función principal del motor de razonamiento (reasoning engine) en Agentforce?",
    "choices": ["Identificar temas y acciones del agente para responder a las expresiones de los usuarios", "Ofrecer respuestas en lenguaje natural en tiempo real durante las conversaciones", "Generar consultas de registros basadas en el historial de la conversación"],
    "correctAnswerText": "Identificar temas y acciones del agente para responder a las expresiones de los usuarios",
    "explanation": "El motor de razonamiento es el cerebro de Agentforce: evalúa la intención de las expresiones enviadas por el usuario, selecciona los temas (topics) relevantes y determina qué acciones deben ejecutarse."
}, {
    "id": 185,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers desea validar sistemáticamente las respuestas del agente antes del despliegue utilizando un proceso de prueba escalable. ¿Qué enfoque de Testing Center debería implementar la empresa?",
    "choices": ["Cargar una plantilla de prueba CSV estructurada y ejecutar casos de prueba por lotes en Testing Center.", "Interactuar manualmente con el agente en Builder hasta que las respuestas parezcan correctas.", "Utilizar usuarios piloto en producción para marcar respuestas incorrectas después del lanzamiento."],
    "correctAnswerText": "Cargar una plantilla de prueba CSV estructurada y ejecutar casos de prueba por lotes en Testing Center.",
    "explanation": "El método recomendado para la evaluación escalable y objetiva en Agentforce Testing Center es cargar un archivo CSV con un conjunto estructurado de casos de prueba y ejecutar evaluaciones por lotes antes de la activación."
}, {
    "id": 186,
    "category": "AI Agents",
    "question": "En medio de sus ocupadas agendas, los representantes de ventas de Universal Containers dedican tiempo a hacer seguimiento con prospectos y clientes existentes por correo electrónico con respecto a renovaciones o nuevos acuerdos. Pasan muchas horas a lo largo de la semana revisando comunicaciones pasadas y detalles sobre sus clientes antes de realizar su acercamiento. ¿Qué acción estándar de Copilot ayuda a los representantes de ventas a redactar correos electrónicos personalizados para prospectos mediante la generación de texto basado en comunicaciones exitosas anteriores?",
    "choices": ["Agent Action: Find Similar Opportunities", "Agent Action: Draft or Revise Sales Email", "Agent Action: Summarize Record"],
    "correctAnswerText": "Agent Action: Draft or Revise Sales Email",
    "explanation": "La acción estándar `Draft or Revise Sales Email` ayuda a los representantes a redactar o ajustar correos electrónicos de ventas contextualizados rápidamente utilizando datos del CRM e interacciones previas."
}, {
    "id": 187,
    "category": "Data 360 Fundamentals",
    "question": "Cloud Kicks tiene acuerdos legales largos y complejos. Un agente de Agentforce debe ser capaz de recuperar cláusulas específicas que a menudo están anidadas dentro de secciones más grandes. El método de fragmentación estándar no está logrando capturar el contexto completo de estas cláusulas. ¿Qué estrategia de fragmentación debería utilizar un administrador para preservar la estructura de los documentos?",
    "choices": ["Implementar un tamaño de fragmento (chunk size) más pequeño.", "Implementar un tamaño de fragmento (chunk size) más grande.", "Implementar una estrategia de fragmentación basada en palabras clave."],
    "correctAnswerText": "Implementar un tamaño de fragmento (chunk size) más grande.",
    "explanation": "Aumentar el tamaño de fragmentación (chunk size) en documentos con cláusulas legales complejas evita que el texto circundante y el contexto necesario queden divididos entre múltiples fragmentos separados."
}, {
    "id": 188,
    "category": "Prompt Engineering",
    "question": "Un Agentforce activó Einstein Generative AI en Setup. Ahora, al Agentforce Specialist le gustaría crear plantillas de prompt personalizadas en Prompt Builder. Sin embargo, no pueden acceder a Prompt Builder en el menú de Setup. ¿Qué está causando el problema?",
    "choices": ["El conjunto de permisos Prompt Template User no se asignó correctamente.", "El conjunto de permisos Prompt Template Manager no se asignó correctamente.", "El modelo de lenguaje de gran tamaño (LLM) no se configuró correctamente en Data Cloud."],
    "correctAnswerText": "El conjunto de permisos Prompt Template Manager no se asignó correctamente.",
    "explanation": "Para poder crear y administrar plantillas de prompt en Prompt Builder dentro del menú de Setup, el usuario debe tener asignado el conjunto de permisos Prompt Template Manager."
}, {
    "id": 189,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) desea evaluar las funciones generativas de Salesforce, pero tiene inquietudes sobre la exposición de los datos de su empresa a modelos de lenguaje de gran tamaño (LLM) de terceros. Específicamente, UC desea que las siguientes capacidades formen parte del servicio de IA generativa de Einstein: Ningún dato se utiliza para el entrenamiento de LLM ni mejoras de productos por parte de terceros. Ningún dato se retiene fuera de la org de Salesforce de UC. El proveedor del LLM no puede acceder a los datos enviados. ¿Qué propiedad de la Einstein Trust Layer debería destacar el Agentforce Specialist a UC que aborda estos requisitos?",
    "choices": ["Prompt Defense", "Política de retención de datos cero (Zero-Data Retention Policy)", "Data Masking"],
    "correctAnswerText": "Política de retención de datos cero (Zero-Data Retention Policy)",
    "explanation": "La política de retención de datos cero (Zero-Data Retention Policy) garantiza que los proveedores de LLM de terceros no almacenen ni retengan las entradas/salidas de los prompts, ni las utilicen para entrenar sus modelos fuera del entorno seguro de Salesforce."
}, {
    "id": 190,
    "category": "Prompt Engineering",
    "question": "Un administrador de Salesforce desea generar correos electrónicos personalizados y dirigidos que incorporen datos de interacción del cliente. El administrador desea aprovechar modelos de lenguaje de gran tamaño (LLM) para escribir los correos electrónicos y desea reutilizar plantillas para diferentes productos y clientes. ¿Qué enfoque de solución debería aprovechar el administrador?",
    "choices": ["Utilizar plantillas estándar de Sales Email", "Crear un tipo de plantilla de prompt Field Generation", "Crear un tipo de plantilla de prompt Sales Email."],
    "correctAnswerText": "Crear un tipo de plantilla de prompt Sales Email.",
    "explanation": "El tipo de plantilla de prompt `Sales Email` está diseñado específicamente para generar correos electrónicos dinámicos impulsados por IA generativa combinando datos contextuales del CRM con modelos de lenguaje."
}, {
    "id": 191,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea permitir que su equipo de ventas obtenga información sobre los nombres de productos y competidores mencionados durante las llamadas. ¿Cómo debería cumplir UC con este requisito?",
    "choices": ["Habilitar Einstein Conversation Insights, conectar un proveedor de grabación, asignar conjuntos de permisos y personalizar la información con hasta 25 productos.", "Habilitar Einstein Conversation Insights, asignar conjuntos de permisos, definir administradores de grabación y personalizar la información con hasta 50 nombres de competidores.", "Habilitar Einstein Conversation Insights, habilitar la grabación de ventas, asignar conjuntos de permisos y personalizar la información con hasta 50 productos."],
    "correctAnswerText": "Habilitar Einstein Conversation Insights, conectar un proveedor de grabación, asignar conjuntos de permisos y personalizar la información con hasta 25 productos.",
    "explanation": "Configurar Einstein Conversation Insights requiere conectar un proveedor de grabación compatible, asignar conjuntos de permisos a los usuarios y configurar las palabras clave o productos personalizados (con un límite de hasta 25 elementos)."
}, {
    "id": 192,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea incorporar el estado actual de cumplimiento del pedido en un prompt para un modelo de lenguaje de gran tamaño (LLM). El estado del pedido se almacena en el sistema externo de planificación de recursos empresariales (ERP). ¿Qué técnica de grounding de datos debería recomendar el Agentforce Specialist?",
    "choices": ["External Object Record Merge Fields", "External Services Merge Fields", "Apex Merge Fields"],
    "correctAnswerText": "External Object Record Merge Fields",
    "explanation": "Cuando los datos residen en un sistema externo como un ERP y se mapean en Salesforce mediante Salesforce Connect como objetos externos, se pueden usar campos de combinación de registros de objetos externos (External Object Record Merge Fields) para fundamentar los prompts."
}, {
    "id": 193,
    "category": "AI Agents",
    "question": "Universal Containers (UC) planea enviar uno de tres correos electrónicos diferentes a sus clientes según el valor del tiempo de vida del cliente y su segmento de mercado. Considerando que a UC se le exige explicar por qué se seleccionó un correo electrónico determinado, ¿qué modelo de IA debería utilizar UC para lograr esto?",
    "choices": ["Modelo predictivo y modelo generativo", "Modelo generativo", "Modelo predictivo"],
    "correctAnswerText": "Modelo predictivo",
    "explanation": "Los modelos predictivos permiten clasificar o tomar decisiones basadas en datos numéricos e históricos (como puntuaciones de valor de cliente) y ofrecen explicabilidad (explainability) sobre los factores que motivaron la decisión."
}, {
    "id": 194,
    "category": "Testing, Deployment, & Maintenance",
    "question": "La Agent Action de Universal Containers incluye varias clases Apex para el nuevo Agentforce Agent. ¿Cuál es una consideración importante al desplegar Apex que es invocado por una Agent Action?",
    "choices": ["Las clases Apex deben tener al menos un 75% de cobertura de código por pruebas unitarias y todas las dependencias deben estar en el paquete de despliegue.", "Las clases Apex invocadas por una Agent Action se pueden desplegar con menos del 75% de cobertura de prueba siempre que el agente no esté activado en producción.", "Las clases Apex pueden omitir el requisito de cobertura de código del 75% siempre que solo sean utilizadas por el agente."],
    "correctAnswerText": "Las clases Apex deben tener al menos un 75% de cobertura de código por pruebas unitarias y todas las dependencias deben estar en el paquete de despliegue.",
    "explanation": "En Salesforce, todo el código Apex desplegado a producción debe cumplir estrictamente con el requisito del 75% de cobertura de código mediante pruebas unitarias, sin excepciones para los componentes utilizados por agentes."
}, {
    "id": 195,
    "category": "AI Agents",
    "question": "Universal Containers ha construido un Service Agent para su marca de hospitalidad fundamentado en una Data Library de Knowledge que contiene 200 artículos de FAQ sobre reservas, comodidades y políticas de cancelación. El equipo del proyecto estima que la autoría manual de casos de prueba para lograr una cobertura adecuada llevaría tres semanas. Un administrador junior propone que Testing Center puede acelerar significativamente este proceso. ¿Qué paso debería tomar un Agentforce Specialist para generar un conjunto de pruebas inicial completo sin autoría manual de casos de prueba individuales?",
    "choices": ["Cargar casos de prueba.", "Generar casos de prueba basados en el conocimiento disponible para el agente.", "Generar casos de prueba basados en subagentes y acciones."],
    "correctAnswerText": "Generar casos de prueba basados en el conocimiento disponible para el agente.",
    "explanation": "Agentforce Testing Center permite generar automáticamente conjuntos de escenarios de prueba utilizando directamente como fuente los documentos y artículos almacenados en las bases de conocimiento asociadas al agente."
}, {
    "id": 196,
    "category": "AI Agents",
    "question": "El Service Agent de Universal Containers ejecuta una acción de Flow para recuperar registros de Opportunity. El objeto Opportunity tiene un valor predeterminado de la organización (OWD) configurado en Private. El agente no devuelve resultados a pesar de que existen registros coincidentes y la lógica del Flow está configurada correctamente. ¿Qué resolución se adhiere estrictamente al principio de privilegio mínimo?",
    "choices": ["Agregar los permisos de objeto requeridos al conjunto de permisos del Einstein Service Agent User y configurar reglas de uso compartido (sharing rules) adecuadas", "Configurar el Flow de la acción del agente para ejecutarse en System Mode without sharing", "Cambiar el valor predeterminado de la organización del objeto Opportunity a Public Read Only para que el Einstein Service Agent User pueda acceder a los registros"],
    "correctAnswerText": "Agregar los permisos de objeto requeridos al conjunto de permisos del Einstein Service Agent User y configurar reglas de uso compartido (sharing rules) adecuadas",
    "explanation": "El principio de privilegio mínimo exige otorgar únicamente el acceso estrictamente necesario. Asignar los permisos mínimos del objeto al usuario del agente y usar reglas de uso compartido (sharing rules) para dar acceso solo a los registros requeridos preserva la seguridad sin abrir el acceso global ni omitir las reglas con modo sistema."
}, {
    "id": 197,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) planea poblar automáticamente el campo Description en el objeto Account. ¿Qué tipo de plantilla de prompt debería utilizar UC?",
    "choices": ["Plantilla de prompt Field Generation", "Plantilla de prompt Flex", "Plantilla de prompt Sales Email"],
    "correctAnswerText": "Plantilla de prompt Field Generation",
    "explanation": "Las plantillas de prompt de tipo Field Generation están diseñadas específicamente para autocompletar o actualizar un campo de un registro con contenido generado por IA."
}, {
    "id": 198,
    "category": "Prompt Engineering",
    "question": "Además de Recipient y Sender, ¿qué objeto debería utilizar un Agentforce para insertar campos de combinación en un prompt de plantilla de correo electrónico de ventas?",
    "choices": ["Recipient Opportunities", "Recipient Account", "User Organization"],
    "correctAnswerText": "Recipient Account",
    "explanation": "Al crear plantillas de correo de ventas orientadas a B2B, es común utilizar campos de combinación del objeto `Recipient Account` para hacer referencia a datos contextuales de la empresa o cuenta asociada al contacto receptor."
}, {
    "id": 199,
    "category": "AI Agents",
    "question": "Durante la configuración, Universal Containers (UC) olvidó otorgar acceso a Knowledge al Agentforce Service Agent. ¿Qué permiso debe agregar UC para que el agente interactúe con los artículos de Knowledge y responda a las preguntas de los clientes de manera efectiva?",
    "choices": ["Allow View Knowledge y Run Flows", "Access Knowledge records and fields, y Allow View Knowledge", "Access Custom Objects y Manage External Users"],
    "correctAnswerText": "Access Knowledge records and fields, y Allow View Knowledge",
    "explanation": "Para que un agente consulte e interactúe con artículos de Knowledge, su usuario del sistema debe contar con acceso a los campos/registros del objeto Knowledge así como con el permiso `Allow View Knowledge`."
}, {
    "id": 200,
    "category": "Prompt Engineering",
    "question": "Universal Containers está lanzando una nueva iniciativa de IA generativa. ¿De qué limitaciones de Prompt Builder debería estar al tanto el Agentforce Specialist?",
    "choices": ["Los campos de área de texto enriquecido solo se admiten en tipos de plantilla Flex.", "Las creaciones o actualizaciones de las plantillas de prompt no se registran en el Setup Audit Trail.", "Los objetos personalizados solo se admiten para tipos de plantilla Flex."],
    "correctAnswerText": "Las creaciones o actualizaciones de las plantillas de prompt no se registran en el Setup Audit Trail.",
    "explanation": "Una limitación conocida de Prompt Builder es que las modificaciones, creaciones o ediciones de las plantillas de prompt no quedan registradas dentro del historial de auditoría de configuración (Setup Audit Trail)."
}, {
    "id": 201,
    "category": "Testing, Deployment, & Maintenance",
    "question": "¿Qué elemento debería utilizar un Agentforce Specialist en un Omni-Flow para enrocar conversaciones hacia un agente?",
    "choices": ["Route Conversation", "Route Work", "Route to Agent"],
    "correctAnswerText": "Route Work",
    "explanation": "La respuesta correcta es B porque el enrutamiento de Omni-Channel utiliza el elemento de acción Route Work para enviar elementos de trabajo, incluidas las conversaciones de mensajería compatibles, al destino correcto. Al enrocar hacia un Agentforce Service Agent, el Omni-Channel Flow de entrada se configura para que Route Work tenga como destino el Agentforce Service Agent."
}, {
    "id": 202,
    "category": "AI Agents",
    "question": "Un parte interesado del negocio desea utilizar IA para generar un resumen basado en datos de Data Cloud. ¿Qué método(s) debería utilizar el parte interesado para acceder a los datos de Data Cloud desde Prompt Builder?",
    "choices": ["Acceder a objetos de modelo de datos (DMOs) directamente en plantillas Flex, utilizar listas relacionadas de Data Cloud y obtener datos de Data Cloud mediante Flows iniciados por prompt", "Utilizar listas relacionadas de Data Cloud y obtener datos de Data Cloud mediante Flows iniciados por prompt", "Utilizar únicamente API externas para importar datos de Data Cloud a Prompt Builder"],
    "correctAnswerText": "Utilizar listas relacionadas de Data Cloud y obtener datos de Data Cloud mediante Flows iniciados por prompt",
    "explanation": "La Guía de integración de Data Cloud y Prompt Builder explica que la información de Data Cloud se puede acceder directamente a través de listas relacionadas de Data Cloud o mediante Flows iniciados por prompt (prompt-initiated flows), los cuales obtienen los datos relevantes dinámicamente en tiempo de ejecución."
}, {
    "id": 203,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) desea utilizar Flow para traer datos de objetos unificados de Data Cloud a plantillas de prompt. ¿Qué tipo de Flow debería utilizar UC?",
    "choices": ["Data Cloud-triggered flow", "Template-triggered prompt flow", "Unified-object linking flow"],
    "correctAnswerText": "Template-triggered prompt flow",
    "explanation": "Para pasar datos desde objetos unificados de Data Cloud hacia plantillas de prompt en Prompt Builder, la herramienta adecuada es un Template-triggered prompt flow, el cual permite recopilar y formatear la información para enviarla como instrucciones al prompt."
}, {
    "id": 204,
    "category": "Prompt Engineering",
    "question": "Un científico de datos necesita ver y gestionar modelos en Einstein Studio, y también necesita crear plantillas de prompt en Prompt Builder. ¿Qué conjuntos de permisos (permission sets) debería asignar un Agentforce Specialist al científico de datos?",
    "choices": ["Prompt Template Manager y Prompt Template User", "Data Cloud Admin y Prompt Template Manager", "Prompt Template User y Data Cloud Admin"],
    "correctAnswerText": "Data Cloud Admin y Prompt Template Manager",
    "explanation": "El científico de datos requiere permisos administrativos en Data Cloud (Data Cloud Admin) para gestionar modelos en Einstein Studio, y permisos de gestión de plantillas de prompt (Prompt Template Manager) para crear y configurar plantillas en Prompt Builder."
}, {
    "id": 205,
    "category": "AI Agents",
    "question": "Universal Containers agregó recientemente un Flow personalizado para procesar devoluciones y creó una nueva Agent Action. ¿Qué acción debería tomar la empresa para garantizar que el Agentforce Service Agent pueda ejecutar este nuevo Flow como parte de la nueva Agent Action?",
    "choices": ["Recrear el Flow utilizando el usuario agente de Agentforce.", "Asignar el permiso Manage Users al usuario del agente de Agentforce.", "Asignar el permiso Run Flows al usuario del agente de Agentforce."],
    "correctAnswerText": "Asignar el permiso Run Flows al usuario del agente de Agentforce.",
    "explanation": "El Agentforce Service Agent opera bajo un usuario de sistema dedicado (Agentforce Agent User). Para poder invocar y ejecutar un Flow de Salesforce como parte de una Agent Action, este usuario debe contar con el permiso `Run Flows` asignado en su perfil o conjunto de permisos."
}, {
    "id": 206,
    "category": "AI Agents",
    "question": "Un Agentforce en Universal Containers está trabajando en una plantilla de prompt para generar correos electrónicos personalizados para solicitudes de demostración de productos de los clientes. Es importante que el correo electrónico generado por IA se adhiera estrictamente a las directrices, utilizando solo información de la oportunidad asociada y animando al destinatario a tomar la acción deseada. ¿Cómo debería incluir el Agentforce Specialist estas instrucciones en una nueva línea en la plantilla de prompt?",
    "choices": ["Rodearlas con comillas triples ( \" \" \" ).", "Asegurarse de que los campos combinados estén definidos.", "Utilizar llaves {} para encapsular las instrucciones."],
    "correctAnswerText": "Rodearlas con comillas triples ( \" \" \" ).",
    "explanation": "En las plantillas de prompt de Salesforce, las instrucciones que guían el comportamiento o reglas que debe seguir el LLM (como delimitar contexto o dar directivas estrictas) se pueden estructurar encerrando el texto de la instrucción entre comillas triples (\" \"\")."
}, {
    "id": 207,
    "category": "AI Agents",
    "question": "Un Agentforce Specialist está asistiendo a Universal Containers con la solución de problemas de un agente. El especialista nota que el agente no está utilizando las acciones del tema en la secuencia deseada, lo que causa resultados inconsistentes. ¿Qué técnica debería recomendar el Agentforce Specialist para garantizar un control determinista sobre el orden en que se ejecutan las acciones?",
    "choices": ["Especificar el proveedor y la versión del modelo de lenguaje de gran tamaño (LLM).", "Especificar variables y filtros personalizados.", "Especificar el orden de las acciones."],
    "correctAnswerText": "Especificar el orden de las acciones.",
    "explanation": "Para garantizar que las acciones dentro de un tema se ejecuten en una secuencia predecible y determinista (por ejemplo, obtener datos antes de crear un registro), el especialista debe definir y especificar explícitamente el orden de las acciones dentro de la configuración del tema."
}, {
    "id": 208,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers (UC) desearía implementar el Sales Development Representative (SDR) Agent. ¿Qué consideración de canal debería tener en cuenta UC al implementarlo?",
    "choices": ["SDR Agent debe desplegarse en el canal de Messaging.", "SDR Agent solo funciona en el canal de Email.", "SDR Agent también debe desplegarse en el sitio web de la empresa."],
    "correctAnswerText": "SDR Agent solo funciona en el canal de Email.",
    "explanation": "El Agentforce Sales Development Representative (SDR) Agent está diseñado y configurado nativamente para interactuar y nutrir prospectos únicamente a través del canal de correo electrónico (Email)."
}, {
    "id": 209,
    "category": "AI Agents",
    "question": "Universal Containers desea utilizar una plantilla de prompt existente dentro de Flow como parte de una automatización. ¿Qué se puede utilizar?",
    "choices": ["Invocable Apex", "Einstein for Flow", "Flow action"],
    "correctAnswerText": "Flow action",
    "explanation": "Las plantillas de prompt creadas en Prompt Builder se pueden invocar directamente dentro de un Flow declarativo utilizando el elemento de acción de núcleo de Flow (`Flow Core Action: Prompt Template`)."
}, {
    "id": 210,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) ha implementado IA generativa dentro de Salesforce para permitir el resumen de un objeto personalizado llamado Guest. Los usuarios han informado discrepancias en la información generada. Al refinar su estrategia de diseño de prompts, ¿qué prácticas clave debería priorizar UC?",
    "choices": ["Habilitar el modo de prueba de prompt, asignar diferentes variaciones de prompt a un subconjunto de usuarios para su evaluación y estandarizar el modelo más efectivo basado en los comentarios de rendimiento.", "Crear plantillas de prompt concisas, claras y consistentes con grounding efectivo, juegos de rol contextuales (role-playing), instrucciones claras y retroalimentación iterativa.", "Enviar un caso de revisión de prompt a Salesforce y realizar pruebas exhaustivas en el playground para refinar las salidas hasta que cumplan con las expectativas de los usuarios."],
    "correctAnswerText": "Crear plantillas de prompt concisas, claras y consistentes con grounding efectivo, juegos de rol contextuales (role-playing), instrucciones claras y retroalimentación iterativa.",
    "explanation": "La mejor práctica para refinar el diseño de prompts y eliminar discrepancias o alucinaciones en los resúmenes es estructurar plantillas concisas y claras, con grounding adecuado sobre los datos correctos, asignación explícita de rol al modelo e instrucciones precisas con iteración continua."
}, {
    "id": 211,
    "category": "AI Agents",
    "question": "Un gerente de ventas está utilizando Agent Assistant para optimizar sus tareas diarias. Le pide al agente: \"Show me a list of my open opportunities\". ¿Cómo identifica y ejecuta el modelo de lenguaje de gran tamaño (LLM) en Agentforce la acción para mostrar al gerente de ventas una lista de oportunidades abiertas?",
    "choices": ["El LLM interpreta la solicitud del usuario, genera un plan identificando los temas y acciones apropiados, y ejecuta las acciones para recuperar y mostrar las oportunidades abiertas", "El LLM utiliza un conjunto estático de reglas para hacer coincidir la solicitud del usuario con temas y acciones predefinidos, omitiendo la necesidad de interpretación dinámica y planificación.", "Utilizando un patrón de diálogo, el LLM hace coincidir la consulta del usuario con el tema, la acción y los pasos disponibles y luego realiza los pasos para cada acción, como recuperar una lista de oportunidades abiertas."],
    "correctAnswerText": "El LLM interpreta la solicitud del usuario, genera un plan identificando los temas y acciones apropiados, y ejecuta las acciones para recuperar y mostrar las oportunidades abiertas",
    "explanation": "Agentforce procesa las solicitudes convirtiendo las intenciones expresadas en lenguaje natural en un plan dinámico creado por su servicio planificador, identificando los temas y acciones adecuados para consultar los datos del CRM y presentarlos al usuario."
}, {
    "id": 212,
    "category": "Data 360 Fundamentals",
    "question": "Un Agentforce Specialist en Cloud Kicks desea construir un agente impulsado por Retrieval-Augmented Generation (RAG) fundamentado en documentos PDF basados en texto. El especialista desea un enfoque de inicio rápido que genere automáticamente todos los componentes subyacentes, incluidos el almacén de datos vectoriales, el índice de búsqueda, el recuperador y la acción estándar. ¿Qué función debería utilizar el especialista?",
    "choices": ["Ensemble Retriever", "Agentforce Data Library", "Search Index"],
    "correctAnswerText": "Agentforce Data Library",
    "explanation": "Agentforce Data Library es la función de inicio rápido integrada de Salesforce que aprovisiona automáticamente toda la canalización RAG completa: almacena los archivos, genera el índice vectorial en Data Cloud, crea el recuperador predeterminado y configura las acciones asociadas para el agente."
}, {
    "id": 213,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist está trabajando declarativamente en la versión 4 de una plantilla de prompt, la cual es significativamente diferente de la versión 3 anterior. Luego se identifica un error en la versión 3 que requiere una corrección urgente (hotfix) para desplegarse a producción de inmediato por parte de otro equipo. El equipo desplegará este cambio como una nueva versión. ¿Qué debería hacer el especialista para garantizar que su trabajo en la última versión no se pierda y no entre en conflicto con la nueva versión?",
    "choices": ["Crear una nueva plantilla de prompt con la corrección del error, actualizar todas las referencias a la nueva versión y eliminar la plantilla de prompt antigua.", "Guardar su trabajo en la versión 4 y permitir que la plantilla se despliegue con una nueva versión 5 que contenga la corrección.", "Copiar y pegar la versión 4 en un archivo de respaldo o alternativa de control de versiones, y permitir que el otro equipo sobrescriba el contenido de la versión 4 con la versión corregida."],
    "correctAnswerText": "Guardar su trabajo en la versión 4 y permitir que la plantilla se despliegue con una nueva versión 5 que contenga la corrección.",
    "explanation": "El sistema de control de versiones de plantillas de prompt permite guardar borradores como nuevas versiones. El especialista puede conservar su trabajo en la versión 4 mientras el otro equipo despliega la corrección como una versión 5 independiente que se pueda activar de inmediato sin perder el trabajo previo."
}, {
    "id": 214,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) tiene una plantilla de prompt Flex que se ha utilizado durante los últimos tres meses para responder preguntas basadas en las entradas del usuario. Ahora, UC desea proporcionar un PDF como segunda entrada. ¿Cuál es el mejor enfoque para que el Agentforce Specialist cumpla con este requisito?",
    "choices": ["Reindexar para agregar un nuevo recurso a una plantilla existente.", "Agregar un recurso en cualquier momento navegando a la sección Resources y configurando las entradas.", "Desechar la plantilla Flex actual y crear una nueva con un recurso."],
    "correctAnswerText": "Agregar un recurso en cualquier momento navegando a la sección Resources y configurando las entradas.",
    "explanation": "Las plantillas de prompt Flex admiten múltiples entradas dinámicas. Para incluir una nueva entrada (como un archivo PDF), el especialista simplemente debe ir a la sección de Resources en Prompt Builder y agregar/configurar el recurso adicional sin necesidad de recrear la plantilla."
}, {
    "id": 215,
    "category": "Data 360 Fundamentals",
    "question": "Al configurar una Data Library basada en la carga de archivos, ¿cuáles son los tamaños máximos de archivo permitidos para archivos de texto o HTML y archivos PDF, respectivamente?",
    "choices": ["Hasta 100 MB para archivos de texto o HTML y hasta 4 MB para archivos PDF", "Hasta 50 MB tanto para archivos de texto o HTML como para archivos PDF", "Hasta 4 MB para archivos de texto o HTML y hasta 100 MB para archivos PDF ##"],
    "correctAnswerText": "Hasta 4 MB para archivos de texto o HTML y hasta 100 MB para archivos PDF ##",
    "explanation": "Para las Agentforce Data Libraries basadas en archivos cargados, los límites máximos de tamaño por tipo de archivo son de hasta 4 MB para archivos de texto plano o HTML y de hasta 100 MB para archivos PDF."
}, {
    "id": 216,
    "category": "Prompt Engineering",
    "question": "¿Cómo debería utilizar una organización la Einstein Trust Layer para auditar, rastrear y ver datos enmascarados?",
    "choices": ["Utilizar la ruta de auditoría (audit trail) que captura y almacena todos los prompts enviados al LLM en Data Cloud.", "En Setup, utilizar Prompt Builder para enviar un prompt al LLM solicitando los datos enmascarados.", "Acceder a la ruta de auditoría en Setup y exportar todos los prompts generados por los usuarios."],
    "correctAnswerText": "Utilizar la ruta de auditoría (audit trail) que captura y almacena todos los prompts enviados al LLM en Data Cloud.",
    "explanation": "La Einstein Trust Layer registra la actividad de las llamadas a modelos de IA generativa en una ruta de auditoría centralizada en Data Cloud, lo que permite auditar qué campos fueron enmascarados, revisar las puntuaciones de toxicidad y hacer seguimiento del uso."
}, {
    "id": 217,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está implementando IA generativa y desea aprovechar una plantilla de prompt para proporcionar respuestas a los clientes que brinden recomendaciones de productos personalizadas a los visitantes del sitio web en función de su historial de navegación. ¿Qué paso inicial debería tomar UC para garantizar que el chatbot pueda entregar recomendaciones precisas?",
    "choices": ["Diseñar recomendaciones universales de productos.", "Escribir un script de respuesta para el chatbot.", "Recopilar y analizar datos de navegación."],
    "correctAnswerText": "Recopilar y analizar datos de navegación.",
    "explanation": "El paso fundamental para habilitar recomendaciones personalizadas mediante IA es recopilar y estructurar adecuadamente los datos de comportamiento e historial de navegación del usuario (por ejemplo en Data Cloud), los cuales servirán como grounding para la plantilla de prompt."
}, {
    "id": 218,
    "category": "AI Agents",
    "question": "Un Agentforce creó una Agent action personalizada, pero el servicio planificador no la está seleccionando en el orden correcto. ¿Qué ajuste debería hacer el especialista en IA en las instrucciones de la Agent action personalizada para que el servicio planificador funcione según lo esperado?",
    "choices": ["Especificar las acciones dependientes haciendo referencia al nombre API de la acción.", "Especificar los perfiles o permisos personalizados permitidos para invocar la acción.", "Especificar el proveedor y la versión del modelo LLM que se utilizarán para invocar la acción."],
    "correctAnswerText": "Especificar las acciones dependientes haciendo referencia al nombre API de la acción.",
    "explanation": "Para orientar al servicio planificador sobre la secuencia de ejecución cuando una acción requiere datos o la ejecución previa de otra, se deben especificar explícitamente las acciones dependientes utilizando su nombre API en las instrucciones de la acción."
}, {
    "id": 219,
    "category": "AI Agents",
    "question": "¿Cuál es un propósito clave de las instrucciones de la acción (action instructions) al crear una Agent action personalizada en Agentforce?",
    "choices": ["Las instrucciones de la acción ayudan al motor de razonamiento a decidir qué acción utilizar.", "Las instrucciones de la acción definen la temperatura del modelo de lenguaje de gran tamaño (LLM) que impulsa el motor de razonamiento.", "Las instrucciones de la acción le dicen al usuario cómo llamar a esta acción en una conversación."],
    "correctAnswerText": "Las instrucciones de la acción ayudan al motor de razonamiento a decidir qué acción utilizar.",
    "explanation": "Las action instructions describen el propósito, el contexto y los casos de uso de la acción, lo que permite al motor de razonamiento evaluar y decidir cuándo es adecuado seleccionar e invocar esa acción en respuesta a la interacción del usuario."
}, {
    "id": 220,
    "category": "Governance & Observability",
    "question": "El Agentforce Specialist de Universal Containers sospecha que el Service Agent está clasificando sistemáticamente de forma errónea las intenciones de disputas de facturación bajo un tema de consulta general, lo que hace que se ejecuten acciones incorrectas. El administrador necesita identificar este patrón a través de las sesiones sin revisar las transcripciones individuales. ¿Qué debería recomendar el especialista?",
    "choices": ["Habilitar Session Tracing en Agentforce Observability y consultar el Data 360 Session Tracing Data Model directamente", "Utilizar Agent Optimization en Agentforce Studio, que segmenta las sesiones de producción en momentos y genera clústeres de intenciones del sistema semanalmente a partir del análisis entre sesiones", "Cargar un conjunto representativo de expresiones de disputas de facturación en Agentforce Testing Center y ejecutar una prueba por lotes comparando las clasificaciones de temas esperadas con las reales para identificar el alcance del patrón de clasificación errónea a través de las intenciones de producción"],
    "correctAnswerText": "Utilizar Agent Optimization en Agentforce Studio, que segmenta las sesiones de producción en momentos y genera clústeres de intenciones del sistema semanalmente a partir del análisis entre sesiones",
    "explanation": "La respuesta correcta es B porque el requisito es descubrir un patrón recurrente de clasificación errónea en todas las sesiones de producción sin leer manualmente las transcripciones. Agent Optimization está creado para este caso de uso de observabilidad. Extiende las capacidades de rastreo de sesiones con estructuras de datos adicionales que rastrean los momentos de la sesión y la intención del usuario, lo que permite a los equipos comprender los clústeres de intenciones y los patrones de comportamiento recurrentes. La opción A es demasiado manual porque consultar datos de rastreo de sesiones sin procesar requiere trabajo de análisis y no proporciona directamente información sobre clústeres de intenciones. La opción C es útil para pruebas de despliegue previo o regresión, pero no analiza sesiones de producción reales a menos que el conjunto de pruebas ya refleje el problema en vivo. La documentación de Salesforce describe Agent Optimization como el seguimiento de momentos de sesión e intenciones de usuario a través de DLO y DMO adicionales."
}, {
    "id": 221,
    "category": "AI Agents",
    "question": "Un agente de servicio está viendo un objeto personalizado que almacena información de viajes. Recientemente recibió una alerta meteorológica y ahora necesita cancelar los vuelos de los clientes relacionados con este itinerario. El agente de servicio necesita revisar los artículos de Knowledge sobre la cancelación y reprogramación de vuelos de clientes. ¿Qué capacidad de Agent ayuda al agente a lograr esto?",
    "choices": ["Ejecutar tareas basadas en las acciones disponibles, respondiendo preguntas utilizando información de artículos de Knowledge accesibles.", "Invocar un Flow que realiza una llamada a datos externos para crear un artículo de Knowledge.", "Generar un artículo de Knowledge basado en los prompts que ingresa el agente para crear pasos para cancelar vuelos."],
    "correctAnswerText": "Ejecutar tareas basadas en las acciones disponibles, respondiendo preguntas utilizando información de artículos de Knowledge accesibles.",
    "explanation": "En este escenario, la capacidad de Agent que mejor ayuda al agente es su habilidad para ejecutar tareas basadas en las acciones disponibles y responder preguntas utilizando datos de los artículos de Knowledge. Agent puede ayudar al agente de servicio brindándole artículos de Knowledge relevantes sobre la cancelación y reprogramación de vuelos, garantizando que el agente tenga acceso a los pasos y procedimientos correctos directamente dentro del flujo de trabajo. Esta función aprovecha el contexto existente del agente (el itinerario de viaje) y brinda información útil o pasos a seguir de los artículos de Knowledge relevantes para ayudar al agente a resolver rápidamente las necesidades del cliente. Las otras opciones son incorrectas: B se refiere a invocar un flujo para crear un artículo de Knowledge, lo cual no está relacionado con la tarea de recuperar artículos de Knowledge existentes. C se centra en generar artículos de Knowledge, lo cual no es la necesidad inmediata en esta situación donde el agente requiere orientación sobre los procedimientos existentes."
}, {
    "id": 222,
    "category": "Data 360 Fundamentals",
    "question": "Coral Cloud Resorts está implementando la recuperación de Agentforce. Los clientes a veces escriben términos ambiguos (por ejemplo, \"paquete\" podría significar paquete de vacaciones o equipaje). ¿Qué estrategia de recuperación equilibra mejor la precisión y la desambiguación contextual?",
    "choices": ["Utilizar la búsqueda híbrida (hybrid search), que combina la coincidencia de palabras clave para la precisión con incrustaciones semánticas (semantic embeddings) para el contexto.", "Utilizar solo la búsqueda semántica, que captura la intención pero puede tener dificultades con términos ambiguos cuando no se proporciona contexto.", "Utilizar solo la búsqueda por palabras clave, que prioriza la coincidencia exacta de términos pero corre el riesgo de perder el significado contextual."],
    "correctAnswerText": "Utilizar la búsqueda híbrida (hybrid search), que combina la coincidencia de palabras clave para la precisión con incrustaciones semánticas (semantic embeddings) para el contexto.",
    "explanation": "Según la Guía de optimización de recuperación de AgentForce, al manejar términos de búsqueda ambiguos como “paquete”, que pueden referirse a múltiples conceptos, el enfoque recomendado es utilizar la búsqueda híbrida. La documentación define la búsqueda híbrida como: “Un método de recuperación combinado que aprovecha la precisión basada en palabras clave y las incrustaciones semánticas para capturar la intención contextual. Este enfoque garantiza un alto nivel de recuperación al tiempo que mantiene la precisión de términos exactos.” Este método permite a AgentForce resolver la ambigüedad al utilizar el contexto semántico para interpretar el significado al tiempo que mantiene la precisión basada en palabras clave para coincidencias deterministas."
}, {
    "id": 223,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) ha construido un recuperador personalizado (custom retriever) en AI Models, anteriormente Einstein Studio, para fundamentar las respuestas de la IA con documentación técnica. UC ahora requiere que se incluya un campo de resumen del índice de búsqueda en el resultado para proporcionar una breve descripción general de cada documento recuperado. ¿Cuál es el curso de acción recomendado para UC?",
    "choices": ["Crear un recuperador personalizado completamente nuevo con una configuración totalmente revisada que incorpore el campo de resumen y eliminar el recuperador actual. No es posible editar el recuperador existente.", "Editar la versión del recuperador existente para agregar el campo de resumen a la lista de campos devueltos por el recuperador, guardar los cambios y activar la nueva versión para que las plantillas de prompt utilicen la configuración actualizada.", "Utilizar únicamente el recuperador predeterminado, que incluirá automáticamente todos los campos disponibles del índice de búsqueda, incluido el campo de resumen, sin necesidad de crear o gestionar recuperadores personalizados."],
    "correctAnswerText": "Editar la versión del recuperador existente para agregar el campo de resumen a la lista de campos devueltos por el recuperador, guardar los cambios y activar la nueva versión para que las plantillas de prompt utilicen la configuración actualizada.",
    "explanation": "La respuesta correcta es B. Un recuperador personalizado controla qué datos indexados se buscan y qué campos se devuelven al prompt o agente. Si UC necesita que se devuelva un campo de resumen, la acción correcta es actualizar la configuración del recuperador, guardar la versión revisada del recuperador y activar esa versión para que la plantilla de prompt la utilice. La opción A es excesiva e incorrecta técnicamente porque la gestión de versiones del recuperador admite actualizaciones controladas en lugar de forzar una reconstrucción completa y eliminación. La opción C es incorrecta porque los recuperadores predeterminados no devuelven automáticamente todos los campos útiles en la estructura exacta que requiere una empresa."
}, {
    "id": 224,
    "category": "AI Agents",
    "question": "Un cliente está autenticado e identificado como con un nivel de membresía bronce, plata u oro. Esos niveles definen qué subagentes o acciones están disponibles para que el agente realice tareas específicas según los derechos basados en el nivel. ¿Cuál es la mejor manera de garantizar que el agente responda de manera adecuada?",
    "choices": ["Utilizar before reasoning para establecer variables personalizadas que se utilizarán en filtros y lógica de flujo.", "Utilizar after reasoning para establecer variables personalizadas que se utilizarán en filtros y lógica de flujo.", "Utilizar Agent Router para establecer variables personalizadas que se utilizarán en filtros y lógica de flujo."],
    "correctAnswerText": "Utilizar before reasoning para establecer variables personalizadas que se utilizarán en filtros y lógica de flujo.",
    "explanation": "La respuesta correcta es A. Los datos de derechos deben estar disponibles antes de que el motor de razonamiento decida qué subagentes o acciones son elegibles. Establecer variables personalizadas en `before reasoning` garantiza que el nivel de membresía se hidrate lo suficientemente temprano como para impulsar filtros deterministas, reglas de `available when` y entradas de flujo. La opción B es incorrecta porque `after reasoning` ocurre demasiado tarde para la visibilidad inicial de las acciones y las decisiones de enrutamiento en el ciclo de razonamiento actual. La opción C es incorrecta porque Agent Router es para la lógica de enrutamiento/clasificación, no el mejor lugar para establecer un estado de derechos reutilizable para filtros de acciones y lógica de flujo posterior."
}, {
    "id": 225,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) ha configurado una biblioteca de datos (data library) y desea restringir la indexación de artículos de conocimiento únicamente a aquellos que estén disponibles públicamente en su base de conocimientos. UC también desea que el agente vincule las fuentes en las que el modelo de lenguaje de gran tamaño (LLM) fundamentó su respuesta. ¿Qué configuraciones deberían ayudar a UC con esto?",
    "choices": ["En la ventana de configuración de la biblioteca de datos, en Knowledge Settings, habilitar Use Public Knowledge Article y seleccionar Show sources.", "En la ventana de configuración de la biblioteca de datos, en Knowledge Settings, habilitar Use Public Knowledge Article. No es posible mostrar los artículos en los que el LLM fundamentó su respuesta.", "Utilizar Data Categories para categorizar los artículos disponibles públicamente que se van a indexar. Las fuentes se muestran automáticamente cuando los artículos de conocimiento se categorizan como Public."],
    "correctAnswerText": "En la ventana de configuración de la biblioteca de datos, en Knowledge Settings, habilitar Use Public Knowledge Article y seleccionar Show sources.",
    "explanation": "Según la Guía de configuración de la biblioteca de datos de AgentForce, los administradores pueden restringir la indexación y recuperación de artículos de Knowledge a aquellos disponibles públicamente y habilitar la visibilidad de las fuentes para las respuestas fundamentadas en el LLM. La documentación establece: “Dentro de la configuración de la biblioteca de datos, en Knowledge Settings, habilite ‘Use Public Knowledge Articles’ para garantizar que solo se indexe el contenido visible públicamente. Para mostrar citas, habilite ‘Show Sources’ para que el agente vincule los artículos o registros de datos específicos utilizados para fundamentar su respuesta.”"
}, {
    "id": 226,
    "category": "AI Agents",
    "question": "Coral Cloud Resorts necesita asegurarse de que su agente de reservas ejecute las acciones en una secuencia específica: primero recuperar las sesiones disponibles, luego verificar la elegibilidad del cliente y finalmente crear la reserva. La implementación actual permite que el modelo de lenguaje de gran tamaño (LLM) ejecute estas acciones en cualquier orden, lo que provoca fallos en las reservas. ¿Qué enfoque debería implementar un AgentForce Specialist?",
    "choices": ["Escribir instrucciones detalladas del tema especificando la secuencia exacta de acciones utilizando pasos numerados y requisitos de orden explícitos para que el motor de razonamiento los siga durante los flujos de trabajo de reserva.", "Crear variables personalizadas que almacenen el estado de finalización de cada paso, luego implementar filtros condicionales en las acciones posteriores que requieran que las variables anteriores estén pobladas, garantizando un orden de ejecución determinista.", "Configurar el tema, la descripción de clasificación y las instrucciones de la acción con niveles de prioridad e indicadores de secuencia para guiar al motor de razonamiento en la selección del orden de acción correcto de forma automática."],
    "correctAnswerText": "Crear variables personalizadas que almacenen el estado de finalización de cada paso, luego implementar filtros condicionales en las acciones posteriores que requieran que las variables anteriores estén pobladas, garantizando un orden de ejecución determinista.",
    "explanation": "Según las Directrices de orquestación y secuenciación de acciones de AgentForce, el orden de ejecución determinista se logra mejor mediante el uso de variables de estado personalizadas y lógica condicional en lugar de depender únicamente del razonamiento del LLM o de las instrucciones del tema. El marco de orquestación de AgentForce permite definir variables que representan la finalización exitosa de acciones específicas. Las acciones posteriores pueden incluir filtros condicionales que solo permiten la ejecución si se han completado los pasos previos. La opción A no impone el orden programáticamente. La opción C ayuda en la selección contextual pero no crea un control basado en dependencias entre acciones."
}, {
    "id": 227,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) desea garantizar que su equipo de cumplimiento pueda recuperar coincidencias exactas de números de cláusulas de políticas desde una biblioteca de documentos legales estructurada. ¿Qué tipo de búsqueda debería implementar UC?",
    "choices": ["Utilizar la búsqueda por palabras clave para la coincidencia exacta de términos en campos estructurados como números de cláusulas.", "Utilizar la búsqueda híbrida para combinar la recuperación por palabras clave y semántica.", "Utilizar la búsqueda semántica para interpretar sinónimos de cláusulas de forma dinámica."],
    "correctAnswerText": "Utilizar la búsqueda por palabras clave para la coincidencia exacta de términos en campos estructurados como números de cláusulas.",
    "explanation": "Según la Guía de optimización de búsqueda de AgentForce, cuando el caso de uso requiere recuperar coincidencias exactas (como números de cláusulas de políticas, identificadores legales o ID de facturas) de datos estructurados, el enfoque recomendado es utilizar la búsqueda por palabras clave (keyword search). La búsqueda por palabras clave garantiza la recuperación determinista de coincidencias de términos exactos en campos estructurados, preservando la precisión para identificadores, valores numéricos y referencias de código."
}, {
    "id": 228,
    "category": "Governance & Observability",
    "question": "Un cliente desea analizar las interacciones completas del agente, desde la solicitud inicial del usuario hasta la resolución final, para comprender mejor el comportamiento del agente y la calidad de la respuesta. ¿Qué función de Agentforce debería recomendar un Agentforce Specialist?",
    "choices": ["Agent Inspection", "Agent Insights", "Agent Optimization"],
    "correctAnswerText": "Agent Optimization",
    "explanation": "Agent Optimization es la función diseñada dentro del ecosistema de observabilidad de Agentforce para revisar y analizar patrones de sesión completos, interacciones consolidadas y rendimiento del agente a lo largo de flujos conversacionales de extremo a extremo."
}, {
    "id": 229,
    "category": "Governance & Observability",
    "question": "Universal Containers desplegó recientemente un agente de servicio al cliente para gestionar consultas comunes. Después de un mes de uso, el gerente de soporte desea analizar el rendimiento del agente. Necesita ver métricas agregadas como la tasa de escalación a agentes humanos, la duración promedio de la sesión y qué temas tienen las puntuaciones de resolución más bajas para poder priorizar qué acciones del agente necesitan optimización. ¿Qué capacidad nativa de Salesforce debería utilizar el Agentforce Specialist para proporcionar esta información y guiar la estrategia de optimización?",
    "choices": ["Agentforce Observability, aprovechando los paneles de Agent Analytics y el Session Tracing Data Model para revisar el rendimiento agregado y profundizar en interacciones específicas con bajo rendimiento.", "El registro de auditoría de Einstein Trust Layer, exportando los registros JSON sin procesar para medir el uso de tokens y la configuración de temperatura de cada sesión de usuario.", "El informe de optimización de Salesforce, programando un escaneo mensual para identificar subagentes en desuso y acciones de agente no utilizadas en toda la org. ##"],
    "correctAnswerText": "Agentforce Observability, aprovechando los paneles de Agent Analytics y el Session Tracing Data Model para revisar el rendimiento agregado y profundizar en interacciones específicas con bajo rendimiento.",
    "explanation": "La respuesta correcta es A. El requisito es observabilidad operativa: tasa de escalación, duración de la sesión, efectividad del tema y la capacidad de priorizar las acciones del agente con bajo rendimiento. Agentforce Observability es el área nativa de Salesforce para esto porque incluye Agent Analytics para métricas de rendimiento agregadas y datos a nivel de sesión para una investigación más profunda. La opción B es incorrecta porque el registro de auditoría de Einstein Trust Layer es principalmente para datos de gobernanza y auditoría. La opción C no es una capacidad nativa estándar de Salesforce para estas métricas de Agentforce."
}, {
    "id": 230,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea poblar automáticamente el campo Description en el objeto Account.",
    "choices": ["Sales Email", "Flex", "Field Generation"],
    "correctAnswerText": "Field Generation",
    "explanation": "Haciendo referencia nuevamente a los tipos de plantillas: la plantilla Field Generation está destinada a poblar un campo específico en un registro. Dado que UC desea poblar el campo Description en el objeto Account, eso coincide exactamente. \"Flex\" es para escenarios multiobjeto más complejos; \"Sales Email\" es para la generación de correos electrónicos. Por lo tanto, la respuesta correcta es C."
}, {
    "id": 231,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) desea implementar un agente de servicio al cliente impulsado por IA que pueda: Recuperar documentos de políticas propietarios almacenados como PDF. Garantizar que las respuestas estén fundamentadas en datos aprobados de la empresa, no en conocimientos genéricos del LLM. ¿Qué debería hacer UC primero?",
    "choices": ["Configurar una Agentforce Data Library para la recuperación de documentos de políticas por parte de la IA.", "Ampliar el alcance del agente de IA para buscar en todos los registros de Salesforce.", "Agregar los archivos al contenido y luego seleccionar la opción de biblioteca de datos."],
    "correctAnswerText": "Configurar una Agentforce Data Library para la recuperación de documentos de políticas por parte de la IA.",
    "explanation": "Para implementar un agente de servicio al cliente impulsado por IA que recupere documentos de políticas propietarios (almacenados como PDF) y garantice que las respuestas estén fundamentadas en datos aprobados de la empresa, UC debe establecer primero una base para que la IA acceda a estos datos y los utilice. La Agentforce Data Library (Opción A) es el punto de partida correcto. Una biblioteca de datos permite a UC cargar archivos PDF con documentos de políticas, indexarlos en la base de datos vectorial de Salesforce Data Cloud y hacerlos disponibles para la recuperación de la IA."
}, {
    "id": 232,
    "category": "AI Agents",
    "question": "Cloud Kicks desea integrar su agente con su sitio web personalizado. El objetivo es que los clientes interactúen con la interfaz de chat del agente personalizado. ¿Qué enfoque proporciona el marco de trabajo para que la aplicación web personalizada se comunique con el agente?",
    "choices": ["Agent-to-Agent (A2A)", "Model Context Protocol (MCP)", "Agent API"],
    "correctAnswerText": "Agent API",
    "explanation": "La Guía de integración de la API de AgentForce define la Agent API como el marco de trabajo que permite que las aplicaciones web o móviles externas se comuniquen directamente con agentes alojados en Salesforce. Esta API admite el intercambio de mensajes, la gestión de sesiones y la persistencia del contexto, lo que permite a los desarrolladores crear interfaces de chat personalizadas manteniendo una conectividad segura y en tiempo real con el motor de razonamiento de AgentForce."
}, {
    "id": 233,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers tiene guías de mantenimiento en PDF en una carpeta externa, que aún no están en Salesforce. El equipo desea una configuración estándar sin código (clicks-only) para que el Service Agent utilice estos documentos. ¿Qué enfoque debería implementar el Agentforce Specialist?",
    "choices": ["Pegar enlaces PDF externos en las instrucciones del tema y confiar en que el modelo los siga, evitando la configuración de una fuente de recuperación, índice o acción de recuperador.", "Cargar los PDF como File source en la Agentforce Data Library, lo que creará un Search Index y creará un recuperador para fundamentar las respuestas de esos documentos.", "Configurar Data Cloud para ingerir archivos adjuntos y crear un índice y recuperador personalizados para el registro del producto y los datos del archivo adjunto."],
    "correctAnswerText": "Cargar los PDF como File source en la Agentforce Data Library, lo que creará un Search Index y creará un recuperador para fundamentar las respuestas de esos documentos.",
    "explanation": "Según la Guía de configuración de recuperación y biblioteca de datos de AgentForce, cuando las organizaciones tienen documentos PDF o de texto externos que deben ser utilizados por un agente de IA, el enfoque recomendado mediante clics (sin código) es cargar los documentos como una fuente de archivo (File Source) en la biblioteca de datos de AgentForce. El sistema procesa automáticamente los archivos cargados, fragmenta su contenido, crea un índice de búsqueda y permite crear un recuperador para fundamentar las respuestas del agente a partir de esos documentos indexados."
}, {
    "id": 234,
    "category": "Data 360 Fundamentals",
    "question": "Ursa Major Solar está desarrollando un agente de ayuda que debe responder a las preguntas de los clientes fundamentando las respuestas en datos tanto de artículos de Knowledge internos como de un portal de socios externo. El Agentforce Specialist configura el agente para utilizar un índice de búsqueda de Data 360. Durante las pruebas en Agentforce Builder, el agente ocasionalmente proporciona respuestas contradictorias, y el especialista necesita diferenciar entre estas dos fuentes de grounding para solucionar el comportamiento de las respuestas. ¿Qué proceso de Data 360 debería revisar el especialista para garantizar que el origen de la información se identifique y esté disponible con precisión?",
    "choices": ["El proceso de armonización de datos, donde los datos sin procesar se asignan a objetos de modelo de datos y los metadatos de origen se estandarizan para ser consultados específicamente por recuperadores híbridos.", "La fase de síntesis de Retrieval-Augmented Generation, donde el modelo de lenguaje de gran tamaño utiliza automáticamente un recuperador semántico para adjuntar la etiqueta del sistema de origen al resultado final generado.", "El proceso de función de recuperador de Data 360, donde el contenido recuperado se puede filtrar en función de los metadatos de origen, como el tipo de documento o el autor, para refinar los resultados antes de clasificarlos mediante búsqueda semántica o híbrida."],
    "correctAnswerText": "El proceso de función de recuperador de Data 360, donde el contenido recuperado se puede filtrar en función de los metadatos de origen, como el tipo de documento o el autor, para refinar los resultados antes de clasificarlos mediante búsqueda semántica o híbrida.",
    "explanation": "La respuesta correcta es C porque la necesidad de solución de problemas es la trazabilidad del origen de la recuperación. En la recuperación de Data 360, el recuperador busca en un índice de búsqueda configurado y devuelve contenido relevante para fundamentar el prompt. Si múltiples fuentes alimentan el índice, los metadatos de origen como el tipo de documento, autor u origen se pueden usar en el proceso del recuperador para filtrar o interpretar los fragmentos recuperados."
}, {
    "id": 235,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Northern Trail Outfitters está probando un agente conectado a una Agentforce Data Library. El agente recupera con éxito los datos correctos de la biblioteca, pero entrega la respuesta al usuario como estructuras JSON sin procesar en lugar de un lenguaje conversacional gramaticalmente correcto. ¿Qué evaluación de calidad obtiene una puntuación deficiente en este escenario?",
    "choices": ["Coherencia (Coherence)", "Concisión (Conciseness)", "Completitud (Completeness)"],
    "correctAnswerText": "Coherencia (Coherence)",
    "explanation": "La respuesta correcta es A porque el problema no es la falta de información o la longitud excesiva; la respuesta está mal formada para una conversación humana. La coherencia evalúa si la respuesta generada es comprensible, organizada lógicamente y presentada en un formato de lenguaje natural. El JSON sin procesar puede contener datos recuperados correctos, pero falla como respuesta orientada al cliente porque no es gramaticalmente conversacional."
}, {
    "id": 236,
    "category": "Prompt Engineering",
    "question": "¿Qué parte de la arquitectura de la Einstein Trust Layer aprovecha los propios datos de una organización dentro de un prompt de modelo de lenguaje de gran tamaño (LLM) para devolver respuestas relevantes y precisas con confianza?",
    "choices": ["Prompt Defense", "Data Masking", "Dynamic Grounding"],
    "correctAnswerText": "Dynamic Grounding",
    "explanation": "Dynamic Grounding en la arquitectura de Einstein Trust Layer garantiza que los prompts de modelos de lenguaje de gran tamaño (LLM) se enriquezcan con datos específicos de la organización (por ejemplo, registros de Salesforce, artículos de Knowledge) para generar respuestas precisas y relevantes. Al inyectar dinámicamente datos contextuales en los prompts, se reducen las alucinaciones y se alinean los resultados con datos empresariales confiables."
}, {
    "id": 237,
    "category": "Data 360 Fundamentals",
    "question": "Un Agentforce Specialist está construyendo una plantilla de prompt Flex. ¿Qué mejor práctica debería seguir el Agentforce Specialist al crear la plantilla de prompt Flex?",
    "choices": ["Proporcionar al modelo de lenguaje de gran tamaño (LLM) información contextual y darle un rol como representante de ventas o soporte.", "Fundamentar el modelo de lenguaje de gran tamaño (LLM) con datos de cuenta y crear un campo personalizado de resumen de cuenta para almacenar la respuesta generada por el LLM.", "Fundamentar el modelo de lenguaje de gran tamaño (LLM) con un recuperador y crear un campo personalizado para almacenar la respuesta generada por el LLM."],
    "correctAnswerText": "Proporcionar al modelo de lenguaje de gran tamaño (LLM) información contextual y darle un rol como representante de ventas o soporte.",
    "explanation": "En la Guía de diseño de prompts Flex de AgentForce, la mejor práctica recomendada para las plantillas de prompt Flex es garantizar que el modelo de lenguaje de gran tamaño (LLM) cuente con información contextual clara y un rol definido (por ejemplo, representante de ventas, agente de soporte). Las plantillas Flex son abiertas y adaptables por diseño, lo que les permite manejar casos de uso dinámicos siempre que estén guiadas con suficiente contexto y claridad de rol."
}, {
    "id": 238,
    "category": "Multi-Agent Orchestration",
    "question": "Universal Containers utiliza Agentforce para gestionar sus operaciones de servicio al cliente. Sin embargo, la empresa utiliza un sistema de agentes de IA de terceros completamente separado para gestionar la logística de su almacén. UC desea que el agente de servicio al cliente de Agentforce pueda solicitar reenrutamientos de envíos de forma fluida y colaborar de manera autónoma con el agente del almacén. ¿Qué protocolo estándar abierto está diseñado específicamente para facilitar este tipo exacto de colaboración entre plataformas?",
    "choices": ["Model Context Protocol", "Estándar Advanced Data Retrieval", "Protocolo Agent-to-Agent"],
    "correctAnswerText": "Protocolo Agent-to-Agent",
    "explanation": "La respuesta correcta es C porque el protocolo Agent-to-Agent está diseñado para la interoperabilidad entre agentes a través de diferentes plataformas, proveedores o sistemas. En este escenario, Agentforce debe colaborar con un agente de logística de almacén de terceros para solicitar reenrutamientos de envíos. Esa es una colaboración entre agentes, no solo un acceso a herramientas o recuperación de datos."
}, {
    "id": 239,
    "category": "AI Agents",
    "question": "Universal Containers tiene una acción de agente personalizada que llama a un flujo para recuperar el estado en tiempo real de un pedido desde el sistema de cumplimiento de pedidos. Para el flujo dado, ¿qué debe considerar el Agentforce Specialist sobre el acceso a los datos del usuario en ejecución?",
    "choices": ["El flujo debe tener seleccionada la opción \"with sharing\" en la configuración avanzada para que se respeten los permisos, la seguridad a nivel de campo y la configuración de uso compartido.", "La acción personalizada respeta los permisos, la seguridad a nivel de campo y las configuraciones de uso compartido configuradas en el flujo. El agente siempre ejecutará flujos en modo de sistema, por lo que el acceso a datos del usuario en ejecución no afectará los datos devueltos."],
    "correctAnswerText": "La acción personalizada respeta los permisos, la seguridad a nivel de campo y las configuraciones de uso compartido configuradas en el flujo. El agente siempre ejecutará flujos en modo de sistema, por lo que el acceso a datos del usuario en ejecución no afectará los datos devueltos.",
    "explanation": "Cuando un flujo es invocado a través de una Agent action personalizada, su acceso a los datos depende de la configuración de tiempo de ejecución del flujo. Los flujos de Salesforce se pueden configurar para respetar los permisos y las reglas de uso compartido del usuario en ejecución o para ejecutarse en contexto del sistema según la definición del flujo."
}, {
    "id": 240,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) desea permitir que su equipo de ventas utilice IA para sugerir productos recomendados de su catálogo. ¿Qué tipo de plantilla de prompt debería utilizar UC?",
    "choices": ["Record summary prompt template", "Email generation prompt template", "Flex prompt template"],
    "correctAnswerText": "Flex prompt template",
    "explanation": "Las plantillas de prompt Flex son versátiles y permiten entradas personalizadas (por ejemplo, datos de catálogo procedentes de objetos o de Data Cloud) e instrucciones a medida. Esta flexibilidad se adapta perfectamente a la necesidad de UC de recomendar productos dinámicamente según las preferencias del cliente."
}, {
    "id": 241,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers necesita fundamentar un nuevo agente de Agentforce con datos estructurados almacenados en un sistema externo sin duplicarlos en Data 360. Este enfoque es necesario para garantizar la precisión de los datos en tiempo real y minimizar los costos de almacenamiento. ¿Qué concepto de Data 360 debería utilizar el equipo para lograr esto?",
    "choices": ["Establecer un índice semántico para contenido externo.", "Utilizar Zero Copy para acceder a datos externos sin ingesta.", "Configurar un flujo de datos para importar los datos a Data 360."],
    "correctAnswerText": "Utilizar Zero Copy para acceder a datos externos sin ingesta.",
    "explanation": "La respuesta correcta es B porque la federación de datos Zero Copy está diseñada para acceder a datos externos sin copiarlos o ingerirlos físicamente en Data 360. Esto se adapta exactamente al requisito: los datos permanecen en el sistema externo, se evita la duplicación del almacenamiento y Salesforce puede utilizar los datos conectados para casos de uso impulsados por Data 360."
}, {
    "id": 242,
    "category": "AI Agents",
    "question": "¿Cuál es el rol del modelo de lenguaje de gran tamaño (LLM) al comprender la intención y ejecutar una Agent Action?",
    "choices": ["Encontrar temas solicitados similares y proporcionar las acciones que deben ejecutarse.", "Identificar el tema y las acciones que mejor coincidan y el orden correcto de ejecución.", "Determinar el acceso a temas de un usuario y ordenar las acciones por prioridad para ser ejecutadas."],
    "correctAnswerText": "Identificar el tema y las acciones que mejor coincidan y el orden correcto de ejecución.",
    "explanation": "El LLM analiza la entrada del usuario para comprender la intención, la relaciona con el tema que mejor coincide (configurado en Agent Builder) y selecciona las acciones asociadas. También determina la secuencia correcta de ejecución según el plan del agente (por ejemplo, recuperar datos antes de actualizar un registro)."
}, {
    "id": 243,
    "category": "AI Agents",
    "question": "¿Qué elemento del Omni-Channel Flow se debe utilizar para conectar el flujo con el agente?",
    "choices": ["Route Work Action", "Assignment", "Decision"],
    "correctAnswerText": "Route Work Action",
    "explanation": "La acción \"Route Work\" en Omni-Channel Flow asigna elementos de trabajo a agentes o colas según las reglas de enrutamiento. Al conectarse con un agente de Agentforce, esta acción vincula el flujo con la cola o presencia del agente, permitiendo la interacción."
}, {
    "id": 244,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea proporcionar a su equipo de ventas visibilidad automática posterior a las llamadas sobre menciones de competidores, productos y otras frases personalizadas. ¿Qué función debería configurar el Agentforce Specialist para habilitar al equipo de ventas de UC?",
    "choices": ["Call Summaries", "Call Explorer", "Call Insights"],
    "correctAnswerText": "Call Insights",
    "explanation": "Call Insights (parte de Einstein Conversation Insights) analiza llamadas de voz y video para identificar frases clave, temas y menciones, brindando información valiosa sobre aspectos críticos de la conversación como competidores o productos."
}, {
    "id": 245,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) ha utilizado eficazmente plantillas de prompt para actualizar campos de resumen en páginas de registros Lightning. Un administrador desea incorporar una funcionalidad similar en el proceso de automatización de UC utilizando Flow. ¿Cómo puede el administrador obtener una respuesta de esta plantilla de prompt desde dentro de un flujo para usarla como parte de la automatización de UC?",
    "choices": ["Invocable Apex", "Flow Action", "Einstein for Flow"],
    "correctAnswerText": "Flow Action",
    "explanation": "Salesforce proporciona una forma estándar de invocar plantillas de prompt o modelos generativos desde Flow mediante una acción de núcleo de flujo (Flow Core Action), seleccionando la opción de acción de plantilla de prompt en el creador de flujos."
}, {
    "id": 246,
    "category": "Data 360 Fundamentals",
    "question": "En una biblioteca de datos basada en Knowledge, ¿qué capacidad proporciona habilitar la opción \"Filter by Knowledge Data Categories\"?",
    "choices": ["Aplica metadatos personalizados de las categorías de datos seleccionadas a los artículos de Knowledge, con el objetivo de mejorar la relevancia de la búsqueda.", "Organiza los artículos de Knowledge indexados en secciones separadas según sus categorías de datos asignadas.", "Limita los artículos indexados solo a aquellos que pertenecen a las categorías de datos seleccionadas, mejorando así la precisión de la indexación."],
    "correctAnswerText": "Limita los artículos indexados solo a aquellos que pertenecen a las categorías de datos seleccionadas, mejorando así la precisión de la indexación.",
    "explanation": "La respuesta correcta es C porque filtrar por categorías de datos de Knowledge controla qué artículos se incluyen en el índice de la Agentforce Data Library, restringiendo la búsqueda únicamente a las categorías relevantes seleccionadas por el administrador."
}, {
    "id": 247,
    "category": "AI Agents",
    "question": "Una empresa desea recuperar detalles del historial del paciente para aumentar la respuesta del agente de IA. La empresa desea aprovechar la función de índice de búsqueda de Data Cloud. ¿Cuál es la mejor práctica al considerar Retrieval-Augmented Generation (RAG) para información que puede contener información de identificación personal (PII)?",
    "choices": ["Depender del prompt del agente para evitar exponer PII.", "Encriptar incrustaciones, pero seguir indexando registros de PII.", "Enmascarar campos confidenciales e indexar solo datos que no sean PII. ##"],
    "correctAnswerText": "Enmascarar campos confidenciales e indexar solo datos que no sean PII. ##",
    "explanation": "Según las Pautas de seguridad RAG y gobernanza de datos de AgentForce, la mejor práctica al implementar RAG es garantizar que la información de identificación personal (PII) nunca se indexe ni se incruste en el sistema de recuperación. Se deben enmascarar o excluir los campos confidenciales antes de crear las incrustaciones."
}, {
    "id": 248,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers (UC) desea garantizar la eficacia, confiabilidad y confianza de sus agentes antes de desplegarlos en producción. A UC le gustaría probar de manera eficiente una cantidad grande y repetible de expresiones. ¿Qué debería recomendar el Agentforce Specialist?",
    "choices": ["Aprovechar la UI del modelo de lenguaje de gran tamaño (LLM) del agente y probar los agentes de UC con diferentes expresiones antes de activar el agente.", "Desplegar el agente en un entorno sandbox de QA y revisar los informes de Utterance Analysis para evaluar la eficacia.", "Crear un archivo CSV con los casos de prueba de UC en Agentforce Testing Center utilizando la plantilla de pruebas."],
    "correctAnswerText": "Crear un archivo CSV con los casos de prueba de UC en Agentforce Testing Center utilizando la plantilla de pruebas.",
    "explanation": "Agentforce Testing Center está diseñado específicamente para probar agentes de IA autónomos a escala. Permite cargar un archivo CSV con casos de prueba (expresiones y resultados esperados) para ejecutar cientos de interacciones sintéticas en paralelo de forma repetible."
}, {
    "id": 249,
    "category": "Prompt Engineering",
    "question": "Un Agentforce desea fundamentar una nueva plantilla de prompt con la lista relacionada User. ¿Qué debería considerar el Agentforce Specialist?",
    "choices": ["La lista relacionada User debe tener acceso View All.", "La lista relacionada User debe estar incluida en la página de registro.", "La lista relacionada User no está admitida en las plantillas de prompt."],
    "correctAnswerText": "La lista relacionada User no está admitida en las plantillas de prompt.",
    "explanation": "Salesforce restringe ciertos objetos y listas relacionadas para el grounding de plantillas de prompt por razones de seguridad y privacidad. La lista relacionada de usuarios no está admitida directamente para el grounding de plantillas de prompt."
}, {
    "id": 250,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Coral Cloud Resorts está a punto de comenzar a probar su agente de conserjería con huéspedes. ¿Qué métricas se deben capturar para monitorear el rendimiento, la corrección y la experiencia del usuario?",
    "choices": ["Rendimiento del agente, uso de tokens y duración de la conversación", "Rendimiento de respuesta, tono y CSAT", "Tiempos de respuesta, precisión y relevancia de las respuestas, y éxito en la resolución"],
    "correctAnswerText": "Tiempos de respuesta, precisión y relevancia de las respuestas, y éxito en la resolución",
    "explanation": "Según el Marco de monitoreo y evaluación de AgentForce, las dimensiones clave miden el rendimiento del sistema (tiempos de respuesta), la corrección (precisión y relevancia) y el éxito en la resolución del problema o tarea por parte del usuario."
}, {
    "id": 251,
    "category": "AI Agents",
    "question": "Universal Containers (UC) configuró una nueva ingesta de archivos PDF en Data Cloud con todos los campos requeridos y también creó el mapeo y el índice de búsqueda. UC ahora está configurando el recuperador y nota que falta un campo requerido. ¿Cómo debería resolver esto UC?",
    "choices": ["Crear un nuevo objeto Data Cloud personalizado que incluya el campo deseado.", "Actualizar el índice de búsqueda para incluir el campo deseado.", "Modificar la configuración del recuperador para incluir el campo deseado."],
    "correctAnswerText": "Actualizar el índice de búsqueda para incluir el campo deseado.",
    "explanation": "El índice de búsqueda define qué campos están indexados y accesibles para el recuperador. Si falta un campo necesario durante la configuración del recuperador, el índice de búsqueda debe actualizarse para incluir ese campo."
}, {
    "id": 252,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Coral Cloud Resorts necesita una lógica consistente de aprobado/fallido (pass/fail) para las pruebas de agentes. ¿Qué capacidad de Testing Center proporciona eso?",
    "choices": ["Utilizar la calificación del cliente como indicador de corrección.", "Ejecutar un script en los registros de eventos para identificar las expresiones fallidas.", "Utilizar pruebas estructuradas por lotes con validación por expresión de prueba."],
    "correctAnswerText": "Utilizar pruebas estructuradas por lotes con validación por expresión de prueba.",
    "explanation": "Las pruebas estructuradas por lotes permiten definir resultados esperados por expresión de prueba y validar automáticamente las respuestas del agente, entregando resultados deterministas de aprobado/fallido."
}, {
    "id": 253,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers desea que un agente de IA responda preguntas sobre garantías utilizando datos no estructurados almacenados en Data Cloud. Los resultados deben poder filtrarse por línea de productos y clasificarse por actualizaciones recientes.",
    "choices": ["Utilizar el recuperador predeterminado que automáticamente considera la clasificación por recencia.", "Construir un recuperador personalizado en Einstein Studio con filtros de línea de productos y clasificación por recencia.", "Aplicar incrustaciones semánticas con filtros de metadatos predeterminados para lograr el resultado deseado."],
    "correctAnswerText": "Construir un recuperador personalizado en Einstein Studio con filtros de línea de productos y clasificación por recencia.",
    "explanation": "Para personalizar el comportamiento de recuperación con filtros específicos de metadatos (como línea de producto) y reglas de clasificación personalizadas (como recencia), se debe construir un recuperador personalizado en Einstein Studio."
}, {
    "id": 254,
    "category": "AI Agents",
    "question": "Después de que un agente selecciona un tema, ¿cuál es un factor importante que utiliza el motor de razonamiento para seleccionar la acción?",
    "choices": ["La prioridad dada a cada acción", "El orden explícito de las acciones en el tema", "El nombre y las instrucciones de las acciones"],
    "correctAnswerText": "La prioridad dada a cada acción",
    "explanation": "El motor de razonamiento evalúa las acciones disponibles y sus prioridades asignadas para determinar qué acción ejecutar primero cuando existen múltiples opciones aplicables."
}, {
    "id": 255,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) desea crear una nueva plantilla de prompt Sales Email en Prompt Builder utilizando la función \"Save As\". Sin embargo, UC nota que la nueva plantilla produce resultados diferentes en comparación con el prompt Sales Email estándar debido a hiperparámetros faltantes. ¿Qué debería hacer UC para garantizar que la nueva plantilla de prompt produzca resultados comparables a los prompts Sales Email estándar?",
    "choices": ["Utilizar Model Playground para crear una configuración de modelo con los parámetros especificados.", "Agregar manualmente los hiperparámetros a la nueva plantilla.", "Volver a utilizar la plantilla estándar sin modificaciones."],
    "correctAnswerText": "Utilizar Model Playground para crear una configuración de modelo con los parámetros especificados.",
    "explanation": "Model Playground permite configurar y probar ajustes de hiperparámetros (como temperatura o penalizaciones) para asociarlos a las configuraciones de modelos que utilizan las plantillas de prompt."
}, {
    "id": 256,
    "category": "AI Agents",
    "question": "Universal Containers (UC) necesita potenciar a su equipo de marketing con capacidades de IA que ayuden a los empleados a buscar rápidamente datos de campañas, generar contenido creativo y gestionar tareas de proyectos. La solución también debería permitir a los especialistas en marketing recibir soporte personalizado, mostrar información relevante y completar el trabajo directamente en Salesforce. ¿Qué solución de IA debería implementar UC?",
    "choices": ["Sales Coach Agent", "Service Agent", "Employee Agent"],
    "correctAnswerText": "Employee Agent",
    "explanation": "Employee Agent está diseñado específicamente para usuarios internos (como equipos de marketing, RR.HH. o productividad) para realizar tareas internas, buscar información empresarial y generar contenido en Salesforce."
}, {
    "id": 257,
    "category": "AI Agents",
    "question": "Universal Containers (UC) necesita mejorar la productividad de los agentes al responder chats de clientes. ¿Qué función de IA generativa debería ayudar a UC a solucionar este problema?",
    "choices": ["Case Summaries", "Service Replies", "Case Escalation"],
    "correctAnswerText": "Service Replies",
    "explanation": "Service Replies genera automáticamente sugerencias de respuesta en tiempo real durante las conversaciones de chat basándose en el contexto del caso y la base de conocimientos."
}, {
    "id": 258,
    "category": "Governance & Observability",
    "question": "Universal Containers necesita restringir el acceso a las acciones de procesamiento de reembolsos para que solo los clientes con estado de cuenta Active puedan iniciar reembolsos. ¿Cómo debería aplicar la restricción un Agentforce Specialist de forma determinista?",
    "choices": ["Crear una plantilla de prompt Flex que tenga instrucciones para verificar el estado de la cuenta.", "Crear una variable de contexto para el campo de estado de la cuenta y aplicar un filtro condicional AccountStatus equals \"Active\" a las acciones de reembolso.", "Incluir instrucciones paso a paso a nivel de tema y de acción explicando las reglas y ejemplos."],
    "correctAnswerText": "Crear una variable de contexto para el campo de estado de la cuenta y aplicar un filtro condicional AccountStatus equals \"Active\" a las acciones de reembolso.",
    "explanation": "Los filtros condicionales aplicados a las acciones mediante variables de contexto garantizan un control de acceso determinista, evitando que la acción esté disponible para el motor de razonamiento si la condición no se cumple."
}, {
    "id": 259,
    "category": "Data 360 Fundamentals",
    "question": "En el contexto de recuperadores e índices de búsqueda, ¿qué describe mejor el proceso de preparación de datos en Data Cloud?",
    "choices": ["La preparación de datos se centra en la ingesta de datos en tiempo real y la indexación dinámica para generar datos de referencia de grounding dinámicos sin pasos de preprocesamiento.", "La preparación de datos implica agregar, normalizar y codificar conjuntos de datos estructurados para garantizar el cumplimiento de los protocolos de gobernanza y seguridad de datos.", "La preparación de datos implica cargar, fragmentar (chunking), vectorizar y almacenar contenido de manera optimizada para la búsqueda con el fin de respaldar la recuperación desde la base de datos vectorial."],
    "correctAnswerText": "La preparación de datos implica cargar, fragmentar (chunking), vectorizar y almacenar contenido de manera optimizada para la búsqueda con el fin de respaldar la recuperación desde la base de datos vectorial.",
    "explanation": "El proceso RAG en Data Cloud requiere cargar el contenido no estructurado, dividirlo en fragmentos (chunks), convertirlos en incrustaciones vectoriales y almacenarlos en la base de datos vectorial para su rápida recuperación semántica."
}, {
    "id": 260,
    "category": "Multi-Agent Orchestration",
    "question": "Universal Containers ha desplegado varios Agentforce Employee Agents especializados, como TI Support, HR Assistant y Procurement, para ayudar con tareas internas. Recientemente, la mesa de ayuda de UC informó un alto volumen de interacciones fallidas porque los empleados frecuentemente seleccionan el agente incorrecto para sus solicitudes (por ejemplo, pedirle al agente HR Assistant que restablezca una contraseña de red). UC desea mejorar la experiencia del usuario, escalar su despliegue y centralizar el control sin requerir que los empleados adivinen qué agente usar. ¿Qué enfoque arquitectónico debería recomendar el Agentforce Specialist para resolver este problema?",
    "choices": ["Crear una regla de validación personalizada en el objeto Agent Session para evitar que los usuarios envíen prompts que no coincidan con las instrucciones del sistema del agente seleccionado.", "Implementar Single Org Multi-Agent (SOMA) para que actúe como un punto de entrada central e unificado que interprete la intención del usuario y enmute la solicitud a las capacidades especializadas adecuadas.", "Desplegar una arquitectura Multi-Agent independiente donde cada agente especializado le pida al usuario que verifique su departamento y rol específicos antes de continuar con la conversación."],
    "correctAnswerText": "Implementar Single Org Multi-Agent (SOMA) para que actúe como un punto de entrada central e unificado que interprete la intención del usuario y enmute la solicitud a las capacidades especializadas adecuadas.",
    "explanation": "SOMA establece un agente Supervisor u Orquestador central que recibe las solicitudes de los usuarios, analiza su intención y las enruta automáticamente al agente especializado correspondiente dentro de la misma organización."
}, {
    "id": 261,
    "category": "AI Agents",
    "question": "¿Qué caso de uso está mejor respaldado por las capacidades de Salesforce Agent?",
    "choices": ["Reunir una interfaz conversacional para interactuar con IA para todos los usuarios de Salesforce, como desarrolladores y minoristas de e-commerce.", "Permitir a los usuarios administradores de Salesforce crear y entrenar modelos de lenguaje de gran tamaño (LLM) personalizados utilizando datos de CRM.", "Permitir a los científicos de datos entrenar modelos de IA predictiva con datos históricos de CRM utilizando capacidades de aprendizaje automático integradas."],
    "correctAnswerText": "Reunir una interfaz conversacional para interactuar con IA para todos los usuarios de Salesforce, como desarrolladores y minoristas de e-commerce.",
    "explanation": "Salesforce Agent proporciona una interfaz conversacional basada en lenguaje natural que ayuda a diversos roles a interactuar con los datos y flujos de trabajo de Salesforce."
}, {
    "id": 262,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers desea garantizar que las respuestas de su agente de IA reflejen constantemente la voz de marca única de la empresa y estándares de calidad específicos más allá de las verificaciones simples de aprobado o fallido. ¿Cómo debería configurar el Agentforce Specialist el Testing Center para evaluar este criterio específico?",
    "choices": ["Habilitar la evaluación de calidad de Coherencia.", "Utilizar la métrica predeterminada Response Evaluation.", "Crear una evaluación personalizada utilizando un juez de modelo de lenguaje de gran tamaño (LLM judge)."],
    "correctAnswerText": "Crear una evaluación personalizada utilizando un juez de modelo de lenguaje de gran tamaño (LLM judge).",
    "explanation": "Para evaluar criterios cualitativos propios como la voz de marca o guiones específicos, Testing Center permite crear evaluaciones personalizadas utilizando un modelo LLM que actúa como juez contra un prompt con rubros definidos."
}, {
    "id": 263,
    "category": "Prompt Engineering",
    "question": "¿Cómo garantiza Secure Data Retrieval que solo los usuarios autorizados puedan acceder a los datos de Salesforce necesarios para el grounding dinámico?",
    "choices": ["Recupera datos de Salesforce según los permisos del usuario \"Run As\".", "Recupera datos de Salesforce según los permisos del usuario que ejecuta el prompt.", "Recupera datos de Salesforce según los permisos de objeto de la plantilla de prompt."],
    "correctAnswerText": "Recupera datos de Salesforce según los permisos del usuario que ejecuta el prompt.",
    "explanation": "Secure Data Retrieval respeta estrictamente el modelo de seguridad de Salesforce (FLS, CRUD y reglas de uso compartido) ejecutando la recuperación bajo el contexto del usuario que ejecuta la solicitud."
}, {
    "id": 264,
    "category": "Prompt Engineering",
    "question": "Las reglas de enmascaramiento de datos de IA actuales de Universal Containers no se alinean con las políticas y requisitos de seguridad y privacidad de la organización. ¿Qué debería recomendar un Agentforce para resolver el problema?",
    "choices": ["Habilitar el enmascaramiento de datos para actualizaciones de sandbox.", "Configurar el enmascaramiento de datos en la configuración de la Einstein Trust Layer.", "Agregar nuevas reglas de enmascaramiento de datos en la configuración del LLM."],
    "correctAnswerText": "Configurar el enmascaramiento de datos en la configuración de la Einstein Trust Layer.",
    "explanation": "Las políticas de enmascaramiento de PII y datos confidenciales para las interacciones con modelos de IA se configuran centralizadamente en la Einstein Trust Layer dentro de Setup."
}, {
    "id": 265,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) está implementando un asistente de soporte impulsado por IA para ayudar a los agentes de servicio al cliente a recuperar rápidamente pasos de solución de problemas y directrices de políticas relevantes. El asistente se basa en un índice de búsqueda en Data Cloud que contiene manuales de productos, documentos de políticas y resoluciones de casos anteriores. Durante las pruebas, UC nota que los agentes reciben demasiados resultados irrelevantes de versiones de productos anteriores que ya no se aplican. ¿Cómo debería solucionar UC este problema?",
    "choices": ["Modificar el índice de búsqueda para almacenar solo documentos del último año y eliminar los registros anteriores.", "Crear un recuperador personalizado en Einstein Studio y aplicar filtros para la fecha de publicación y la línea de productos.", "Utilizar el recuperador predeterminado, ya que busca en todo el índice de búsqueda y proporciona una cobertura amplia."],
    "correctAnswerText": "Crear un recuperador personalizado en Einstein Studio y aplicar filtros para la fecha de publicación y la línea de productos.",
    "explanation": "Para evitar que el recuperador devuelva documentos obsoletos o de versiones no aplicables, se debe crear un recuperador personalizado y aplicar filtros de metadatos (como fecha de publicación o versión)."
}, {
    "id": 266,
    "category": "Data 360 Fundamentals",
    "question": "¿Cuál es un caso de uso válido para los recuperadores (retrievers) de Data Cloud?",
    "choices": ["Devolver datos relevantes desde la base de datos vectorial para aumentar un prompt.", "Fundamentar datos de sitios web externos para aumentar un prompt con RAG.", "Modificar y actualizar datos dentro de los sistemas de origen conectados a Data Cloud."],
    "correctAnswerText": "Devolver datos relevantes desde la base de datos vectorial para aumentar un prompt.",
    "explanation": "Los recuperadores de Data Cloud consultan la base de datos vectorial para extraer pasajes relevantes y utilizarlos en la fundamentación (grounding / RAG) de prompts de IA."
}, {
    "id": 267,
    "category": "Data 360 Fundamentals",
    "question": "¿Qué declaración explica por qué una empresa podría preferir un índice de búsqueda híbrido en Data Cloud para Agentforce?",
    "choices": ["Los índices de búsqueda híbrida procesan consultas más rápido que la búsqueda vectorial porque eliminan la necesidad de incrustaciones semánticas.", "Las incrustaciones vectoriales en la búsqueda híbrida se prefiltran por coincidencias de palabras clave, lo que reduce la carga computacional y mejora la precisión de la respuesta.", "Los índices de búsqueda híbrida admiten tanto coincidencias literales de palabras clave como recuperación semántica, útil cuando las consultas mezclan términos específicos e intención. ##"],
    "correctAnswerText": "Los índices de búsqueda híbrida admiten tanto coincidencias literales de palabras clave como recuperación semántica, útil cuando las consultas mezclan términos específicos e intención. ##",
    "explanation": "Un índice de búsqueda híbrido combina lo mejor de dos mundos: coincidencia léxica exacta (útil para códigos o números de modelo) y comprensión semántica (útil para la intención del usuario)."
}, {
    "id": 268,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers (UC) se está preparando para utilizar Agentforce Testing Center con el fin de garantizar la confiabilidad de un nuevo agente. UC tiene un archivo CSV con casos de prueba y está revisando la documentación para comprender las mejores prácticas y limitaciones. ¿Qué mejor práctica debería seguir la empresa para evitar modificar datos de CRM mientras ejecuta pruebas en Testing Center?",
    "choices": ["Ejecutar pruebas en el entorno de producción para garantizar la precisión de los datos en tiempo real.", "Limitar la cantidad de casos de prueba a 50 por prueba para minimizar los cambios de datos.", "Utilizar Testing Center únicamente en el entorno sandbox."],
    "correctAnswerText": "Utilizar Testing Center únicamente en el entorno sandbox.",
    "explanation": "Para evitar cualquier modificación accidental en datos reales o la ejecución no deseada de acciones en producción durante las pruebas masivas, las pruebas en Testing Center deben realizarse en entornos Sandbox."
}, {
    "id": 269,
    "category": "Data 360 Fundamentals",
    "question": "Coral Cloud Resorts desea manejar errores tipográficos frecuentes de los clientes en los nombres de paquetes en las consultas. ¿Qué enfoque debería implementar el Agentforce Specialist?",
    "choices": ["Búsqueda híbrida", "Búsqueda vectorial", "Búsqueda por palabras clave"],
    "correctAnswerText": "Búsqueda vectorial",
    "explanation": "La búsqueda vectorial (semántica) utiliza la proximidad conceptual de las incrustaciones en lugar de coincidencias de caracteres exactos, lo que la hace ideal para tolerar errores ortográficos y variaciones de redacción."
}, {
    "id": 270,
    "category": "Governance & Observability",
    "question": "Universal Containers está interesada en utilizar Call Explorer para obtener rápidamente información de las reuniones grabadas por su equipo de ventas. ¿Qué debería tener en cuenta el Agentforce Specialist antes de habilitar esta función?",
    "choices": ["Call Explorer opera independientemente de Salesforce Knowledge, por lo que no requiere configuración previa.", "Se deben construir acciones de Call Explorer personalizadas antes de que se pueda configurar.", "Call Explorer requiere que se habilite el conjunto de permisos Einstein Conversation Insights."],
    "correctAnswerText": "Call Explorer requiere que se habilite el conjunto de permisos Einstein Conversation Insights.",
    "explanation": "Call Explorer es una función dentro de Einstein Conversation Insights (ECI). Para que los usuarios o administradores puedan acceder y utilizar Call Explorer para analizar grabaciones de llamadas, se les debe asignar e habilitar el conjunto de permisos de Einstein Conversation Insights."
}, {
    "id": 271,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea aprovechar la función de grounding Record Snapshots en una plantilla de prompt. ¿Qué preparaciones se requieren?",
    "choices": ["Configurar el diseño de página (page layout) del tipo de registro maestro.", "Crear un conjunto de campos (field set) para todos los campos que se van a fundamentar.", "Habilitar y configurar el formulario dinámico (dynamic form) para el objeto."],
    "correctAnswerText": "Crear un conjunto de campos (field set) para todos los campos que se van a fundamentar.",
    "explanation": "Para definir con precisión qué campos se deben incluir en el grounding de Record Snapshots para una plantilla de prompt, se crea y configura un conjunto de campos (field set) específico que agrupa los campos del objeto requeridos por el modelo."
}, {
    "id": 272,
    "category": "Data 360 Fundamentals",
    "question": "Un Agentforce Specialist en Universal Containers recomendó anteriormente eliminar los documentos de políticas de hipotecas reemplazados que se ingirieron en Data 360 para evitar que el agente recupere términos desactualizados. El departamento legal ha confirmado ahora que todas las versiones históricas deben permanecer en el sistema simultáneamente, ya que cada versión sigue siendo contractualmente vinculante para los clientes que firmaron bajo ella. ¿Qué recomendación revisada debería hacer el especialista?",
    "choices": ["Configurar un recuperador personalizado en AI Models, anteriormente Einstein Studio, con un filtro dinámico en el campo de metadatos de la versión de la política, poblado en tiempo de ejecución desde el registro Contract del cliente en el CRM, garantizando que la recuperación esté delimitada de forma determinista a la versión del documento aplicable al acuerdo de ese cliente antes de aplicar la clasificación por similitud.", "Agregar el identificador de la versión de la política como un campo antepuesto en el índice de búsqueda para que cada fragmento esté etiquetado con su versión aplicable en el momento de la indexación, lo que permite al modelo de lenguaje de gran tamaño (LLM) identificar y seleccionar la versión correcta durante la generación de respuestas.", "Crear un flujo de datos independiente para cada versión de la política y configurar el agente para consultar el objeto de modelo de datos no estructurados (UDMO) correspondiente a la fecha del contrato del cliente, aislando los vectores de cada versión de los demás."],
    "correctAnswerText": "Configurar un recuperador personalizado en AI Models, anteriormente Einstein Studio, con un filtro dinámico en el campo de metadatos de la versión de la política, poblado en tiempo de ejecución desde el registro Contract del cliente en el CRM, garantizando que la recuperación esté delimitada de forma determinista a la versión del documento aplicable al acuerdo de ese cliente antes de aplicar la clasificación por similitud.",
    "explanation": "La respuesta correcta es A. Puesto que las versiones históricas deben mantenerse en el sistema, la solución es la delimitación determinista del alcance de la recuperación. Un recuperador personalizado con filtros dinámicos permite pasar la versión de política correspondiente del cliente en tiempo de ejecución, filtrando los fragmentos antes del análisis por similitud del LLM."
}, {
    "id": 273,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea utilizar la función Draft with Einstein en Sales Cloud para crear un correo electrónico de presentación personalizado. Después de crear un borrador de correo electrónico propuesto, ¿qué ajuste predefinido debería elegir UC para revisar el borrador con un tono más informal?",
    "choices": ["Make Less Formal", "Enhance Friendliness", "Optimize for Clarity"],
    "correctAnswerText": "Make Less Formal",
    "explanation": "Al revisar borradores creados por Draft with Einstein, la opción predefinida \"Make Less Formal\" ajusta la redacción del correo electrónico para darle un tono más casual e informal manteniendo la profesionalidad."
}, {
    "id": 274,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist necesita crear una plantilla de prompt que extraiga el nombre del cliente, el número de teléfono y el número de caso de un bloque de texto, y nada más. ¿Cómo debería estructurar el prompt el Agentforce Specialist para asegurarse de que el modelo de lenguaje de gran tamaño (LLM) no incluya texto o conversación adicional?",
    "choices": ["Pedir al LLM que extraiga y solo muestre la información importante en el texto.", "Utilizar instrucciones de salida bien definidas y proporcionar ejemplos de la salida deseada.", "Asegurarse de indicarle al LLM en el prompt que solo utilice pares de clave-valor en la respuesta."],
    "correctAnswerText": "Utilizar instrucciones de salida bien definidas y proporcionar ejemplos de la salida deseada.",
    "explanation": "Según la guía de diseño de plantillas de prompt, la mejor práctica para extraer datos específicos sin texto conversacional adicional es definir explícitamente el formato e instrucciones de salida y suministrar ejemplos del resultado deseado (few-shot prompting)."
}, {
    "id": 275,
    "category": "AI Agents",
    "question": "Universal Containers necesita crear informes en Data Cloud para comprender el comportamiento del agente. ¿Qué objeto de lago de datos (DLO) representa un contenedor general que captura interacciones continuas con uno o más agentes de IA?",
    "choices": ["AlAgentInteraction", "AlAgentInteractionMessage", "AlAgentSession"],
    "correctAnswerText": "AlAgentSession",
    "explanation": "El objeto de lago de datos `AIAgentSession` actúa como el contenedor principal de nivel superior que agrupa y rastrea una sesión de interacción continua entre un usuario y los agentes de IA."
}, {
    "id": 276,
    "category": "Data 360 Fundamentals",
    "question": "¿Cuál es la ventaja principal de crear un recuperador individual en lugar del recuperador predeterminado?",
    "choices": ["Los recuperadores individuales pueden agregar múltiples espacios de datos y objetos de modelo de datos (DMO) en una salida de recuperador unificada.", "Los recuperadores individuales permiten la configuración de filtros, campos especificados y cuántos resultados se devuelven.", "Los recuperadores individuales generan automáticamente nuevos índices de búsqueda y actualizan vectores dinámicamente."],
    "correctAnswerText": "Los recuperadores individuales permiten la configuración de filtros, campos especificados y cuántos resultados se devuelven.",
    "explanation": "A diferencia del recuperador predeterminado, un recuperador individual otorga control granular al administrador para especificar filtros sobre metadatos, definir qué campos se retornarán al prompt y limitar la cantidad de resultados devueltos."
}, {
    "id": 277,
    "category": "AI Agents",
    "question": "Una empresa construyó una acción Apex personalizada invocada por un Employee Agent para obtener datos de una API externa. El método de llamada externa utiliza el ID de sesión de Salesforce del usuario actual para autenticar la llamada. La llamada externa funciona perfectamente en la interfaz de usuario, pero falla silenciosamente cuando el agente la activa. ¿Cuál es la mejor práctica arquitectónica para solucionar esto?",
    "choices": ["Extender explícitamente la seguridad de la clase Apex al perfil del usuario con sesión iniciada.", "Asegurarse de que el Employee Agent tenga asignado el grupo de conjuntos de permisos Agentforce Service Agent User.", "Reemplazar la recuperación del ID de sesión con una Credencial Nombrada (Named Credential)."],
    "correctAnswerText": "Reemplazar la recuperación del ID de sesión con una Credencial Nombrada (Named Credential).",
    "explanation": "La respuesta correcta es C. La ejecución de un agente puede ocurrir en contextos fuera de la sesión directa del usuario interactivo. Depender de los ID de sesión de la UI para autenticar llamadas de API externas no es confiable; se debe utilizar una Named Credential para gestionar la autenticación y los puntos de enlace de forma segura."
}, {
    "id": 278,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) está utilizando Einstein Generative AI para generar un resumen de cuenta. UC busca garantizar que el contenido sea seguro e inclusivo, utilizando la puntuación de toxicidad de la Einstein Trust Layer para evaluar el nivel de seguridad del contenido. ¿Qué indica una puntuación de categoría de seguridad de 1 en la puntuación de toxicidad de Einstein Generative?",
    "choices": ["Not safe", "Safe", "Moderately safe"],
    "correctAnswerText": "Safe",
    "explanation": "En el sistema de evaluación de la Trust Layer de Einstein, una puntuación de categoría de seguridad de 1 indica que el contenido evaluado se considera seguro (Safe) y cumple con las normas de no toxicidad."
}, {
    "id": 279,
    "category": "AI Agents",
    "question": "Un gerente de ventas necesita contactar prospectos a escala con soluciones hiperrelevantes y comunicaciones personalizadas de la manera más eficiente posible. ¿Qué solución de Salesforce se adapta mejor a esta necesidad?",
    "choices": ["Einstein Sales Assistant", "Prompt Builder", "Einstein Lead follow-up"],
    "correctAnswerText": "Prompt Builder",
    "explanation": "Prompt Builder permite crear plantillas de prompt fundamentadas en datos del CRM que se pueden integrar en automatizaciones (como Flows) para generar contenidos y correos altamente personalizados y relevantes a gran escala."
}, {
    "id": 280,
    "category": "AI Agents",
    "question": "¿Cómo responde un agente cuando no puede entender la solicitud o no puede encontrar la información solicitada?",
    "choices": ["Con un mensaje preconfigurado, basado en el tipo de acción.", "Con un mensaje general pidiéndole al usuario que reformule la solicitud.", "Con un mensaje de error generado."],
    "correctAnswerText": "Con un mensaje general pidiéndole al usuario que reformule la solicitud.",
    "explanation": "Cuando un agente de Agentforce no logra interpretar la entrada o encontrar datos relevantes, por defecto emite una respuesta general y amigable invitando al usuario a reformular su solicitud."
}, {
    "id": 281,
    "category": "AI Agents",
    "question": "Universal Containers (UC) notó un aumento en las cancelaciones de contratos de clientes en los últimos meses. UC busca formas de abordar este problema mediante la implementación de un programa de alcance proactivo para los clientes antes de que cancelen sus contratos. ¿Qué funcionalidad de caso de uso de Model Builder se alinea con la solicitud de UC?",
    "choices": ["Product recommendation prediction", "Customer churn prediction", "Contract Renewal Date prediction"],
    "correctAnswerText": "Customer churn prediction",
    "explanation": "La predicción de pérdida de clientes (Customer churn prediction) en Model Builder analiza patrones históricos para identificar a los clientes con riesgo de cancelar sus contratos, permitiendo intervenir de manera proactiva."
}, {
    "id": 282,
    "category": "AI Agents",
    "question": "Universal Containers (UC) busca mejorar la productividad de su equipo de ventas brindando información y recomendaciones en tiempo real durante las interacciones con los clientes. ¿Por qué UC debería considerar el uso de Agentforce Sales Agent?",
    "choices": ["Para rastrear las interacciones con los clientes para análisis futuros", "Para automatizar todo el proceso de ventas para una máxima eficiencia", "Para optimizar el proceso de ventas y aumentar las tasas de conversión"],
    "correctAnswerText": "Para optimizar el proceso de ventas y aumentar las tasas de conversión",
    "explanation": "Agentforce Sales Agent optimiza las interacciones comerciales asistiendo en la preparación, recomendando acciones y acelerando el avance de oportunidades para incrementar la conversión."
}, {
    "id": 283,
    "category": "AI Agents",
    "question": "Un Agentforce Specialist está creando un flujo de trabajo de incorporación de múltiples pasos utilizando acciones de agente. El flujo de trabajo incluye cuatro pasos secuenciales: creación de cuenta, configuración de perfil, configuración de ajustes y finalización. Después de que la acción create_account se ejecuta con éxito, el sistema debe enviar inmediatamente un correo electrónico de verificación sin requerir una interacción adicional del usuario. ¿Qué enfoque debería utilizar el especialista para garantizar que el correo electrónico de verificación se active automáticamente después de la creación de la cuenta?",
    "choices": ["Utilizar la palabra clave run dentro de la acción create_account para encadenar la acción send_verification como seguimiento.", "Agregar la lógica send_verification dentro de las instrucciones procedimentales para que se ejecute antes de que finalice la configuración del perfil.", "Configurar la acción send_verification para que esté disponible cuando account_created = True y esperar a que el agente la llame en el siguiente paso."],
    "correctAnswerText": "Agregar la lógica send_verification dentro de las instrucciones procedimentales para que se ejecute antes de que finalice la configuración del perfil.",
    "explanation": "La respuesta correcta es B. Para garantizar un encadenamiento determinista de acciones en una secuencia directa sin esperar un nuevo turno conversacional del usuario, la lógica de ejecución debe incluirse en las instrucciones procedimentales (`procedural instructions`)."
}, {
    "id": 284,
    "category": "Data 360 Fundamentals",
    "question": "Después de configurar y guardar una Salesforce Agentforce Data Library (independientemente de la fuente de datos), ¿qué componentes se crean automáticamente y están disponibles en Data Cloud?",
    "choices": ["Un canal de datos (data pipeline), un motor de indexación y un procesador de consultas", "Un conector de datos, un panel de análisis y una regla de flujo de trabajo", "Un flujo de datos (data stream), un índice de búsqueda y un recuperador (retriever)"],
    "correctAnswerText": "Un flujo de datos (data stream), un índice de búsqueda y un recuperador (retriever)",
    "explanation": "Al configurar una Agentforce Data Library, el sistema aprovisiona automáticamente en Data Cloud los tres elementos clave de la arquitectura RAG: el Data Stream para la ingesta, el Search Index para la búsqueda y el Retriever para las consultas."
}, {
    "id": 285,
    "category": "AI Agents",
    "question": "¿Cuál es un caso de uso apropiado para aprovechar Agentforce Sales Agent en un contexto de ventas?",
    "choices": ["Permitir que un equipo de ventas utilice lenguaje natural para invocar tareas de ventas definidas fundamentadas en datos relevantes y poder garantizar que las políticas de la empresa se apliquen conversacionalmente y en el flujo de trabajo.", "Permitir que un equipo de ventas utilice una guía interactiva paso a paso basada en reglas de negocio para garantizar la entrada precisa de datos en Salesforce y ayudar a cerrar acuerdos más rápido.", "Revisar y leer instantáneamente mensajes o correos electrónicos entrantes que luego se registran en los registros de oportunidades, contactos y cuentas correctos para brindar una vista completa de las interacciones."],
    "correctAnswerText": "Permitir que un equipo de ventas utilice lenguaje natural para invocar tareas de ventas definidas fundamentadas en datos relevantes y poder garantizar que las políticas de la empresa se apliquen conversacionalmente y en el flujo de trabajo.",
    "explanation": "Agentforce Sales Agent está diseñado para permitir que los representantes de ventas ejecuten tareas y consulten datos mediante comandos de lenguaje natural dentro de sus flujos de trabajo de ventas cotidianos."
}, {
    "id": 286,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) desea limitar el acceso de un agente a los artículos de Knowledge mientras despliega la acción \"Answer Questions with Knowledge\". ¿Cómo debería lograr esto UC?",
    "choices": ["Definir instrucciones de alcance para el agente especificando una lista de títulos o ID de artículos permitidos.", "Actualizar el recuperador de la Data Library para filtrar por un campo personalizado en el artículo de Knowledge.", "Asignar Data Categories a los artículos de Knowledge y definir filtros de Data Category en la Agentforce Data Library."],
    "correctAnswerText": "Asignar Data Categories a los artículos de Knowledge y definir filtros de Data Category en la Agentforce Data Library.",
    "explanation": "La manera nativa y declarativa de restringir qué artículos de Knowledge puede consultar la Data Library es estructurar los artículos mediante Data Categories y aplicar los filtros correspondientes en la configuración de la Agentforce Data Library."
}, {
    "id": 287,
    "category": "Prompt Engineering",
    "question": "Universal Containers desea utilizar Agentforce for Sales para ayudar a los representantes de ventas a alcanzar sus cuotas de ventas brindando planes generados por IA que contengan orientación y pasos para cerrar acuerdos. ¿Qué función cumple con este requisito?",
    "choices": ["Create Account Plan", "Find Similar Deals", "Create Close Plan"],
    "correctAnswerText": "Create Close Plan",
    "explanation": "La función `Create Close Plan` en Agentforce for Sales utiliza IA para analizar la oportunidad y generar un plan estructurado paso a paso orientado a concretar el cierre del acuerdo."
}, {
    "id": 288,
    "category": "Prompt Engineering",
    "question": "Coral Cloud Resorts (CCR) nota que el agente olvidó las preferencias dietéticas/de actividad recopiladas anteriormente. Necesitan que esas preferencias persistan durante toda la sesión. ¿Qué debería implementar CCR?",
    "choices": ["Configurar variables personalizadas para capturar/almacenar las preferencias del cliente a partir de los resultados de las acciones.", "Confiar en la memoria de la conversación natural e instruir al agente para que mire hacia atrás.", "Crear una variable de contexto para capturar/almacenar las preferencias del cliente como salidas de acciones."],
    "correctAnswerText": "Crear una variable de contexto para capturar/almacenar las preferencias del cliente como salidas de acciones.",
    "explanation": "Para garantizar que los datos recolectados durante una conversación persistan de manera confiable a lo largo de toda la sesión activa del usuario, se debe utilizar una variable de contexto (context variable)."
}, {
    "id": 289,
    "category": "Data 360 Fundamentals",
    "question": "¿Cuál es el beneficio principal de utilizar un artículo de Knowledge en una Agentforce Data Library?",
    "choices": ["Solo el recuperador de artículos de Knowledge permite a los agentes acceder a Knowledge tanto desde dentro de la plataforma como en el sitio web de un cliente.", "Proporciona un repositorio estructurado y buscable de documentos aprobados para que el agente pueda recuperar información confiable para cada consulta.", "El recuperador de artículos de Knowledge tiene mejor precisión y rendimiento que el recuperador predeterminado."],
    "correctAnswerText": "Proporciona un repositorio estructurado y buscable de documentos aprobados para que el agente pueda recuperar información confiable para cada consulta.",
    "explanation": "El beneficio principal es contar con una fuente de información institucional aprobada, validada y estructurada para fundamentar (RAG) las respuestas del agente ante las consultas de los clientes."
}, {
    "id": 290,
    "category": "Prompt Engineering",
    "question": "Universal Containers necesita que sus representantes de ventas solo puedan ejecutar plantillas de prompt. ¿Qué debería utilizar la empresa para lograr este requisito?",
    "choices": ["Conjunto de permisos Prompt Execute Template", "Conjunto de permisos Prompt Template User", "Conjunto de permisos Prompt Template Manager"],
    "correctAnswerText": "Conjunto de permisos Prompt Template User",
    "explanation": "El conjunto de permisos estándar `Prompt Template User` otorga a los usuarios finales el acceso necesario para ejecutar o invocar plantillas de prompt sin permitirles crear, modificar o gestionar dichas plantillas en Prompt Builder."
}, {
    "id": 291,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers desplegó un Service Agent a producción que maneja facturación, devoluciones y soporte técnico a través de 12 subagentes (anteriormente conocidos como temas). Después de un cambio en el proceso de negocio, el Agentforce Specialist actualiza las instrucciones del subagente de facturación para incluir una nueva ruta de escalación de reembolsos. En pocos días, el equipo de experiencia del cliente informa que las interacciones de facturación se enrutan intermitentemente al subagente General FAQ en su lugar. ¿Qué enfoque es más efectivo para ayudar a diagnosticar la causa y confirmar el alcance total del impacto?",
    "choices": ["Habilitar Utterance Analysis en la org de producción para revisar los registros de conversación en busca de interacciones mal enrutadas, luego ajustar iterativamente las instrucciones del subagente de facturación en Agent Builder hasta que la tasa de enrutamiento incorrecto caiga por debajo de un umbral aceptable.", "Replicar manualmente cada escenario de falla sospechoso en Conversation Preview de Agentforce Builder, documentar los resultados de selección de subagentes y actualizar las instrucciones del subagente de facturación antes de volver a desplegar el agente.", "Volver a ejecutar el conjunto de pruebas almacenado en Agentforce Testing Center contra el agente modificado, revisar las métricas Subagent Pass % y Action Pass % para aislar las regresiones, luego extender el conjunto para cubrir la ruta de escalación de reembolsos."],
    "correctAnswerText": "Volver a ejecutar el conjunto de pruebas almacenado en Agentforce Testing Center contra el agente modificado, revisar las métricas Subagent Pass % y Action Pass % para aislar las regresiones, luego extender el conjunto para cubrir la ruta de escalación de reembolsos.",
    "explanation": "La respuesta correcta es C. Rerejutar la suite de pruebas existente en Agentforce Testing Center permite realizar una prueba de regresión automatizada y auditable, midiendo los porcentajes de aprobación a nivel de subagente y acción para aislar el impacto del cambio."
}, {
    "id": 292,
    "category": "AI Agents",
    "question": "Los representantes de ventas de Universal Containers no deberían poder crear o editar plantillas de prompt. ¿Qué conjunto de permisos debería asignar un AgentForce Specialist a los representantes de ventas?",
    "choices": ["Prompt Execute User", "Prompt Template Manager", "Prompt Template User"],
    "correctAnswerText": "Prompt Template User",
    "explanation": "Asignar el conjunto de permisos `Prompt Template User` permite a los representantes de ventas ejecutar las plantillas en sus flujos de trabajo pero les restringe los permisos de edición o creación."
}, {
    "id": 293,
    "category": "Testing, Deployment, & Maintenance",
    "question": "¿Cuál es la función principal del servicio planificador (planner service) en el sistema de Agent?",
    "choices": ["Generar consultas de registros basadas en el historial de conversación", "Ofrecer traducción de idiomas en tiempo real durante las conversaciones", "Identificar acciones de copiloto para responder a las expresiones de los usuarios"],
    "correctAnswerText": "Identificar acciones de copiloto para responder a las expresiones de los usuarios",
    "explanation": "El servicio planificador (planner service) analiza la intención del usuario y determina qué acciones del copiloto deben seleccionarse y ejecutarse para responder adecuadamente."
}, {
    "id": 294,
    "category": "AI Agents",
    "question": "Universal Containers está configurando un agente de servicio al cliente y necesita restringir una acción específica \"Process Refund\" para que solo sea visible para el motor de razonamiento cuando la cuenta de un cliente esté marcada como activa. Un Agentforce Specialist está escribiendo la cláusula available when en Agent Script para evaluar la variable @variables.IsActive. ¿Qué operador debería utilizar el Agentforce Specialist para esta condición?",
    "choices": ["El Agentforce Specialist debe utilizar el operador ==; Agent Script utiliza estrictamente == para la comparación en condicionales.", "Tanto = como == son válidos e intercambiables; el Agentforce Specialist puede utilizar cualquiera de los dos operadores para evaluar la lógica condicional en Agent Script.", "El Agentforce Specialist debe utilizar el operador =; Agent Script utiliza = tanto para la asignación de variables como para la comparación de condiciones."],
    "correctAnswerText": "El Agentforce Specialist debe utilizar el operador ==; Agent Script utiliza estrictamente == para la comparación en condicionales.",
    "explanation": "La respuesta correcta es A. En Agent Script, las expresiones condicionales (como las cláusulas `available when`) requieren el uso estricto del operador de comparación `==`."
}, {
    "id": 295,
    "category": "Data 360 Fundamentals",
    "question": "Al crear un recuperador personalizado en Einstein Studio, ¿qué paso se considera esencial?",
    "choices": ["Seleccionar el índice de búsqueda, especificar el objeto de modelo de datos (DMO) y el espacio de datos asociados, y opcionalmente definir filtros para reducir los resultados de búsqueda.", "Definir la configuración de salida especificando el número máximo de resultados a devolver y mapear los campos de salida que fundamentarán el prompt.", "Configurar el índice de búsqueda, elegir la búsqueda vectorial o híbrida, elegir los campos para filtrar, el espacio de datos y el modelo, y luego definir el método de clasificación."],
    "correctAnswerText": "Seleccionar el índice de búsqueda, especificar el objeto de modelo de datos (DMO) y el espacio de datos asociados, y opcionalmente definir filtros para reducir los resultados de búsqueda.",
    "explanation": "El paso esencial al configurar un recuperador personalizado es vincularlo al índice de búsqueda adecuado, definir el objeto DMO y espacio de datos correspondiente, y establecer las condiciones de filtrado necesarias."
}, {
    "id": 296,
    "category": "AI Agents",
    "question": "Universal Containers ha creado un Employee Agent. ¿Qué paso debería tomar un Agentforce Specialist para conectar el agente con un canal de Slack?",
    "choices": ["Crear una conexión entre Salesforce y el espacio de trabajo de Slack.", "Crear un flujo de Omni-Channel y una conexión entre Salesforce y el espacio de trabajo de Slack.", "Crear un despliegue de servicio embebido y una conexión entre Salesforce y el espacio de trabajo de Slack."],
    "correctAnswerText": "Crear una conexión entre Salesforce y el espacio de trabajo de Slack.",
    "explanation": "Para integrar un Employee Agent con Slack, el paso inicial fundamental es configurar la conexión administrativa entre la org de Salesforce y el espacio de trabajo (workspace) de Slack."
}, {
    "id": 297,
    "category": "Prompt Engineering",
    "question": "El equipo de auditoría interna de Universal Containers pide a un Agentforce que verifique que la información de la dirección esté adecuadamente enmascarada en el prompt que se está generando. ¿Cómo debería verificar el Agentforce Specialist la privacidad de los datos enmascarados en la Einstein Trust Layer?",
    "choices": ["Habilitar el cifrado de datos en el campo de dirección", "Revisar los registros de eventos de la plataforma", "Inspeccionar la ruta de auditoría de IA (AI audit trail)"],
    "correctAnswerText": "Inspeccionar la ruta de auditoría de IA (AI audit trail)",
    "explanation": "La ruta de auditoría de IA (AI audit trail) en la Einstein Trust Layer permite revisar en detalle qué datos fueron detectados y enmascarados antes de enviarse al modelo de lenguaje."
}, {
    "id": 298,
    "category": "Governance & Observability",
    "question": "Un Agentforce Specialist está evaluando una conversación de agente. ¿Cuál es la razón por la que es importante considerar las intenciones y las métricas de sesión dentro de Observability?",
    "choices": ["Para evaluar el rendimiento general del agente", "Para evaluar por qué el agente no pudo responder a la pregunta de un usuario", "Para evaluar la tasa de desvío (deflection rate) del agente"],
    "correctAnswerText": "Para evaluar el rendimiento general del agente",
    "explanation": "Las intenciones y métricas de sesión en Agentforce Observability ofrecen una visión global que permite monitorear y evaluar el rendimiento, uso y efectividad general del agente."
}, {
    "id": 299,
    "category": "Governance & Observability",
    "question": "Universal Containers necesita brindar información sobre la usabilidad de los agentes para impulsar la adopción en la organización. ¿Qué debería recomendar el Agentforce Specialist?",
    "choices": ["Agent Analytics", "Agentforce Analytics", "Agent Studio Analytics"],
    "correctAnswerText": "Agentforce Analytics",
    "explanation": "Agentforce Analytics proporciona paneles consolidados para analizar métricas de adopción, patrones de interacción, frecuencias de uso de acciones y efectividad general de los agentes."
}, {
    "id": 300,
    "category": "AI Agents",
    "question": "Universal Containers necesita asegurarse de que su agente pueda procesar de inmediato las devoluciones de los clientes validando la elegibilidad del pedido antes de proceder con el proceso de devolución. UC desea mantener un flujo conversacional natural para los clientes mientras garantiza que el paso de validación del pedido se siga estrictamente. ¿Qué debería hacer el Agentforce Specialist para lograr el resultado deseado?",
    "choices": ["Utilizar Salesforce Flow para guiar al modelo de lenguaje de gran tamaño en el manejo de la validación del pedido y el proceso de devolución.", "Utilizar un método personalizado Apex @InvocableMethod para manejar todo el proceso de devolución.", "Utilizar instrucciones procedimentales en Agent Script para imponer el paso de validación del pedido. ##"],
    "correctAnswerText": "Utilizar instrucciones procedimentales en Agent Script para imponer el paso de validación del pedido. ##",
    "explanation": "La respuesta correcta es C. Las instrucciones procedimentales en Agent Script permiten combinar una conversación flexible con la imposición estricta y determinista de pasos obligatorios de validación."
}, {
    "id": 301,
    "category": "AI Agents",
    "question": "¿Qué configuración debe completar un Agentforce para que los usuarios accedan a campos habilitados para IA generativa en la aplicación móvil de Salesforce?",
    "choices": ["Habilitar Mobile Generative AI.", "Habilitar Mobile Prompt Responses.", "Habilitar Dynamic Forms on Mobile."],
    "correctAnswerText": "Habilitar Dynamic Forms on Mobile.",
    "explanation": "Para que los campos interactivos de IA generativa configurados en páginas de registros estén disponibles en la aplicación móvil de Salesforce, la organización debe tener activada la característica Dynamic Forms on Mobile."
}, {
    "id": 302,
    "category": "Data 360 Fundamentals",
    "question": "Un Service Agent en Universal Containers (UC) está diseñado para ayudar a los clientes a resolver problemas buscando en artículos de conocimiento. Los artículos de conocimiento tienen archivos PDF adjuntos que agregan detalles críticos. UC informa que el agente brinda excelentes resúmenes de los artículos de conocimiento, pero parece no estar al tanto de los archivos PDF adjuntos. ¿Cómo debería configurar un Agentforce Specialist el índice de búsqueda de Data Cloud para incluir el contenido de estos archivos adjuntos?",
    "choices": ["Aumentar el tamaño del fragmento del artículo y los límites de tokens para la indexación de Knowledge de modo que contextos más grandes capturen referencias de archivos adjuntos.", "Habilitar 'Include Related Attachments' para Knowledge--kav y mapear el objeto de modelo de datos no estructurados (UDMO) ContentDocumentLink.", "Utilizar la opción 'Include Attachments' de Data Cloud y seleccionar el objeto de modelo de datos no estructurados (UDMO) ContentDocumentVersion."],
    "correctAnswerText": "Utilizar la opción 'Include Attachments' de Data Cloud y seleccionar el objeto de modelo de datos no estructurados (UDMO) ContentDocumentVersion.",
    "explanation": "Para extraer e indexar el contenido de los archivos adjuntos vinculados a los artículos de Knowledge, la configuración en Data Cloud requiere habilitar la opción de incluir archivos adjuntos y seleccionar el objeto UDMO `ContentDocumentVersion`."
}, {
    "id": 303,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist está creando una plantilla de prompt para ayudar a los representantes de soporte a redactar respuestas a las quejas de los clientes. Para garantizar que las respuestas sean empáticas y útiles, ¿cuál es un elemento clave a incluir en la plantilla de prompt?",
    "choices": ["Una instrucción directa al modelo de lenguaje de gran tamaño (LLM) para que adopte el rol de un personaje", "Una lista de palabras clave relacionadas con las quejas de los clientes", "El historial completo de las interacciones previas del cliente con la empresa"],
    "correctAnswerText": "Una instrucción directa al modelo de lenguaje de gran tamaño (LLM) para que adopte el rol de un personaje",
    "explanation": "Asignar un rol o persona clara al LLM (por ejemplo: \"Actúa como un agente de soporte empático\") es una técnica fundamental para guiar el tono y el estilo de comunicación de la respuesta generada."
}, {
    "id": 304,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) utiliza una biblioteca de datos basada en la carga de archivos y un prompt personalizado para respaldar contenido de capacitación impulsado por IA. Sin embargo, los usuarios informan que la IA devuelve con frecuencia documentos desactualizados. ¿Qué acción correctiva debería implementar UC para mejorar la relevancia del contenido?",
    "choices": ["Cambiar la fuente de la biblioteca de datos de cargas de archivos a una biblioteca de datos basada en Knowledge, porque las bases de conocimiento de Salesforce gestionan automáticamente la antigüedad de los documentos.", "Configurar un recuperador personalizado que incluya una condición de filtro que limite la recuperación a los documentos actualizados dentro de un período reciente definido, garantizando que solo se utilice contenido actual para las respuestas de la IA.", "Continuar utilizando el recuperador predeterminado sin filtros, porque las recargas periódicas eventualmente eliminarán los documentos desactualizados sin necesidad de una configuración adicional. ##"],
    "correctAnswerText": "Configurar un recuperador personalizado que incluya una condición de filtro que limite la recuperación a los documentos actualizados dentro de un período reciente definido, garantizando que solo se utilice contenido actual para las respuestas de la IA.",
    "explanation": "La solución directa para evitar recuperar documentos antiguos en una biblioteca basada en archivos es implementar un recuperador personalizado con filtros de fecha (por ejemplo, fecha de modificación reciente)."
}, {
    "id": 305,
    "category": "Governance & Observability",
    "question": "Un Agentforce Specialist tiene la tarea de analizar las interacciones de los agentes, examinando las entradas, solicitudes y consultas de los usuarios para identificar patrones y tendencias. ¿Qué funcionalidad permite al Agentforce Specialist lograr esto?",
    "choices": ["Panel Agent Event Logs.", "Panel AI Audit and Feedback Data.", "Panel User Utterances."],
    "correctAnswerText": "Panel User Utterances.",
    "explanation": "El panel `User Utterances` en Agentforce Analytics muestra y categoriza las expresiones reales ingresadas por los usuarios, permitiendo identificar patrones, consultas frecuentes y tendencias."
}, {
    "id": 306,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers necesita traer garantías de clientes individuales desde un sistema externo a Data Cloud. Desean que Agentforce devuelva respuestas relacionadas con la garantía solo para cuentas cuyo estado de garantía sea activo. ¿Qué enfoque de búsqueda debería configurar el Agentforce Specialist para garantizar que la información se recupere correctamente?",
    "choices": ["Depender de las instrucciones de Agentforce para imponer restricciones de garantía e incluir solo resultados de WarrantyStatus = Active.", "Almacenar el estado de garantía de la cuenta en una variable personalizada de Agentforce para filtrar dinámicamente las garantías durante la recuperación.", "Utilizar la búsqueda híbrida y aplicar un prefiltrado en un nuevo recuperador personalizado para las cuentas coincidentes donde el campo WarrantyStatus = Active,"],
    "correctAnswerText": "Utilizar la búsqueda híbrida y aplicar un prefiltrado en un nuevo recuperador personalizado para las cuentas coincidentes donde el campo WarrantyStatus = Active,",
    "explanation": "Para garantizar un filtrado determinista previo a la búsqueda semántica, se debe configurar un recuperador personalizado que aplique prefiltros de metadatos (como `WarrantyStatus = Active`)."
}, {
    "id": 307,
    "category": "AI Agents",
    "question": "El VP de Servicio en Universal Containers requiere un informe que muestre las tendencias semanales de la tasa de desvío y los volúmenes de escalación para el Agentforce Service Agent durante los últimos 90 días. ¿Qué enfoque debería recomendar el Agentforce Specialist?",
    "choices": ["Habilitar Agentforce Health Monitoring para configurar umbrales de alerta de tasa de escalación y exportar los datos a Tableau.", "Utilizar Agent Analytics dentro de Agentforce Observability, que proporciona paneles impulsados por Tableau con métricas preconstruidas de tasa de desvío, volumen de escalación y abandono calculadas a partir de datos de sesión almacenados en Data 360", "Consultar el modelo de datos de seguimiento de sesión en Data Cloud mediante CRM Analytics para construir un panel personalizado."],
    "correctAnswerText": "Utilizar Agent Analytics dentro de Agentforce Observability, que proporciona paneles impulsados por Tableau con métricas preconstruidas de tasa de desvío, volumen de escalación y abandono calculadas a partir de datos de sesión almacenados en Data 360",
    "explanation": "La respuesta correcta es B. Agent Analytics en Agentforce Observability ofrece paneles preconstruidos impulsados por Tableau diseñados para mostrar métricas clave de rendimiento como desvío de llamadas y volumen de escalaciones."
}, {
    "id": 308,
    "category": "AI Agents",
    "question": "Universal Containers implementa Custom Agent Actions para mejorar sus operaciones de servicio al cliente. El equipo de desarrollo necesita comprender los componentes clave de una Custom Agent Action para garantizar la configuración y funcionalidad adecuadas. ¿Qué debería revisar el equipo de desarrollo en la configuración de la Custom Agent Action para identificar uno de los componentes clave?",
    "choices": ["Action Triggers", "Instructions", "Output Types"],
    "correctAnswerText": "Instructions",
    "explanation": "Las instrucciones (Instructions) son un componente principal de las Custom Agent Actions, ya que le indican al motor de razonamiento cómo, cuándo y bajo qué parámetros debe ejecutar la acción."
}, {
    "id": 309,
    "category": "Prompt Engineering",
    "question": "Universal Containers tiene una plantilla de prompt de correo electrónico estándar activa que no cumple completamente con los requisitos del negocio. ¿Qué pasos debería tomar un Agentforce Specialist para utilizar el contenido de la plantilla de correo electrónico estándar en cuestión y personalizarla para cumplir plenamente con los requisitos del negocio?",
    "choices": ["Guardar como nueva plantilla y editar según sea necesario.", "Clonar la plantilla existente y modificarla según sea necesario.", "Guardar como nueva versión y editar según sea necesario."],
    "correctAnswerText": "Clonar la plantilla existente y modificarla según sea necesario.",
    "explanation": "En Prompt Builder, las plantillas estándar son de solo lectura. Para personalizarlas manteniendo el contenido original como base, la práctica recomendada es clonar la plantilla existente y realizar las modificaciones necesarias."
}, {
    "id": 310,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers ha fragmentado y vectorizado con éxito sus notas de reuniones no estructuradas en un índice de búsqueda de Data 360. Un Agentforce Specialist necesita conectar estos datos a una plantilla de prompt para refinar dinámicamente los criterios de búsqueda y recuperar la información más relevante. ¿Cómo debería lograr esto el especialista?",
    "choices": ["Crear una plantilla Flex que haga referencia a un objeto de lago de datos (DLO).", "Crear una plantilla Flex que haga referencia a un recuperador (retriever) en la plantilla de prompt.", "Crear una plantilla Flex que haga referencia al objeto de modelo de datos (DMO)."],
    "correctAnswerText": "Crear una plantilla Flex que haga referencia a un recuperador (retriever) en la plantilla de prompt.",
    "explanation": "Para realizar búsquedas semánticas sobre datos no estructurados indexados en Data 360 desde una plantilla de prompt, la plantilla Flex debe hacer referencia a un recuperador (retriever)."
}, {
    "id": 311,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers está indexando millones de manuales de productos donde los usuarios pueden hacer tanto consultas estructuradas (números de modelo) como preguntas en lenguaje natural (por ejemplo, \"¿Cómo reinicio mi dispositivo?\"). ¿Qué enfoque de recuperación debería utilizar la empresa?",
    "choices": ["Utilizar solo la búsqueda por palabras clave, ya que los números de modelo dominan las consultas.", "Utilizar solo la búsqueda semántica, ya que siempre se prefiere el lenguaje natural.", "Utilizar la búsqueda híbrida para combinar la precisión de las palabras clave con la flexibilidad semántica."],
    "correctAnswerText": "Utilizar la búsqueda híbrida para combinar la precisión de las palabras clave con la flexibilidad semántica.",
    "explanation": "La búsqueda híbrida es la mejor opción cuando coexisten consultas exactas (como identificadores o números de modelo) y preguntas conversacionales en lenguaje natural."
}, {
    "id": 312,
    "category": "AI Agents",
    "question": "El equipo de ciencia de datos de Universal Containers aloja un modelo de lenguaje de gran tamaño (LLM) generativo en Amazon Web Services (AWS). ¿Qué debería utilizar el equipo para acceder a modelos alojados externamente en Salesforce Platform?",
    "choices": ["Model Builder", "App Builder", "Copilot Builder"],
    "correctAnswerText": "Model Builder",
    "explanation": "Model Builder (dentro de Einstein Studio) permite integrar y conectar modelos fundacionales externos (BYOM) alojados en plataformas de terceros como AWS o Databricks."
}, {
    "id": 313,
    "category": "Prompt Engineering",
    "question": "Universal Containers ha registrado un servicio externo y ha creado un flujo de prompt activado por plantilla que invoca el servicio externo para obtener datos de una API REST. UC ahora necesita hacer que los datos de respuesta del servicio externo se puedan utilizar dentro de una plantilla de prompt como un campo de combinación cuando la plantilla se ejecute. ¿Cómo debería UC cumplir con este requisito?",
    "choices": ["Utilizar campos de combinación de registros de servicios externos.", "Convertir el JSON a un campo de combinación XML.", "Utilizar el elemento de flujo 'Add Prompt Instructions'."],
    "correctAnswerText": "Utilizar el elemento de flujo 'Add Prompt Instructions'.",
    "explanation": "Dentro de un flujo activado por plantilla de prompt, el contenido extraído o procesado desde servicios externos se pasa dinámicamente al área de trabajo del prompt utilizando el elemento de flujo `Add Prompt Instructions`."
}, {
    "id": 314,
    "category": "Prompt Engineering",
    "question": "Universal Containers tiene como objetivo optimizar las tareas diarias del equipo de ventas mediante IA. Al considerar estos nuevos flujos de trabajo, ¿qué mejora requiere el uso de Prompt Builder?",
    "choices": ["Poblar una estimación de tiempo de cierre generada por IA en las oportunidades", "Poblar un campo de resumen generado por IA para contratos de ventas.", "Poblar una puntuación de prospecto generada por IA para nuevos prospectos."],
    "correctAnswerText": "Poblar un campo de resumen generado por IA para contratos de ventas.",
    "explanation": "Poblar un campo de texto con un resumen sintetizado por IA mediante instrucciones personalizadas es el caso de uso representativo de la generación de campos (Field Generation) en Prompt Builder."
}, {
    "id": 315,
    "category": "AI Agents",
    "question": "Universal Containers está interesada en mejorar la eficiencia de las operaciones de ventas analizando sus datos mediante predicciones impulsadas por IA en Einstein Studio. ¿Qué caso de uso funciona para este escenario?",
    "choices": ["Predecir el sentimiento del cliente hacia un mensaje de promoción.", "Predecir el valor del tiempo de vida del cliente (CLV) de una cuenta.", "Predecir los productos más populares del nuevo catálogo de productos."],
    "correctAnswerText": "Predecir el valor del tiempo de vida del cliente (CLV) de una cuenta.",
    "explanation": "Predecir el valor del tiempo de vida del cliente (Customer Lifetime Value) es un caso de uso clásico de modelado analítico predictivo en Einstein Studio."
}, {
    "id": 316,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) implementó recientemente capacidades de IA generativa de Einstein y creó un prompt personalizado para resumir registros de casos. Los usuarios han informado que los resúmenes de casos generados no devuelven la información adecuada. ¿Cuál es una posible explicación del deficiente rendimiento del prompt?",
    "choices": ["La versión de la plantilla de prompt es incompatible con el LLM elegido.", "Los datos que se utilizan para el grounding son incorrectos o incompletos.", "La Einstein Trust Layer está configurada incorrectamente."],
    "correctAnswerText": "Los datos que se utilizan para el grounding son incorrectos o incompletos.",
    "explanation": "Si los datos del registro mapeados para el grounding del prompt faltan, están incompletos o son incorrectos, la salida generada por el LLM carecerá de la información adecuada."
}, {
    "id": 317,
    "category": "Prompt Engineering",
    "question": "¿Qué requisito comercial presenta un buen caso de uso para aprovechar Einstein Prompt Builder?",
    "choices": ["Pronosticar tendencias de ventas futuras basadas en datos históricos.", "Identificar prospectos potenciales de alto valor para campañas de marketing dirigidas.", "Enviar una respuesta a una solicitud de propuesta mediante un correo electrónico personalizado."],
    "correctAnswerText": "Enviar una respuesta a una solicitud de propuesta mediante un correo electrónico personalizado.",
    "explanation": "Redactar o responder a correos electrónicos complejos de forma personalizada es un caso de uso generativo clave para Prompt Builder."
}, {
    "id": 318,
    "category": "AI Agents",
    "question": "Un representante de servicio al cliente está viendo un objeto personalizado que almacena información de viajes. Recientemente recibió una alerta meteorológica y ahora necesita cancelar los vuelos de los clientes relacionados con este itinerario. El representante necesita revisar los artículos de Knowledge sobre la cancelación y reprogramación de vuelos. ¿Qué capacidad de Agentforce ayuda al representante a lograr esto?",
    "choices": ["Invocar un flujo que realiza una llamada a datos externos para crear un artículo de Knowledge.", "Ejecutar tareas basadas en acciones disponibles, respondiendo preguntas utilizando información de artículos de Knowledge accesibles.", "Generar un artículo de Knowledge basado en los prompts que ingresa el agente para crear pasos para cancelar vuelos."],
    "correctAnswerText": "Ejecutar tareas basadas en acciones disponibles, respondiendo preguntas utilizando información de artículos de Knowledge accesibles.",
    "explanation": "Agentforce combina la capacidad de responder consultas fundamentadas en artículos de Knowledge con la ejecución directa de acciones asociadas para completar tareas."
}, {
    "id": 319,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) planea implementar plantillas de prompt que utilicen los modelos fundacionales estándar. ¿Qué debería considerar UC al construir plantillas de prompt en Prompt Builder?",
    "choices": ["Incluir preguntas de opción múltiple dentro del prompt para probar la comprensión del contexto por parte del LLM.", "Pedirle que adopte un rol o personaje en la plantilla de prompt para proporcionar más contexto al LLM.", "Entrenar al LLM con datos utilizando diferentes estilos de escritura, elección de palabras y puntuación."],
    "correctAnswerText": "Pedirle que adopte un rol o personaje en la plantilla de prompt para proporcionar más contexto al LLM.",
    "explanation": "En las plantillas de prompt con modelos estándar, asignar un rol específico (role-playing) ayuda a encuadrar la perspectiva, estilo y tono del modelo generativo."
}, {
    "id": 320,
    "category": "AI Agents",
    "question": "Universal Containers ha desarrollado un agente para flujos de trabajo de originación de préstamos que debe manejar tanto el no determinismo como los estrictos requisitos de cumplimiento normativo. El agente debe asegurarse de que los pasos de verificación de identidad y verificación de crédito se ejecuten en una secuencia precisa sin desviaciones. ¿Qué declaración diferencia correctamente estos dos patrones de instrucciones en el enfoque de razonamiento híbrido de Agent Script?",
    "choices": ["Las instrucciones declarativas requieren la ejecución de Flow para la lógica de negocio, mientras que las instrucciones procedimentales son nativas de Agent Script pero no pueden acceder a sistemas o API externos.", "Las instrucciones declarativas proporcionan flexibilidad conversacional a través de la interpretación del modelo de lenguaje de gran tamaño, mientras que las instrucciones procedimentales utilizan el prefijo -> para imponer un orden de ejecución garantizado con run, if y transiciones.", "Las instrucciones declarativas solo funcionan en Canvas View para la edición visual, mientras que las instrucciones procedimentales requieren Script View y no se pueden representar en la interfaz visual."],
    "correctAnswerText": "Las instrucciones declarativas proporcionan flexibilidad conversacional a través de la interpretación del modelo de lenguaje de gran tamaño, mientras que las instrucciones procedimentales utilizan el prefijo -> para imponer un orden de ejecución garantizado con run, if y transiciones.",
    "explanation": "La respuesta correcta es B. El razonamiento híbrido en Agent Script combina la flexibilidad conversacional impulsada por el LLM (mediante instrucciones declarativas) con el control procedimental determinista (mediante instrucciones precedidas por `->`), garantizando la ejecución ordenada y obligatoria de acciones críticas."
}, {
    "id": 321,
    "category": "AI Agents",
    "question": "Un Agentforce tiene la tarea de optimizar un flujo de proceso de negocio asignando acciones a agentes dentro de la plataforma Salesforce Agentforce. ¿Cuál es el método correcto para que el Agentforce Specialist asigne acciones a un agente?",
    "choices": ["Asignar la acción a un tema (Topic) primero en Agent Builder.", "Asignar la acción a un tema (Topic) primero en la página de detalles de Agent Actions.", "Asignar la acción a un tema (Topic) primero en Action Builder."],
    "correctAnswerText": "Asignar la acción a un tema (Topic) primero en Agent Builder.",
    "explanation": "En la plataforma Agentforce, las acciones se asignan a los agentes vinculándolas primero a un tema (Topic) en Agent Builder, el cual actúa como el contenedor que conecta la intención del agente con sus capacidades de ejecución."
}, {
    "id": 322,
    "category": "Data 360 Fundamentals",
    "question": "Un equipo de ciencia de datos entrenó un modelo de clasificación XGBoost para recomendaciones de productos en Databricks. El Agentforce Specialist tiene la tarea de incorporar inferencias para recomendaciones de productos de este modelo a Data Cloud como un objeto de modelo de datos (DMO) independiente. ¿Cómo debería configurarlo el Agentforce Specialist?",
    "choices": ["Crear el punto de enlace de servicio (serving endpoint) en Databricks, luego configurar el modelo utilizando Model Builder.", "Crear el punto de enlace de servicio (serving endpoint) en Einstein Studio, luego configurar el modelo utilizando Model Builder.", "Crear el punto de enlace de servicio (serving endpoint) en Databricks, luego configurar el modelo utilizando un conector Python SDK."],
    "correctAnswerText": "Crear el punto de enlace de servicio (serving endpoint) en Databricks, luego configurar el modelo utilizando Model Builder.",
    "explanation": "Para integrar modelos externos entrenados en plataformas como Databricks, primero se crea el punto de enlace de servicio en Databricks y posteriormente se registra y configura la conexión dentro de Salesforce utilizando Model Builder."
}, {
    "id": 323,
    "category": "AI Agents",
    "question": "Universal Containers desea permitir que sus agentes de servicio consulten el estado de cumplimiento actual de un pedido mediante lenguaje natural. Existe un flujo autolanzado (autolaunched flow) existente para consultar la información de Oracle ERP, que es el sistema de registro para el proceso de cumplimiento de pedidos. ¿Cómo debería aplicar un Agentforce el poder de la IA conversacional a este caso de uso?",
    "choices": ["Crear una plantilla de prompt Flex en Prompt Builder.", "Crear una acción de copiloto personalizada (custom copilot action) que llame a un flujo.", "Configurar la acción estándar Integration Flow en Agent."],
    "correctAnswerText": "Crear una acción de copiloto personalizada (custom copilot action) que llame a un flujo.",
    "explanation": "Crear una acción personalizada que invoque el flujo de Salesforce permite al motor de razonamiento del agente interpretar la consulta en lenguaje natural del usuario y activar la automatización para obtener los datos en tiempo real de Oracle ERP."
}, {
    "id": 324,
    "category": "AI Agents",
    "question": "Un Agentforce Specialist desea asegurarse de que su acción de agente personalizada funcione según lo esperado en las conversaciones. ¿En qué debería centrarse el Agentforce Specialist al crear las instrucciones de la acción?",
    "choices": ["Escribir instrucciones concisas para la acción del agente y probar en Agentforce Builder.", "Garantizar que la etiqueta de la acción del agente coincida con la intención de la expresión (utterance).", "Incluir descripciones detalladas exhaustivas y realizar pruebas de humo (smoke testing)."],
    "correctAnswerText": "Escribir instrucciones concisas para la acción del agente y probar en Agentforce Builder.",
    "explanation": "Las instrucciones de acción deben ser concisas, claras y enfocadas en el contexto de invocación, validando su comportamiento interactivo directamente dentro del entorno de prueba de Agentforce Builder."
}, {
    "id": 325,
    "category": "AI Agents",
    "question": "¿Qué escenario ilustra mejor el uso del Model Context Protocol (MCP) en un despliegue de IA empresarial?",
    "choices": ["Un agente asistente legal que utiliza MCP para encontrar dinámicamente una API de clasificación de documentos para analizar archivos de casos", "Un agente de servicio al cliente que entabla una conversación en tiempo real con otro agente para resolver tickets", "Un agente de ventas que descubre las capacidades de otros agentes mediante Agent Cards"],
    "correctAnswerText": "Un agente asistente legal que utiliza MCP para encontrar dinámicamente una API de clasificación de documentos para analizar archivos de casos",
    "explanation": "Model Context Protocol (MCP) es el estándar de arquitectura que permite a los modelos e intérpretes de IA descubrir, consultar esquemas e invocar herramientas o API externas de forma dinámica durante el tiempo de ejecución."
}, {
    "id": 326,
    "category": "AI Agents",
    "question": "Coral Cloud Resorts (CCR) utiliza Agentforce para ayudar a los clientes con problemas de reservas y servicio. CCR desea implementar un proceso de triaje para que: \\* Las solicitudes de alta gravedad se escalen a un representante de servicio humano. \\* Las solicitudes de menor gravedad resulten en la creación de un caso de soporte para el huésped. El requisito es lograr la mayor confiabilidad y determinismo en la respuesta del agente. ¿Qué enfoque debería recomendar un Agentforce Specialist?",
    "choices": ["Escribir la lógica de triaje y enrutamiento en Topic Instructions utilizando un patrón IF, THEN, ELSE: \"Escalate to human service rep if the request is considered severe, otherwise create support case\".", "Utilizar palabras clave absolutas como \"Always\" y \"Never\" en Topic Instructions para imponer la lógica, como \"Always escalate when severity is high\" y \"Never create a support case when severity is high\".", "Crear una variable personalizada severityLevel poblada por una acción de Triaje. Agregar filtros para que la acción \"Escalate to human service rep\" solo se ejecute cuando severityLevel = 'High', y la acción \"Create Support Case\" solo se ejecute cuando severityLevel != 'High'."],
    "correctAnswerText": "Crear una variable personalizada severityLevel poblada por una acción de Triaje. Agregar filtros para que la acción \"Escalate to human service rep\" solo se ejecute cuando severityLevel = 'High', y la acción \"Create Support Case\" solo se ejecute cuando severityLevel != 'High'.",
    "explanation": "La respuesta correcta es C. Para lograr una toma de decisiones 100% determinista e inquebrantable, se debe almacenar el resultado en una variable personalizada y aplicar filtros condicionales directos sobre las acciones."
}, {
    "id": 327,
    "category": "AI Agents",
    "question": "Universal Containers ha visto una alta tasa de adopción de una nueva función que utiliza IA generativa para poblar un campo de resumen de un objeto personalizado, Competitor Analysis. Todos los usuarios de ventas tienen el mismo perfil, pero un usuario no puede ver el icono del campo habilitado para IA generativa junto al campo de resumen. ¿Cuál es la causa más probable del problema?",
    "choices": ["El usuario no tiene asignado el conjunto de permisos Prompt Template User.", "La plantilla de prompt asociada con el campo de resumen no está activada para ese usuario.", "El usuario no tiene asignado el conjunto de permisos Generative AI User."],
    "correctAnswerText": "El usuario no tiene asignado el conjunto de permisos Generative AI User.",
    "explanation": "La visibilidad y capacidad de interactuar con características e iconos de IA generativa dentro de la interfaz de usuario de Salesforce están condicionadas a la asignación del conjunto de permisos `Generative AI User`."
}, {
    "id": 328,
    "category": "Data 360 Fundamentals",
    "question": "Un AgentForce Specialist desea solucionar los problemas de un agente que está alucinando enlaces web. El agente tiene una acción que utiliza una plantilla de prompt, la cual utiliza un recuperador de conocimiento, para generar el texto de salida que utilizará el agente. ¿Qué proceso es el adecuado para encontrar la causa raíz del comportamiento de alucinación?",
    "choices": ["Examinar el nombre del tema y la descripción de clasificación en busca de barreras de seguridad (guardrails) contra alucinaciones.", "Examinar las instrucciones del prompt y el contenido de los fragmentos (chunks) mostrados en la salida del prompt resuelto.", "Examinar las instrucciones del tema y asegurarse de que la palabra \"ALWAYS\" se utilice en las barreras de seguridad contra alucinaciones."],
    "correctAnswerText": "Examinar las instrucciones del prompt y el contenido de los fragmentos (chunks) mostrados en la salida del prompt resuelto.",
    "explanation": "Inspeccionar las instrucciones de la plantilla de prompt junto con el texto real de los fragmentos (chunks) devueltos por el recuperador en la vista de resolución permite identificar si la alucinación proviene de datos de grounding incorrectos o de instrucciones ambiguas."
}, {
    "id": 329,
    "category": "AI Agents",
    "question": "Un representante de ventas en Universal Containers está extremadamente ocupado y, a veces, tiene llamadas de ventas muy largas por voz y video en las que puede perderse detalles clave. Recientemente está comenzando a adoptar nuevas características de IA generativa. ¿Qué función de Einstein Generative AI debería recomendar un Agentforce para ayudar al representante a obtener los detalles que podría haberse perdido durante una conversación?",
    "choices": ["Call Summary", "Call Explorer", "Sales Summary"],
    "correctAnswerText": "Call Summary",
    "explanation": "La característica `Call Summary` genera resúmenes automáticos y concisos con los puntos clave, decisiones y elementos de acción derivados de grabaciones de llamadas de audio o video."
}, {
    "id": 330,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers implementa tres acciones personalizadas para obtener tres tipos distintos de resúmenes de ventas para sus usuarios. Los usuarios se quejan de que no obtienen el resumen correcto según sus expresiones (utterances). ¿Qué debería investigar el Agentforce Specialist como causa raíz?",
    "choices": ["Revisar que la acción personalizada esté asignada a un agente.", "Revisar las instrucciones de las acciones para asegurarse de que sean únicas.", "Asegurarse de que los tipos de entrada y salida estén elegidos correctamente."],
    "correctAnswerText": "Revisar las instrucciones de las acciones para asegurarse de que sean únicas.",
    "explanation": "Si las instrucciones de diferentes acciones personalizadas son vagas o se superponen semánticamente, el clasificador y motor de razonamiento del agente no podrá determinar con precisión cuál acción debe ejecutarse."
}, {
    "id": 331,
    "category": "AI Agents",
    "question": "Universal Containers está planificando un correo electrónico de marketing sobre los productos que mejor coincidan con los intereses expresados por un cliente. ¿Qué debería recomendar un Agentforce para generar este correo electrónico?",
    "choices": ["Plantilla de correo electrónico de marketing estándar utilizando Apex o flujos para hacer coincidir el interés en los productos", "Plantilla de correo electrónico de ventas personalizada que esté fundamentada con información de intereses y productos", "Borrador de correo electrónico estándar con Einstein y elegir la plantilla de correo electrónico estándar"],
    "correctAnswerText": "Plantilla de correo electrónico de ventas personalizada que esté fundamentada con información de intereses y productos",
    "explanation": "Crear una plantilla de correo personalizada e incorporar el grounding con los datos del CRM (intereses del cliente y catálogo de productos) permite generar comunicaciones personalizadas impulsadas por IA."
}, {
    "id": 332,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist creó una plantilla de prompt Field Generation. ¿Qué debería hacer el Agentforce Specialist para exponer la plantilla al usuario?",
    "choices": ["Utilizar un screen flow para asociar la plantilla de prompt Field Generation.", "Asociar la plantilla con el campo de formulario en la página Lightning.", "Llamar a una plantilla utilizando un flujo autolanzado."],
    "correctAnswerText": "Asociar la plantilla con el campo de formulario en la página Lightning.",
    "explanation": "Para que el usuario final pueda invocar la generación asistida por IA en un campo de registro, la plantilla de prompt de Field Generation se debe asociar directamente a las propiedades de ese campo en el creador de páginas Lightning (Lightning App Builder)."
}, {
    "id": 333,
    "category": "Prompt Engineering",
    "question": "Un Agentforce necesita habilitar el uso de plantillas de prompt Sales Email para el equipo de ventas. El Agentforce Specialist ya creó las plantillas en Prompt Builder. Según las mejores prácticas, ¿qué pasos debería tomar el Agentforce Specialist para garantizar que el equipo de ventas pueda utilizar estas plantillas?",
    "choices": ["Asignar el conjunto de permisos Prompt Template User y habilitar Sales Emails en Setup.", "Asignar el conjunto de permisos Prompt Template Manager y habilitar Sales Emails en Setup.", "Asignar el conjunto de permisos Data Cloud Admin y habilitar Sales Emails en Setup."],
    "correctAnswerText": "Asignar el conjunto de permisos Prompt Template User y habilitar Sales Emails en Setup.",
    "explanation": "Los usuarios finales necesitan el conjunto de permisos `Prompt Template User` para ejecutar las plantillas, y la función de `Sales Emails` debe estar activa en la configuración general (Setup)."
}, {
    "id": 334,
    "category": "AI Agents",
    "question": "Cloud Kicks (CK) está lanzando un nuevo portal de socios en Experience Cloud. CK desea brindar a los socios un agente que pueda responder preguntas sobre especificaciones de productos desde la base de conocimientos y permitirles enviar un nuevo Lead para un cliente potencial que hayan identificado. El agente debe ser accesible solo para usuarios socios autenticados en el portal. ¿Qué tipo de agente se requiere para cumplir con este escenario?",
    "choices": ["Sales Agent", "Commerce Agent", "Service Agent"],
    "correctAnswerText": "Service Agent",
    "explanation": "El `Service Agent` es el tipo de agente diseñado para ser desplegado en portales de Experience Cloud para usuarios externos autenticados, combinando la consulta a bases de conocimiento con acciones personalizadas del CRM."
}, {
    "id": 335,
    "category": "AI Agents",
    "question": "Universal Containers ha estado construyendo un agente utilizando Canvas. Ha creado una acción \"Issue Refund\". Las reglas del negocio dictan que solo se pueden emitir reembolsos si el Account Tier del cliente es \"Platinum\". Actualmente, el agente confía en sus instrucciones del sistema para verificar el nivel, pero ocasionalmente alucina la autorización e intenta llamar a la acción de reembolso para clientes Standard, lo que resulta en errores de backend. ¿Cómo debería el Agentforce Specialist utilizar filtros para garantizar de forma determinista que el agente no pueda procesar la acción \"Issue Refund\" a menos que el cliente cumpla con el criterio?",
    "choices": ["Actualizar las instrucciones del sistema del agente con una regla estricta para filtrar manualmente cualquier solicitud de reembolso si el nivel de cuenta del cliente no es Platinum.", "Aplicar un filtro de texto a la Agent Session que bloquee automáticamente la palabra \"refund\" del prompt del usuario a menos que sea un cliente Platinum.", "Configurar un filtro de condición de acción (Action Condition filter) en la acción \"Issue Refund\" para que solo esté disponible para el agente cuando Account Tier sea igual a \"Platinum\"."],
    "correctAnswerText": "Configurar un filtro de condición de acción (Action Condition filter) en la acción \"Issue Refund\" para que solo esté disponible para el agente cuando Account Tier sea igual a \"Platinum\".",
    "explanation": "Aplicar un filtro condicional sobre la acción (`available when`) oculta físicamente la acción al motor de razonamiento si la condición de negocio no se cumple, eliminando deterministamente los errores por alucinación."
}, {
    "id": 336,
    "category": "Data 360 Fundamentals",
    "question": "¿Qué sucede cuando un fragmento de texto se vectoriza?",
    "choices": ["Crea representaciones numéricas del contenido del fragmento para permitir la recuperación basada en el significado.", "Encripta el contenido para que se pueda almacenar de forma segura dentro de los espacios de datos de Data 360.", "Reduce el tamaño de archivo del documento original para reducir los costos de Data 360."],
    "correctAnswerText": "Crea representaciones numéricas del contenido del fragmento para permitir la recuperación basada en el significado.",
    "explanation": "La vectorización convierte el texto plano en incrustaciones numéricas (vector embeddings) que representan su significado semántico en un espacio multidimensional."
}, {
    "id": 337,
    "category": "AI Agents",
    "question": "El equipo de ventas de Universal Containers realiza numerosas llamadas de ventas por video con prospectos en todo el país. La dirección de ventas desea una forma sencilla de comprender información clave, como las condiciones de los acuerdos o los sentimientos de los clientes. ¿Qué función de Einstein Generative AI debería recomendar un Agentforce para esta solicitud?",
    "choices": ["Einstein Call Summaries", "Einstein Conversation Insights", "Einstein Video KPI"],
    "correctAnswerText": "Einstein Conversation Insights",
    "explanation": "Einstein Conversation Insights analiza llamadas de voz y video para identificar patrones conversacionales, menciones de competidores, términos clave y análisis de sentimiento."
}, {
    "id": 338,
    "category": "Data 360 Fundamentals",
    "question": "Una empresa necesita asegurarse de que los clientes siempre reciban respuestas basadas en la versión más actual de la documentación de soporte. ¿Qué debería recomendar un Agentforce Specialist?",
    "choices": ["Utilizar una Agentforce Data Library (ADL) basada en archivos y habilitar la configuración de gestión de versiones para garantizar que el agente siempre recupere el último documento.", "Utilizar una Agentforce Data Library (ADL) basada en conocimiento; los artículos de conocimiento tienen un control de versiones nativo integrado, por lo que los agentes recuperan automáticamente la versión publicada actual.", "Utilizar cualquier tipo de Agentforce Data Library (ADL); ambos sirven automáticamente el contenido más reciente una vez que se reconstruye el índice de búsqueda."],
    "correctAnswerText": "Utilizar una Agentforce Data Library (ADL) basada en conocimiento; los artículos de conocimiento tienen un control de versiones nativo integrado, por lo que los agentes recuperan automáticamente la versión publicada actual.",
    "explanation": "Las librerías basadas en Salesforce Knowledge aprovechan el ciclo de vida e historial de versiones nativo de los artículos, garantizando que RAG consulte solo las versiones activas y publicadas."
}, {
    "id": 339,
    "category": "Prompt Engineering",
    "question": "¿Qué significa cuando una versión de plantilla de prompt se describe como inmutable?",
    "choices": ["Solo se puede activar la última versión de una plantilla.", "Cada modificación en una plantilla se guardará como una nueva versión automáticamente.", "Después de que se activa una versión de plantilla de prompt, no se pueden guardar más cambios en esa versión."],
    "correctAnswerText": "Después de que se activa una versión de plantilla de prompt, no se pueden guardar más cambios en esa versión.",
    "explanation": "Una versión de plantilla de prompt activada queda congelada (inmutable) para preservar la auditabilidad y consistencia. Los cambios posteriores deben guardarse en una nueva versión borrador."
}, {
    "id": 340,
    "category": "Prompt Engineering",
    "question": "¿Cuál es el propósito principal de Prompt Builder?",
    "choices": ["Una herramienta para que los desarrolladores la utilicen en Visual Studio Code que crea prompts para la programación Apex, ayudando a los desarrolladores a escribir código de manera más eficiente.", "Una herramienta que permite a las empresas crear prompts reutilizables para modelos de lenguaje de gran tamaño (LLM), llevando respuestas de IA generativa a su flujo de trabajo.", "Una herramienta dentro de Salesforce que ofrece sugerencias e instrucciones impulsadas por IA en tiempo real a los usuarios, mejorando la productividad y la toma de decisiones."],
    "correctAnswerText": "Una herramienta que permite a las empresas crear prompts reutilizables para modelos de lenguaje de gran tamaño (LLM), llevando respuestas de IA generativa a su flujo de trabajo.",
    "explanation": "Prompt Builder es la herramienta declarativa de Salesforce que permite construir, gestionar y fundamentar plantillas de prompt reutilizables con datos de CRM para usarse en diversas automatizaciones y vistas."
}, {
    "id": 341,
    "category": "AI Agents",
    "question": "Universal Containers está construyendo un agente personalizado y creando una nueva acción Apex que acepta una colección de valores de texto, como una lista de nombres de productos, como parámetro de entrada. El Agentforce Specialist está configurando los metadatos de la acción en Agentforce Assets y necesita mapear adecuadamente esta entrada para que el motor de razonamiento pueda pasar la lista de cadenas correctamente. Al definir esta entrada, ¿qué complex_data_type_name debería utilizar el Agentforce Specialist?",
    "choices": ["lightning__stringType", "apex__String", "lightning__textType"],
    "correctAnswerText": "lightning__stringType",
    "explanation": "En el esquema de metadatos de acciones de Agentforce, los coleccionables de texto deben mapearse utilizando los tipos estandarizados de Lightning, como `lightning__stringType`."
}, {
    "id": 342,
    "category": "AI Agents",
    "question": "El equipo de discusión de estrategia de IA de Universal Containers (UC) está evaluando opciones. ¿Qué requisito comercial llevaría a un Agentforce a recomendar la conexión a un modelo fundacional externo a través de Einstein Studio (Model Builder)?",
    "choices": ["UC desea ajustar finamente la temperatura del modelo.", "UC desea un modelo ajustado finamente (fine-tuned) utilizando datos de la empresa.", "UC desea cambiar la penalización de frecuencia del modelo."],
    "correctAnswerText": "UC desea un modelo ajustado finamente (fine-tuned) utilizando datos de la empresa.",
    "explanation": "Einstein Studio / Model Builder es la solución diseñada para conectar, integrar y ajustar (fine-tune) modelos externos (BYOM) utilizando datos propios de la empresa."
}, {
    "id": 343,
    "category": "Data 360 Fundamentals",
    "question": "Una compañía de seguros necesita un Service Agent para fundamentar sus respuestas en función de archivos PDF específicos de la empresa y una base de conocimientos completa. ¿Qué tipo de recuperador debería utilizar el Agentforce Specialist para cumplir con este requisito?",
    "choices": ["Dynamic retriever", "Individual retriever", "Ensemble retriever"],
    "correctAnswerText": "Ensemble retriever",
    "explanation": "Un `ensemble retriever` permite combinar múltiples fuentes o índices de búsqueda heterogéneos (como documentos PDF e índices de Knowledge) en un solo proceso unificado de recuperación."
}, {
    "id": 344,
    "category": "AI Agents",
    "question": "Universal Containers (UC) almacena detalles y actualizaciones de casos en varios campos personalizados y objetos personalizados relacionados con el caso. A UC le gustaría que su Agentforce Service Agent pueda brindar información de estos campos y registros relacionados como parte de una respuesta a sus clientes cuando el cliente pida actualizaciones. ¿Qué mejor práctica debería seguir UC para otorgar acceso a esta información para el Agentforce Service Agent?",
    "choices": ["Actualizar el acceso a Objetos y Campos en el grupo de conjuntos de permisos AgentforceServiceAgentUserPsg que ya está asignado al usuario del Agentforce Service Agent.", "Crear un nuevo conjunto de permisos con la licencia Einstein Agent License y habilitar el acceso Read a los campos y objetos personalizados, y asignarlo al usuario del Agentforce Service Agent.", "Actualizar el acceso a Objetos y Campos en el perfil Einstein Agent User para que los Agentforce Service Agents siempre obtengan el acceso necesario."],
    "correctAnswerText": "Actualizar el acceso a Objetos y Campos en el grupo de conjuntos de permisos AgentforceServiceAgentUserPsg que ya está asignado al usuario del Agentforce Service Agent.",
    "explanation": "La mejor práctica de seguridad y gobernanza es actualizar los permisos de objetos y campos en el grupo de conjuntos de permisos existente (`AgentforceServiceAgentUserPsg`) asignado al usuario del agente."
}, {
    "id": 345,
    "category": "Prompt Engineering",
    "question": "Un Agentforce Specialist necesita crear una plantilla de prompt para llenar un campo personalizado llamado Latest Opportunities Summary en el objeto Account con información de las tres oportunidades abiertas más recientemente. ¿Cómo debería recopilar el Agentforce Specialist los datos necesarios para la plantilla de prompt?",
    "choices": ["Seleccionar la lista relacionada de últimas Opportunities como un campo de combinación.", "Crear un flujo para recuperar la información de las oportunidades.", "Seleccionar el objeto Account Opportunity como un recurso al crear la plantilla de prompt."],
    "correctAnswerText": "Crear un flujo para recuperar la información de las oportunidades.",
    "explanation": "Para consultas dinámicas complejas (filtrar las 3 oportunidades más recientes con ordenación específica), la mejor práctica en Prompt Builder es crear un flujo que recupere y consolide la información."
}, {
    "id": 346,
    "category": "Data 360 Fundamentals",
    "question": "Una empresa desea recuperar detalles del historial de pacientes para aumentar la respuesta del agente de IA y planea utilizar la función de índice de búsqueda de Data Cloud. ¿Cuál es la mejor práctica al considerar Retrieval-Augmented Generation (RAG) para información que puede contener información de identificación personal (PII)?",
    "choices": ["Enmascarar campos confidenciales e indexar solo datos que no sean PII", "Depender del prompt del agente para evitar exponer PII", "Encriptar incrustaciones, pero seguir indexando registros de PII"],
    "correctAnswerText": "Enmascarar campos confidenciales e indexar solo datos que no sean PII",
    "explanation": "Por razones de cumplimiento normativo y privacidad, los datos confidenciales o PII deben enmascararse o excluirse antes de generar incrustaciones e indexar el contenido en las bases vectoriales."
}, {
    "id": 347,
    "category": "Governance & Observability",
    "question": "Universal Containers (UC) necesita capturar y almacenar datos de interacción detallados para todos los agentes. ¿Qué función debería ayudar a UC a obtener una vista completa del comportamiento del agente de principio a fin, incluidas las ejecuciones del motor de razonamiento, las acciones, las entradas/salidas de prompts y pasarelas, los mensajes de error y las respuestas finales?",
    "choices": ["Agentforce Analytics", "Utterance Analysis", "Agentforce Session Tracing"],
    "correctAnswerText": "Agentforce Session Tracing",
    "explanation": "Agentforce Session Tracing proporciona el rastreo exhaustivo y detallado de cada paso dentro de la ejecución de la sesión del agente, desde la entrada inicial hasta los logs técnicos del motor de razonamiento."
}, {
    "id": 348,
    "category": "Prompt Engineering",
    "question": "Universal Containers ha fundamentado una plantilla de prompt con una lista relacionada. Durante las pruebas de aceptación del usuario (UAT), los usuarios no obtienen las respuestas correctas. ¿Qué está causando este problema?",
    "choices": ["La lista relacionada es de solo lectura.", "La opción de plantilla de prompt de lista relacionada no está habilitada.", "La lista relacionada no está en el diseño de página (page layout) del objeto primario."],
    "correctAnswerText": "La lista relacionada no está en el diseño de página (page layout) del objeto primario.",
    "explanation": "Para que los datos de una lista relacionada estén disponibles en el grounding de prompts de registros, la lista relacionada correspondiente debe estar configurada en el diseño de página (page layout) del objeto principal."
}, {
    "id": 349,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers (UC) se está preparando y definiendo los criterios de éxito para los casos de prueba de Agentforce Testing Center. ¿Qué detalles debería especificar UC como la salida esperada para garantizar que las pruebas reflejen con precisión la funcionalidad del agente?",
    "choices": ["Expected Topic API Name", "Expected Flow API Name", "Expected Prompt Template Name"],
    "correctAnswerText": "Expected Topic API Name",
    "explanation": "En Testing Center, la validación principal para verificar el enrutamiento e interpretación de la intención del usuario es comparar la coincidencia obtenida contra el `Expected Topic API Name`."
}, {
    "id": 350,
    "category": "AI Agents",
    "question": "Universal Containers (UC) asistió recientemente a una importante feria comercial y recibió miles de nuevos prospectos de escaneos de credenciales del evento. UC tiene dificultades para hacer un seguimiento oportuno y personalizado con cada prospecto. La dirección desea: Calificar y nutrir prospectos las 24 horas del día, los 7 días de la semana. \\* Brindar respuestas precisas a las preguntas de los prospectos. \\* Programar reuniones automáticamente con prospectos calificados. \\* Liberar a los representantes para que se concentren en entablar relaciones y cerrar acuerdos. ¿Qué capacidad de Agentforce debería implementar UC para cumplir con estos objetivos?",
    "choices": ["SDR Agent", "Sales Coach", "Commerce Agent"],
    "correctAnswerText": "SDR Agent",
    "explanation": "El `SDR Agent` es el agente preconstruido diseñado específicamente para interactuar, calificar, nutrir prospectos las 24 horas y agendar reuniones automáticamente."
}, {
    "id": 351,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) está implementando Einstein Generative AI para mejorar la información y las interacciones con los clientes. UC necesita que los datos de auditoría y comentarios estén accesibles para fines de generación de informes. ¿Cuál es una consideración para este requisito?",
    "choices": ["Almacenar estos datos requiere que Data Cloud esté aprovisionado.", "Almacenar estos datos requiere que se configure un objeto personalizado.", "Almacenar estos datos requiere Big Objects de Salesforce."],
    "correctAnswerText": "Almacenar estos datos requiere que Data Cloud esté aprovisionado.",
    "explanation": "El almacenamiento, procesamiento e inspección de los datos de auditoría, uso y retroalimentación de la Einstein Trust Layer requieren contar con Data Cloud aprovisionado."
}, {
    "id": 352,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) desea elaborar un boletín de marketing y utilizar directamente datos de cinco objetos no relacionados (dos estándar y tres personalizados) en una plantilla de prompt. ¿Cómo debería lograr esto UC?",
    "choices": ["Crear una plantilla Flex y utilizar los cinco objetos como entradas.", "Crear una plantilla de prompt pasando un objeto personalizado especial que conecte los registros temporalmente.", "Crear un flujo activado por plantilla de prompt para acceder a los datos de los cinco objetos."],
    "correctAnswerText": "Crear una plantilla Flex y utilizar los cinco objetos como entradas.",
    "explanation": "Las plantillas de prompt de tipo Flex permiten definir hasta 5 recursos de entrada independientes procedentes de diversos objetos estándar o personalizados sin requerir relaciones directas."
}, {
    "id": 353,
    "category": "Prompt Engineering",
    "question": "Un Agentforce implementa Einstein Sales Emails para un equipo de ventas. El equipo desea enviar correos electrónicos de seguimiento personalizados a los prospectos en función de sus interacciones y datos almacenados en Salesforce. El Agentforce Specialist necesita configurar el sistema para utilizar la información más precisa y actualizada para la generación de correos electrónicos. ¿Qué técnica de grounding debería utilizar el Agentforce Specialist?",
    "choices": ["Ground con Apex Merge Fields", "Ground con Record Merge Fields", "Grounding automático utilizando la función Draft with Einstein"],
    "correctAnswerText": "Ground con Record Merge Fields",
    "explanation": "Fundamentar las plantillas de correo con `Record Merge Fields` permite vincular dinámicamente la información del registro de Salesforce (Lead, Contact, etc.) en tiempo de ejecución."
}, {
    "id": 354,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers tiene un estricto proceso de gestión de cambios que requiere que toda la configuración posible se complete en un sandbox que se desplegará en producción. El Agentforce Specialist tiene la tarea de configurar Work Summaries para Enhanced Messaging. Einstein Generative AI ya está habilitado en producción, y el conjunto de permisos Einstein Work Summaries ya está disponible en producción. ¿Qué otros pasos de configuración debería tomar el Agentforce Specialist en el sandbox que se puedan desplegar en la org de producción?",
    "choices": ["Crear campos personalizados para almacenar Issue, Resolution y Summary; crear una Quick Action que actualice estos campos; agregar el componente Wrap Up al diseño de página de registro de Messaging Session; y crear Permission Set Assignments para los agentes previstos.", "Desde el menú de configuración de Einstein, seleccionar Turn on Einstein; crear campos personalizados para almacenar Issue, Resolution y Summary; crear una Quick Action que actualice estos campos; y agregar el componente Wrap Up al diseño de página de registro de Messaging Session.", "Crear campos personalizados para almacenar Issue, Resolution y Summary; crear una Quick Action que actualice estos campos; y agregar el componente Wrap Up al diseño de página de registro de Messaging Session."],
    "correctAnswerText": "Crear campos personalizados para almacenar Issue, Resolution y Summary; crear una Quick Action que actualice estos campos; y agregar el componente Wrap Up al diseño de página de registro de Messaging Session.",
    "explanation": "La respuesta correcta es C. Los metadatos desplegables entre sandbox y producción incluyen la creación de campos personalizados, acciones rápidas (Quick Actions) y modificaciones en diseños de página (Page Layouts). Las asignaciones de conjuntos de permisos a usuarios específicos no se consideran metadatos desplegables mediante paquetes estándar."
}, {
    "id": 355,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers (UC) desea construir un Agentforce Service Agent que brinde la información de políticas y cumplimiento más reciente, activa y relevante a los clientes. El agente debe: Buscar semánticamente políticas de RR.HH., directrices de cumplimiento y procedimientos de la empresa. Garantizar que las respuestas estén fundamentadas en Knowledge publicado. Permitir que las actualizaciones de Knowledge se reflejen de inmediato sin reconfiguración manual. ¿Qué debería hacer UC para garantizar que el agente recupere la información correcta?",
    "choices": ["Habilitar al agente para buscar en todos los registros internos y consultas anteriores de los clientes.", "Configurar una Agentforce Data Library para almacenar e indexar documentos de políticas para la recuperación de IA.", "Agregar manualmente respuestas de políticas al modelo de IA para evitar alucinaciones."],
    "correctAnswerText": "Configurar una Agentforce Data Library para almacenar e indexar documentos de políticas para la recuperación de IA.",
    "explanation": "Configurar una Agentforce Data Library conectada a los artículos de Knowledge permite indexar los documentos corporativos para búsquedas semánticas y mantener la información actualizada automáticamente."
}, {
    "id": 356,
    "category": "Data 360 Fundamentals",
    "question": "Universal Containers está implementando una solución de Retrieval-Augmented Generation (RAG) donde la tienda de conocimiento contiene artículos en español, pero los usuarios consultarán al agente en francés e inglés. El Agentforce Specialist necesita asegurarse de que el recuperador pueda encontrar con precisión artículos relevantes a pesar de las diferencias de idioma. ¿Qué debería hacer el especialista para cumplir con este requisito?",
    "choices": ["Utilizar el modelo de incrustación multilingual-e5-large para usuarios de idioma francés y español.", "Utilizar el modelo de incrustación multilingual-e5-large para usuarios de idioma francés e inglés.", "Utilizar el modelo de incrustación multilingual-e5-large para gestionar todos los idiomas."],
    "correctAnswerText": "Utilizar el modelo de incrustación multilingual-e5-large para gestionar todos los idiomas.",
    "explanation": "Configurar el modelo de incrustación `multilingual-e5-large` permite mapear conceptos semánticos equivalentes en el espacio vectorial entre diferentes idiomas (español, inglés, francés)."
}, {
    "id": 357,
    "category": "AI Agents",
    "question": "Universal Containers está diseñando un agente para asistir con la gestión de pedidos y la automatización del soporte a distribuidores. El agente debe verificar las credenciales de un distribuidor antes de otorgar acceso a los detalles del pedido. El equipo ya ha: Declarado una variable is_verified para rastrear el estado de verificación. Configurado una acción que verifica las credenciales del distribuidor. Planea restringir el acceso al subagente de detalles del pedido utilizando una condición de protección basada en is_verified. ¿Qué debe hacer el equipo para asegurarse de que el subagente de detalles del pedido esté disponible solo después de que un distribuidor sea verificado con éxito?",
    "choices": ["Agregar una condición available when: @variables.is_verified == true al subagente de detalles del pedido.", "Declarar la variable is_verified como inmutable para que no se pueda modificar durante la sesión.", "Actualizar la variable is_verified a true después de que la acción de verificación tenga éxito utilizando @utils.setVariables."],
    "correctAnswerText": "Actualizar la variable is_verified a true después de que la acción de verificación tenga éxito utilizando @utils.setVariables.",
    "explanation": "La respuesta correcta es C. Para que las condiciones de visibilidad (`available when`) funcionen, la variable de estado debe actualizarse explícitamente (mediante `@utils.setVariables`) una vez completada la acción de verificación."
}, {
    "id": 358,
    "category": "AI Agents",
    "question": "Universal Containers (UC) desea mejorar la productividad de su equipo de ventas con tecnología de IA generativa. Sin embargo, a UC le preocupa que los asistentes virtuales de IA públicos carezcan de datos adecuados de la empresa para generar respuestas útiles. ¿Qué solución debería considerar UC?",
    "choices": ["Ajustar finamente (fine-tune) el modelo de IA de Einstein con datos de CRM.", "Construir un modelo de IA con Einstein Discovery y desplegarlo a los usuarios de ventas.", "Habilitar Agentforce y desplegarlo a los usuarios de ventas."],
    "correctAnswerText": "Ajustar finamente (fine-tune) el modelo de IA de Einstein con datos de CRM.",
    "explanation": "El ajuste fino (fine-tuning) del modelo con los propios datos de CRM de la empresa permite adaptar las salidas generativas a la terminología y contextos específicos del negocio."
}, {
    "id": 359,
    "category": "Multi-Agent Orchestration",
    "question": "Universal Containers (UC) tiene una biblioteca de API de cartera de inversión personalizada personalizadas y planea extenderla a los agentes. ¿Qué método debería elegir el agente de UC para utilizar dinámicamente el mejor servicio de API?",
    "choices": ["Soporte de protocolo Agent-to-Agent (A2A)", "Soporte de servidor Model Context Protocol (MCP)", "Conector MuleSoft para procesos alojados personalizados"],
    "correctAnswerText": "Soporte de servidor Model Context Protocol (MCP)",
    "explanation": "Implementar un servidor de Model Context Protocol (MCP) expone dinámicamente las herramientas e interfaces de las API personalizadas para que el motor de razonamiento de Agentforce seleccione la mejor opción según la necesidad."
}, {
    "id": 360,
    "category": "AI Agents",
    "question": "Universal Containers (UC) utiliza Salesforce Service Cloud para brindar soporte a sus clientes y a los agentes que manejan casos. UC está considerando implementar Agent y extender Service Cloud a usuarios móviles. ¿Cuándo sería más ventajosa la implementación de Agent?",
    "choices": ["Cuando el objetivo es optimizar los procesos de soporte al cliente y mejorar los tiempos de respuesta", "Cuando el objetivo principal es mejorar las medidas de seguridad y cumplimiento de datos", "Cuando el enfoque está en optimizar las campañas y estrategias de marketing"],
    "correctAnswerText": "Cuando el objetivo es optimizar los procesos de soporte al cliente y mejorar los tiempos de respuesta",
    "explanation": "La implementación de un agente conversacional en Service Cloud es más ventajosa cuando se busca automatizar la atención primaria, guiar a los representantes y reducir los tiempos de respuesta."
}, {
    "id": 361,
    "category": "Data 360 Fundamentals",
    "question": "¿Qué escenario demuestra mejor cuándo una Agentforce Data Library es más útil para mejorar la precisión de la respuesta de un agente de IA?",
    "choices": ["Cuando el agente de IA debe proporcionar respuestas basadas en un conjunto curado de documentos de políticas que se almacenan, actualizan periódicamente e indexan en la biblioteca de datos.", "Cuando el agente de IA necesita combinar datos de fuentes dispares basándose en datos mutuamente comunes, como Customer Id y Product Id para el grounding.", "Cuando se recuperan datos de Snowflake utilizando zero-copy para vectorización y recuperación."],
    "correctAnswerText": "Cuando el agente de IA debe proporcionar respuestas basadas en un conjunto curado de documentos de políticas que se almacenan, actualizan periódicamente e indexan en la biblioteca de datos.",
    "explanation": "Las Data Libraries destacan al curar, almacenar e indexar colecciones de documentos corporativos (como políticas o manuales) para fundamentar las respuestas del agente mediante RAG."
}, {
    "id": 362,
    "category": "AI Agents",
    "question": "El equipo de marketing de Universal Containers está buscando una forma de personalizar los correos electrónicos en función del comportamiento, las preferencias y el historial de compras de los clientes. ¿Por qué el equipo debería utilizar Agent como solución?",
    "choices": ["Para generar contenido relevante al interactuar con cada cliente", "Para analizar el rendimiento de campañas pasadas", "Para enviar correos electrónicos automatizados a todos los clientes"],
    "correctAnswerText": "Para generar contenido relevante al interactuar con cada cliente",
    "explanation": "El agente permite sintetizar información contextual del cliente en tiempo real para generar propuestas de contenido altamente personalizadas y relevantes."
}, {
    "id": 363,
    "category": "Governance & Observability",
    "question": "El Agentforce Service Agent de Universal Containers ha estado activo durante cuatro semanas. Agent Optimization en Agentforce Observability muestra que el clúster de intenciones de soporte principal obtiene una puntuación de baja calidad, y los motivos de la puntuación citan una coincidencia ambigua de subagentes. La traza de sesión (Session Trace) confirma que el motor de razonamiento selecciona constantemente el subagente incorrecto en la mayoría de los turnos. ¿Cuál es la solución más viable para resolver el problema?",
    "choices": ["Refinar las descripciones de clasificación y el alcance de los subagentes en competencia para eliminar la superposición semántica que hace que el motor de razonamiento enrute incorrectamente.", "Utilizar los datos del clúster de intenciones de Agent Optimization para identificar las intenciones desviadas con mayor frecuencia y agregar nuevos subagentes con descripciones de clasificación estrictamente delimitadas para cada una.", "Extender la biblioteca de datos del agente con artículos de conocimiento adicionales que cubran los escenarios de intención mal enrutados identificados en Agent Optimization."],
    "correctAnswerText": "Refinar las descripciones de clasificación y el alcance de los subagentes en competencia para eliminar la superposición semántica que hace que el motor de razonamiento enrute incorrectamente.",
    "explanation": "La respuesta correcta es A. Cuando el motor de razonamiento confunde subagentes, la causa raíz es la ambigüedad semántica entre sus descripciones y alcances; refinarlos elimina las superposiciones de enrutamiento."
}, {
    "id": 364,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Universal Containers está configurando su Agentforce Testing Center para evaluar un agente que maneja quejas de clientes. La empresa desea evaluar si el agente demuestra empatía con éxito y sigue un marco de desescalación exclusivo (\"De-escalation Framework\") antes de ofrecer una resolución. ¿Dónde debería utilizar el Agentforce Specialist un juez de modelo de lenguaje de gran tamaño (LLM-as-judge) para lograr una evaluación adecuada?",
    "choices": ["Ajustar los criterios fijos de la evaluación de calidad de Coherencia estándar para controlar la evaluación de LLM-as-judge.", "Habilitar la evaluación de Instruction Adherence predeterminada que utiliza nativamente LLM-as-judge.", "Crear una evaluación personalizada con un prompt adaptado que describa los criterios del marco."],
    "correctAnswerText": "Crear una evaluación personalizada con un prompt adaptado que describa los criterios del marco.",
    "explanation": "Para evaluar un marco de trabajo propio y cualitativo de la empresa, se debe crear una evaluación personalizada en Testing Center proporcionando un prompt que especifique las pautas que el modelo evaluador (LLM judge) debe revisar."
}, {
    "id": 365,
    "category": "Prompt Engineering",
    "question": "Universal Containers (UC) desea elaborar una propuesta de ventas y utilizar directamente datos de múltiples objetos no relacionados (estándar y personalizados) en una plantilla de prompt. ¿Cómo debería lograr esto UC?",
    "choices": ["Crear una plantilla de prompt pasando un objeto personalizado especial que conecte los registros temporalmente.", "Crear un flujo activado por plantilla de prompt para acceder a los datos de objetos estándar y personalizados.", "Crear una plantilla Flex para agregar recursos con objetos estándar y personalizados como entradas.", "Utilizar un Record Snapshot para combinar datos de objetos no relacionados en un solo prompt."],
    "correctAnswerText": "Crear una plantilla Flex para agregar recursos con objetos estándar y personalizados como entradas.",
    "explanation": "Las plantillas de prompt Flex permiten incorporar múltiples objetos independientes (estándar o personalizados) como recursos de entrada dentro de la misma plantilla."
}, {
    "id": 366,
    "category": "AI Agents",
    "question": "Un Agentforce Specialist está creando una acción personalizada en Agentforce. ¿Qué opción está disponible para que el Agentforce Specialist la elija para la Custom Agent Action?",
    "choices": ["Apex Trigger", "SOQL", "Flows"],
    "correctAnswerText": "Flows",
    "explanation": "Salesforce Flows es la opción declarativa predeterminada y directamente integrable para crear acciones personalizadas en Agent Builder."
}, {
    "id": 367,
    "category": "Governance & Observability",
    "question": "¿Cuál es el rol del modelo de lenguaje de gran tamaño (LLM) al ejecutar una Agent Action?",
    "choices": ["Encontrar solicitudes similares y proporcionar acciones que deban ejecutarse", "Identificar las acciones que mejor coincidan y el orden correcto de ejecución", "Determinar el acceso de un usuario y ordenar las acciones por prioridad para ser ejecutadas"],
    "correctAnswerText": "Identificar las acciones que mejor coincidan y el orden correcto de ejecución",
    "explanation": "El LLM interpreta la intención del usuario, selecciona las acciones relevantes disponibles y determina la secuencia lógica necesaria para su ejecución."
}, {
    "id": 368,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Un Agentforce tiene la tarea de analizar las interacciones de los agentes examinando las entradas, solicitudes y consultas de los usuarios para identificar patrones y tendencias. ¿Qué funcionalidad le permite al especialista en IA lograr esto?",
    "choices": ["Panel User Utterances", "Panel Agent Event Logs", "Panel AI Audit & Feedback Data"],
    "correctAnswerText": "Panel User Utterances",
    "explanation": "El panel `User Utterances` permite revisar y analizar las frases e intenciones expresadas por los usuarios para optimizar los temas y el entrenamiento del agente."
}, {
    "id": 369,
    "category": "Testing, Deployment, & Maintenance",
    "question": "Antes de activar una acción de agente personalizada, a un AgentForce Specialist le gustaría evaluar múltiples expresiones de usuarios del mundo real para garantizar que la acción se seleccione adecuadamente. ¿Qué herramienta debería recomendar el AgentForce Specialist?",
    "choices": ["Testing Center", "AgentForce Builder", "Prompt Builder"],
    "correctAnswerText": "Testing Center",
    "explanation": "Testing Center es la herramienta diseñada para evaluar interacciones masivas, simulaciones de expresiones y selecciones de acciones en un entorno de pruebas controlado."
}, {
    "id": 370,
    "category": "Multi-Agent Orchestration",
    "question": "¿Qué escenario ilustra mejor el uso del Model Context Protocol (MCP) en un despliegue de IA empresarial?",
    "choices": ["Un agente asistente legal que utiliza MCP para encontrar dinámicamente una API de clasificación de documentos para analizar archivos de casos", "Un agente de servicio al cliente que entabla una conversación en tiempo real con otro agente para resolver tickets", "Un agente de ventas que descubre las capacidades de otros agentes mediante Agent Cards"],
    "correctAnswerText": "Un agente asistente legal que utiliza MCP para encontrar dinámicamente una API de clasificación de documentos para analizar archivos de casos",
    "explanation": "Model Context Protocol (MCP) permite a los agentes de IA descubrir, consultar esquemas y conectarse a herramientas o API de software empresarial de forma dinámica durante la ejecución."
}];