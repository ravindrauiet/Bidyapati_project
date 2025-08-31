'use client'

import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Glomin Overseas. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const autoReplies = {
    'product': "We offer a wide range of products including Edible Oils, Sugar, Rice, Spices, and our premium Glomin brand Dry Fruits. Would you like to know more about any specific category?",
    'price': "Our pricing is competitive and varies based on quantity and product category. For bulk orders and customized gift packs, please contact us directly for special pricing.",
          'delivery': "We provide delivery across North East India through our strategic hubs in Delhi-NCR and Bihar. Delivery time depends on your location and order size.",
    'bulk': "Yes, we offer excellent bulk deals for all our products, especially our Glomin brand dry fruits. We also provide customized gift packs for weddings, corporate events, and festivals.",
    'contact': "You can reach us at:\nDelhi Office: +91 8527277959\nBihar Office: +91-9310785269 / +91-7011281171\nEmail: glominoverseas@gmail.com\nWebsite: www.glomin.in",
          'partnership': "We're always looking for new brand partnerships! We help brands scale up and grow in the North East India market. Please share your requirements and we'll get back to you within 24 hours."
  }

  const generateAutoReply = (message: string) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('product') || lowerMessage.includes('what') || lowerMessage.includes('offer')) {
      return autoReplies.product
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
      return autoReplies.price
    } else if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping') || lowerMessage.includes('when')) {
      return autoReplies.delivery
    } else if (lowerMessage.includes('bulk') || lowerMessage.includes('wholesale') || lowerMessage.includes('gift')) {
      return autoReplies.bulk
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return autoReplies.contact
    } else if (lowerMessage.includes('partner') || lowerMessage.includes('distribute') || lowerMessage.includes('brand')) {
      return autoReplies.partnership
    } else {
      return "Thank you for your message! Our team will get back to you within 24 hours. For immediate assistance, please call us at +91 8527277959."
    }
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate typing delay and auto-reply
    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: generateAutoReply(inputText),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botReply])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        title="Chat with us"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/dry fruits/logo.png" 
                  alt="Glomin Overseas Logo" 
                  width={24} 
                  height={24} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Glomin Overseas</h3>
                  <p className="text-sm text-primary-100">Customer Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-teal-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2 mb-3">
              <button
                onClick={() => {
                  setMessages(prev => [...prev, {
                    id: prev.length + 1,
                    text: "I'm interested in your products",
                    sender: 'user',
                    timestamp: new Date()
                  }])
                  setInputText('')
                  setIsTyping(true)
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      id: prev.length + 1,
                      text: autoReplies.product,
                      sender: 'bot',
                      timestamp: new Date()
                    }])
                    setIsTyping(false)
                  }, 1000)
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => {
                  setMessages(prev => [...prev, {
                    id: prev.length + 1,
                    text: "Tell me about bulk deals",
                    sender: 'user',
                    timestamp: new Date()
                  }])
                  setInputText('')
                  setIsTyping(true)
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      id: prev.length + 1,
                      text: autoReplies.bulk,
                      sender: 'bot',
                      timestamp: new Date()
                    }])
                    setIsTyping(false)
                  }, 1000)
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                Bulk Deals
              </button>
              <button
                onClick={() => {
                  setMessages(prev => [...prev, {
                    id: prev.length + 1,
                    text: "How can I contact you?",
                    sender: 'user',
                    timestamp: new Date()
                  }])
                  setInputText('')
                  setIsTyping(true)
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      id: prev.length + 1,
                      text: autoReplies.contact,
                      sender: 'bot',
                      timestamp: new Date()
                    }])
                    setIsTyping(false)
                  }, 1000)
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
