variable "name" {
  type    = string
  default = "family-plan-it"
}

variable "name_alphanumeric" {
  type    = string
  default = "familyplanit"
}

variable "env" {
  type    = string
  default = "dev"
}

variable "image_name" {
  type = string
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "container_port" {
  type    = number
  default = 3000
}

variable "domain_name" {
  type    = string
}