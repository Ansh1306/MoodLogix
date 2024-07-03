'use client'
import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  TooltipProps,
} from 'recharts'

type HistoryChartProps = {
  data: {
    updatedAt: string
    sentimentScore: number
    mood: string
    color: string
  }[]
}

type CustomTooltipProps = {
  payload?: TooltipProps<number, string>['payload']
  label?: TooltipProps<number, string>['label']
  active?: boolean
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  payload,
  label,
  active,
}) => {
  const dateLabel = new Date(label ?? '').toLocaleString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })

  if (active && payload && payload.length) {
    const analysis = payload[0].payload
    return (
      <div className="p-8 custom-tooltip bg-white/5 shadow-md border border-black/10 rounded-lg backdrop-blur-md relative">
        <div
          className="absolute left-2 top-2 w-2 h-2 rounded-full"
          style={{ background: analysis.color }}
        ></div>
        <p className="label text-sm text-black/30">{dateLabel}</p>
        <p className="intro text-xl uppercase">{analysis.mood}</p>
      </div>
    )
  }

  return null
}

const HistoryChart: React.FC<HistoryChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line
          type="monotone"
          dataKey="sentimentScore"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="updatedAt" />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default HistoryChart
