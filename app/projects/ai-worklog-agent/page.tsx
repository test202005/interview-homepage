export default function AIWorkLogAgentPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 返回首页 */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <a href="/" className="text-sm text-gray-500 hover:text-blue-600 inline-flex items-center gap-1">
          <span>← 返回首页</span>
        </a>
      </div>

      {/* 页面标题区 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4">AI WorkLog Agent</h1>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          面向团队内部使用的轻量级工作记录 Agent，支持碎片记录、事项确认与今日日报生成。
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-gray-700">
          <strong>项目定位：</strong>这个项目的重点不是"让 AI 写日报"，而是通过结构化记录与行为约束，让输出更真实、可控、可回放。
        </div>
      </section>

      {/* 项目背景 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">项目背景</h2>
        <div className="space-y-3 text-gray-700">
          <p className="leading-relaxed">
            项目面向团队内部使用场景，主要解决三个问题：
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>工作碎片记录容易遗漏，关键信息难以追溯</li>
            <li>下班前关键事项容易忘记，日报依赖回忆整理</li>
            <li>传统日报系统与实际工作流割裂，记录成本高</li>
          </ul>
          <p className="leading-relaxed mt-4">
            目标不是做复杂 Agent 平台，而是验证一个<strong>轻量、可控、真实可用的工作记录</strong>闭环。
          </p>
        </div>
      </section>

      {/* 核心流程 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">核心流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
              <h3 className="font-semibold text-gray-800">记录工作碎片</h3>
            </div>
            <p className="text-sm text-gray-600">
              随时记录工作进展、问题与思考，支持自然语言输入
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
              <h3 className="font-semibold text-gray-800">查询当日记录</h3>
            </div>
            <p className="text-sm text-gray-600">
              自动整理当天所有工作记录，按时间线展示
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
              <h3 className="font-semibold text-gray-800">确认关键事项</h3>
            </div>
            <p className="text-sm text-gray-600">
              下班前确认今日完成、问题风险与明日计划
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
              <h3 className="font-semibold text-gray-800">生成今日日报</h3>
            </div>
            <p className="text-sm text-gray-600">
              基于确认内容生成结构化日报，支持导出与编辑
            </p>
          </div>
        </div>
      </section>

      {/* 我负责什么 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">我负责什么</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">业务闭环梳理</h3>
              <p className="text-sm text-gray-600">
                梳理工作记录、事项确认、日报生成等核心业务闭环，明确各环节输入输出与异常处理策略
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">行为边界约束</h3>
              <p className="text-sm text-gray-600">
                约束 Agent 行为边界，限制系统仅执行记录、查询、确认、生成等预设动作，避免越界操作
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">异常场景设计</h3>
              <p className="text-sm text-gray-600">
                设计异常场景，验证结构缺失、内容失真、语义偏移、幻觉补全等风险场景的覆盖度
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">链路可追踪性</h3>
              <p className="text-sm text-gray-600">
                增加关键确认闸门与日志回放能力，支持 Tool Call、状态流转与最终生成结果的完整追踪
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 关键测试点 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">关键测试点</h2>
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">Tool Call</span>
              <p className="text-sm text-gray-700">触发是否符合预期，参数传递是否正确</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">行为约束</span>
              <p className="text-sm text-gray-700">Agent 是否只执行预设动作，避免越界执行</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">结构完整</span>
              <p className="text-sm text-gray-700">输出是否覆盖"今日完成 / 问题风险 / 明日计划"</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">内容真实</span>
              <p className="text-sm text-gray-700">是否出现无依据补全、语义漂移、幻觉补全（Hallucination）</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">链路追踪</span>
              <p className="text-sm text-gray-700">能否通过日志回放追踪完整执行路径与问题根因</p>
            </div>
          </div>
        </div>
      </section>

      {/* 遇到的问题与处理 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">遇到的问题与处理</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">问题：Agent 行为容易越界或输出失真</h3>
            <p className="text-sm text-gray-600 mb-2">
              如果让模型自由发挥，容易出现超出预设动作范围的执行，或生成与记录内容不符的输出
            </p>
            <div className="bg-gray-50 rounded px-4 py-2 text-sm">
              <span className="font-semibold text-gray-700">处理：</span>
              <span className="text-gray-600">通过 Prompt 约束与行为边界治理，限制 Agent 仅执行预设动作</span>
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">问题："能生成"不等于"可信"</h3>
            <p className="text-sm text-gray-600 mb-2">
              系统能生成日报不代表输出质量可靠，需要验证结构完整性、内容真实性与异常样本覆盖
            </p>
            <div className="bg-gray-50 rounded px-4 py-2 text-sm">
              <span className="font-semibold text-gray-700">处理：</span>
              <span className="text-gray-600">围绕结构完整性、内容真实性与异常样本进行专项验证</span>
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">问题：异常时难以定位问题来源</h3>
            <p className="text-sm text-gray-600 mb-2">
              当输出不符合预期时，难以快速定位是 Prompt 问题、Tool Call 问题还是模型输出问题
            </p>
            <div className="bg-gray-50 rounded px-4 py-2 text-sm">
              <span className="font-semibold text-gray-700">处理：</span>
              <span className="text-gray-600">增加关键确认闸门与日志回放能力，提升链路可追踪性与问题定位效率</span>
            </div>
          </div>
        </div>
      </section>

      {/* 项目收获 */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">项目收获 / 沉淀</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
          <p className="text-gray-700 leading-relaxed">
            这个项目让我对 Agent 系统测试的理解，从传统功能验证进一步扩展到<strong>行为边界约束、输出质量验证与链路可追踪性</strong>。也更明确 AI 系统测试不能只看"能不能跑"，还要看"是否可控、可复现、可回放"。
          </p>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600">← 返回首页</a>
          <p className="text-sm text-gray-400">© 2026 韦伟豪</p>
        </div>
      </footer>
    </main>
  );
}
